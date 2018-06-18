module.exports = {


  friendlyName: 'Get event list',


  description: 'Get event list.',


  extendedDescription: '',


  inputs: {

  },


  exits: {

    success: {
      description: '',
      extendedDescription: ''
    },

  },


  fn: async function (inputs, exits) {

    var eventRecords = await Event.find();

    // Send success response
    return exits.success(eventRecords);

  }

};
