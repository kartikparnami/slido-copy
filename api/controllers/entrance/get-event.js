module.exports = {


  friendlyName: 'Get event',


  description: 'Get event from eventCode.',


  extendedDescription: '',


  inputs: {

    eventCode: {
      description: 'The eventCode to get event.',
      type: 'string',
      required: true
    },

  },


  exits: {

    success: {
      description: '',
      extendedDescription: ''
    },

    badEventCode: {
      description: `Does not match.`,
      responseType: 'unauthorized'
      // ^This uses the custom `unauthorized` response located in `api/responses/unauthorized.js`.
      // To customize the generic "unauthorized" response across this entire app, change that file
      // (see api/responses/unauthorized).
      //
      // To customize the response for _only this_ action, replace `responseType` with
      // something else.  For example, you might set `statusCode: 498` and change the
      // implementation below accordingly (see http://sailsjs.com/docs/concepts/controllers).
    }

  },


  fn: async function (inputs, exits) {

    var nestedPop = require('nested-pop');
    // Look up by the email address.
    // (note that we lowercase it to ensure the lookup is always case-insensitive,
    // regardless of which database we're using)
    var eventRecord = await Event.findOne({
      eventCode: inputs.eventCode.toLowerCase(),
    }).populateAll().then(function(event){
        return nestedPop(event, {
          questions: [
            'likes'
          ]
        }).then(function(event) {
          return event;
        });
    });

    // If there was no matching user, respond thru the "badCombo" exit.
    if(!eventRecord) {
      throw 'badCombo';
    }

    // If the password doesn't match, then also exit thru "badCombo".
    

    // Send success response (this is where the session actually gets persisted)
    return exits.success(eventRecord);

  }

};
