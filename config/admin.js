module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1a28730c71ad08596e47cf7bb924220f'),
  },
});
