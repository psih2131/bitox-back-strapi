'use strict';

/**
 * form-request controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::form-request.form-request', ({ strapi }) => ({
  async submit(ctx) {
    const body = ctx.request.body?.data || ctx.request.body || {};

    const title_form = typeof body.title_form === 'string' ? body.title_form.trim() : '';
    const url_page = typeof body.url_page === 'string' ? body.url_page.trim() : '';
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
    const text_1 = typeof body.text_1 === 'string' ? body.text_1.trim() : '';
    const text_2 = typeof body.text_2 === 'string' ? body.text_2.trim() : '';
    const text_3 = typeof body.text_3 === 'string' ? body.text_3.trim() : '';

    if (!phone) {
      return ctx.badRequest('phone is required');
    }

    const entry = await strapi.documents('api::form-request.form-request').create({
      data: {
        title_form: title_form || null,
        url_page: url_page || null,
        name: name || null,
        phone,
        text_1: text_1 || null,
        text_2: text_2 || null,
        text_3: text_3 || null,
      },
      status: 'published',
    });

    ctx.body = { data: entry };
  },
}));
