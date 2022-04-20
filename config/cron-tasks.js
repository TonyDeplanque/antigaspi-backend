const dayjs = require("dayjs");
module.exports = {
  notifiyProductExpiryDates: {
    task: async ({strapi}) => {
      const currentDate = dayjs().format('YYYY-MM-DD')
      const users = await strapi.entityService.findMany('plugin::users-permissions.user', {
        populate: ['fridge', 'fridge.products', 'messagings'],
        filters: {
          fridge: {
            products: {
              expiryDate: {
                $eq: currentDate
              }
            }
          },
          messagings: {
            token: {
              $notNull: true
            }
          }
        }
      });

      for (const user of users) {
        for (const messaging of user.messagings) {
          await strapi.service('api::messaging.messaging').sendNotification(
              messaging.token,
              {
                title: "Antigaspi",
                body: "Un ou plusieurs produits du frigo arrive à péremption aujourd'hui"
              }
          )
        }
      }
    },
    options: {
      rule: '0 10 * * *',
      tz: 'Europe/Paris',
    },
  },
};
