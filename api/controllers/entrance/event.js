module.exports = {


  friendlyName: 'Event enter',


  description: 'Enter event using valid event code.',


  extendedDescription:
`This action attempts to look up the event record in the database with the
specified event.  Then, if such an event exists and the event is still live, it
allows the entry.`,


  inputs: {

    eventCode: {
      description: 'The event code.',
      type: 'string',
      required: true
    },

  },


  exits: {

    success: {
      description: 'The requested event page has been entered.',
      extendedDescription:
`Nothing`
    },

    expiredEventCode: {
      description: `The event you are trying to enter has expired.`,
      responseType: 'expiredevent'
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see api/responses/unauthorized).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    },

    badEventCode: {
      description: `The event code does not match any events.`,
      responseType: 'noevent'
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see api/responses/unauthorized).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    },

  },


  fn: async function (inputs, exits) {

    // Look up by the event code.
    var eventRecord = await Event.findOne({
      eventCode: inputs.eventCode.toLowerCase(),
    });

    // If there was no matching user, respond thru the "badCombo" exit.
    if(!eventRecord) {
      throw 'badEventCode';
    }

    var currentDate = new Date();
    if(eventRecord.start < currentDate && eventRecord.end > currentDate) {
      return exits.success();
    } else {
      throw 'expiredEventCode';
    }

  }

};
