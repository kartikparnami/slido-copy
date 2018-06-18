module.exports = {


  friendlyName: 'View event',


  description: 'Display "View event" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/entrance/view-event'
    }

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
