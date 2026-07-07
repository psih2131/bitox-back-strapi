'use strict';

/**
 * stats-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::stats-component.stats-component');
