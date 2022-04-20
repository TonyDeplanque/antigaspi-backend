'use strict';

/**
 *  messaging controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::messaging.messaging', {

  async create(ctx) {
    const { token } = ctx.request.body.data;
    const user = ctx.state.user

    const result = await strapi.db.query('api::messaging.messaging').findOne({
      where: { token: token, user: user.id },
    });

    if (result) {
      ctx.body = 'ok';
      return;
    }

    // NEED REFACTO -> NEED TO USE super.create(ctx)
    return await strapi.service('api::messaging.messaging').create({data: { token: token, user: user.id}});
  },

});
