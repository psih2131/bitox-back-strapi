'use strict';

/**
 * invoice-singl service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::invoice-singl.invoice-singl');
