module.exports = {


  friendlyName: 'View create event',


  description: 'Display "Create event" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/create-event'
    }

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
