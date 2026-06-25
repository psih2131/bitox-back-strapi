'use strict';

const parseTransferXlsx = require('./parse-transfer-xlsx');

const INVOICE_ELEMENT_TITLES = [
  'Для физических лиц',
  'Для юридических лиц',
];

function buildInvoiceElements(row) {
  const subtitles = [row.invoiceElement1, row.invoiceElement2];

  return INVOICE_ELEMENT_TITLES.map((title, index) => ({
    title,
    subtitle: subtitles[index] || '',
  }));
}

function buildFaqQuestions(row) {
  const pairs = [
    [row.faqQ1, row.faqA1],
    [row.faqQ2, row.faqA2],
    [row.faqQ3, row.faqA3],
    [row.faqQ4, row.faqA4],
  ];

  return pairs.map(([title, text]) => ({
    title: title || '',
    text: text || '',
  }));
}

function buildTransferData(row) {
  return {
    title: row.slug,
    slug: row.slug,
    subtitle: row.subtitle,
    service_hero_sec: {
      title: row.slug,
      subtitle: row.subtitle,
    },
    services_invoice_sec: {
      invoice_elements: buildInvoiceElements(row),
    },
    services_faq_sec: {
      title: row.faqTitle,
      questions_list: buildFaqQuestions(row),
    },
  };
}

module.exports = ({ strapi }) => ({
  async importFromFile(file) {
    const filePath = file.path || file.filepath;

    if (!filePath) {
      throw new Error('Не удалось прочитать загруженный файл');
    }

    const rows = parseTransferXlsx(filePath);
    const result = {
      total: rows.length,
      created: 0,
      updated: 0,
      skipped: 0,
      errors: [],
      items: [],
    };

    for (const row of rows) {
      try {
        const data = buildTransferData(row);
        const existing = await strapi.documents('api::transfers-page.transfers-page').findMany({
          filters: {
            slug: {
              $eq: row.slug,
            },
          },
          limit: 1,
        });

        if (existing.length > 0) {
          await strapi.documents('api::transfers-page.transfers-page').update({
            documentId: existing[0].documentId,
            data,
          });

          result.updated += 1;
          result.items.push({
            slug: row.slug,
            action: 'updated',
          });
        } else {
          await strapi.documents('api::transfers-page.transfers-page').create({
            data,
            status: 'draft',
          });

          result.created += 1;
          result.items.push({
            slug: row.slug,
            action: 'created',
          });
        }
      } catch (error) {
        result.errors.push({
          slug: row.slug,
          url: row.url,
          message: error.message,
        });
      }
    }

    return result;
  },
});
