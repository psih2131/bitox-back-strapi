'use strict';

const XLSX = require('xlsx');

function extractSlugFromUrl(value) {
  const raw = String(value || '').trim();

  if (!raw) {
    return null;
  }

  try {
    const pathname = new URL(raw).pathname.replace(/\/+$/, '');
    const parts = pathname.split('/').filter(Boolean);

    return parts[parts.length - 1] || null;
  } catch {
    const parts = raw.replace(/\/+$/, '').split('/').filter(Boolean);

    return parts[parts.length - 1] || null;
  }
}

function isDataRow(row) {
  const url = String(row.A || '').trim();

  return url.startsWith('http') && url.includes('/transfers/');
}

function parseTransferXlsx(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const rows = XLSX.utils.sheet_to_json(worksheet, { header: 'A', defval: '' });

  return rows
    .filter(isDataRow)
    .map((row) => {
      const slug = extractSlugFromUrl(row.A);
      const subtitle = String(row.B || '').trim();

      return {
        slug,
        subtitle,
        url: String(row.A || '').trim(),
        invoiceElement1: String(row.C || '').trim(),
        invoiceElement2: String(row.D || '').trim(),
        faqTitle: String(row.E || '').trim(),
        faqQ1: String(row.F || '').trim(),
        faqA1: String(row.G || '').trim(),
        faqQ2: String(row.H || '').trim(),
        faqA2: String(row.I || '').trim(),
        faqQ3: String(row.J || '').trim(),
        faqA3: String(row.K || '').trim(),
        faqQ4: String(row.L || '').trim(),
        faqA4: String(row.M || '').trim(),
      };
    })
    .filter((row) => row.slug);
}

module.exports = parseTransferXlsx;
