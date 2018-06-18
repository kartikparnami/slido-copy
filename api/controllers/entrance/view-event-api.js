module.exports = {


  friendlyName: 'Create question',


  description: 'Create question.',


  extendedDescription:
`Create question`,


  inputs: {

    eventCode: {
      required: true,
      type: 'string',
      description: 'Event code.',
      extendedDescription: 'Event code.',
    },

    questionText: {
      required: true,
      type: 'string',
      example: 'What is xyz?',
      description: 'Question text.'
    },

  },


  exits: {

    questionSize: {
      responseType: 'questionSize',
      description: 'Question too bog or small.',
    },

  },


  fn: async function (inputs, exits) {

    var eventCode = inputs.eventCode;
    var questionText = inputs.questionText;

    if (questionText.length == 0 || questionText.length > 240) {
      throw 'questionSize';
    }

    var eventRecord = await Event.findOne({
      eventCode: inputs.eventCode.toLowerCase(),
    });

    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    var newQuestionRecord = await Question.create(Object.assign({
      event: eventRecord.id,
      text: questionText,
      isHighlighted: false,
      isActive: true,
    }, {}))
    .fetch();

    // Since everything went ok, send our 200 response.
    return exits.success();

  }

};
