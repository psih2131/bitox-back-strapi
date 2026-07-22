'use strict';

/**
 * Custom public form-request routes
 */

module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/form-requests/submit',
      handler: 'form-request.submit',
      config: {
        auth: false,
      },
    },
  ],
};
