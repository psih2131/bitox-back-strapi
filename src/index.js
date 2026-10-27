'use strict';

const seedHomePlatformLinks = require('./bootstrap/seed-home-platform-links');
const { registerBlogPostDates, backfillBlogPostDates } = require('./bootstrap/blog-post-dates');
const updateInvoiceHeroSubtitles = require('./bootstrap/update-invoice-hero-subtitles');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    registerBlogPostDates(strapi);
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    await seedHomePlatformLinks(strapi);
    await backfillBlogPostDates(strapi);
    await updateInvoiceHeroSubtitles(strapi);
  },
};
