module.exports = {


  friendlyName: 'Create event',


  description: 'Create event.',


  extendedDescription:
`Create event`,


  inputs: {

    eventCode: {
      required: true,
      type: 'string',
      description: 'Event code.',
      extendedDescription: 'Event code.',
    },

    start: {
      required: true,
      type: 'string',
      example: 'dd/mm/yyyy hh:mins AM/PM',
      description: 'Start time.'
    },

    end:  {
      required: true,
      type: 'string',
      example: 'dd/mm/yyyy hh:mins AM/PM',
      description: 'End time.',
    }

  },


  exits: {

    eventCodeAlreadyPresent: {
      responseType: 'eventCodeAlreadyPresent',
      description: 'It looks like there\'s already an event with your event code.',
    },

    startTimeAfterEndTime: {
      responseType: 'startTimeAfterEndTime',
      description: 'It looks like the start time is after the end time.',
    },

  },


  fn: async function (inputs, exits) {

    var newEventCode = inputs.eventCode;
    var startTime = new Date(inputs.start).getTime();
    var endTime = new Date(inputs.end).getTime();

    if (startTime >= endTime) {
      throw 'startTimeAfterEndTime';
    }

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    var newEventRecord = await Event.create(Object.assign({
      eventCode: newEventCode,
      start: startTime,
      end: endTime,
    }, {}))
    .intercept('E_UNIQUE', 'eventCodeAlreadyPresent')
    .fetch();

    // Since everything went ok, send our 200 response.
    return exits.success();

  }

};
