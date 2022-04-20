'use strict';
const firebase = require("firebase/app");

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    strapi.contentType('plugin::users-permissions.user').lifecycles = {
      async afterCreate(event) {
        const {result} = event;
        try {
          await strapi.entityService.create('api::fridge.fridge', {
            data: {
              users: [result.id]
            }
          })
        } catch (e) {
          console.error(e)
          await strapi.entityService.delete('plugin::users-permissions.user', result.id)
        }
      },
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    const firebaseConfig = strapi.config.get('firebase')
    strapi.firebase = firebase.initializeApp(firebaseConfig);
  },
};
