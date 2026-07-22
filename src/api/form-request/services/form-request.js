'use strict';

/**
 * form-request service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::form-request.form-request');
