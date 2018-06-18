/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {


  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome':            { action: 'dashboard/view-welcome' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /login':                  { action: 'entrance/view-login' },
  'GET /view-event/:eventCode':  { action: 'entrance/view-event' },

  'GET /account':                             { action: 'account/view-account-overview' },
  'GET /account/create-event':                { action: 'account/view-create-event' },
  'GET /account/view-events':                 { action: 'account/view-events' },
  'GET /account/view-event-admin/:eventCode': { action: 'account/view-event-admin' },

  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the CloudSDK library.
  '/api/v1/account/logout':                             { action: 'account/logout' },
  'GET   /api/v1/account/view-events':                  { action: 'account/view-events-api' },
  'POST  /api/v1/account/delete-question':              { action: 'account/delete-question' },
  'POST  /api/v1/account/edit-question':                { action: 'account/edit-question' },
  'POST  /api/v1/account/highlight-question':           { action: 'account/highlight-question' },
  'POST  /api/v1/account/unhighlight-question':         { action: 'account/unhighlight-question' },
  'PUT   /api/v1/entrance/login':                       { action: 'entrance/login' },
  'PUT   /api/v1/entrance/event':                       { action: 'entrance/event' },
  'GET   /api/v1/entrance/get-event':                   { action: 'entrance/get-event' },
  'POST   /api/v1/entrance/post-like':                  { action: 'entrance/post-like' },
  'POST   /api/v1/entrance/post-dislike':               { action: 'entrance/post-dislike' },
  'POST   /api/v1/entrance/view-event':                 { action: 'entrance/view-event-api' },
  'POST   /api/v1/account/create-event':                { action: 'account/create-event' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝
  '/logout':                  '/api/v1/account/logout',

};
