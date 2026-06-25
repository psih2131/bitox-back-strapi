'use strict';

/**
 * global-info router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::global-info.global-info');
