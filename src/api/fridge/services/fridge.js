'use strict';

/**
 * fridge service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fridge.fridge');
