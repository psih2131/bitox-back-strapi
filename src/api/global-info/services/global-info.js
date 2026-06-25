'use strict';

/**
 * global-info service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-info.global-info');
