'use strict';

module.exports = {
  async import(ctx) {
    const file = ctx.request.files?.file;

    if (!file) {
      return ctx.badRequest('Файл не передан. Загрузите .xlsx');
    }

    const result = await strapi
      .plugin('import-invoices')
      .service('importInvoices')
      .importFromFile(file);

    ctx.body = result;
  },
};
