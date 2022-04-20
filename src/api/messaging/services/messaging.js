'use strict';

/**
 * messaging service.
 */
const axios = require('axios');
const { createCoreService } = require('@strapi/strapi').factories;


module.exports = createCoreService('api::messaging.messaging', {
    async sendNotification(token, data) {
      const firebaseConfig = strapi.config.get('firebase')

      await axios.post('https://fcm.googleapis.com/fcm/send', {
        to: token,
        data
      },
        {
          headers: {
            Authorization: firebaseConfig.authorization
          }
        }
      );
    }
  }
);
