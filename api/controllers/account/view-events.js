module.exports = {


  friendlyName: 'View events',


  description: 'Display "View events" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/view-events'
    }

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
