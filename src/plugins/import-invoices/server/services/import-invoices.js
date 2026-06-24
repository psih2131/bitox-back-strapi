'use strict';

const parseInvoiceXlsx = require('./parse-invoice-xlsx');

const INVOICE_SEC_TITLE = 'Какие инвойсы мы помогаем оплачивать';

const INVOICE_ELEMENT_TITLES = [
  'Инвойсы поставщикам',
  'Инвойсы за услуги',
  'Сложные направления',
];

function buildInvoiceElements(row) {
  const subtitles = [row.invoiceElement1, row.invoiceElement2, row.invoiceElement3];

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

function buildInvoiceData(row) {
  return {
    title: row.slug,
    slug: row.slug,
    subtitle: row.subtitle,
    service_hero_sec: {
      title: row.slug,
      subtitle: row.subtitle,
    },
    services_invoice_sec: {
      title: INVOICE_SEC_TITLE,
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

    const rows = parseInvoiceXlsx(filePath);
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
        const data = buildInvoiceData(row);
        const existing = await strapi.documents('api::invoice.invoice').findMany({
          filters: {
            slug: {
              $eq: row.slug,
            },
          },
          limit: 1,
        });

        if (existing.length > 0) {
          await strapi.documents('api::invoice.invoice').update({
            documentId: existing[0].documentId,
            data,
          });

          result.updated += 1;
          result.items.push({
            slug: row.slug,
            action: 'updated',
          });
        } else {
          await strapi.documents('api::invoice.invoice').create({
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
