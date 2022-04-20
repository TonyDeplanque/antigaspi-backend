'use strict';

/**
 * messaging router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::messaging.messaging');
