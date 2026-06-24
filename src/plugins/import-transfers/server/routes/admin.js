'use strict';

module.exports = {
  type: 'admin',
  routes: [
    {
      method: 'POST',
      path: '/import',
      handler: 'import.import',
      config: {
        policies: ['admin::isAuthenticatedAdmin'],
      },
    },
  ],
};
