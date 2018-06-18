module.exports = {


  friendlyName: 'View event from admin',


  description: 'Display "View event from admin" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/view-event-admin'
    }

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
