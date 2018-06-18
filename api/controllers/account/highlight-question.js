module.exports = {


  friendlyName: 'Highlight question',


  description: 'Highlight question.',


  extendedDescription: '',


  inputs: {

    questionId: {
      description: 'The question id.',
      type: 'number',
      required: true,
    },

  },


  exits: {

    success: {
      description: '',
      extendedDescription: ''
    },

    alreadyHighlighted: {
      responseType: 'alreadyHighlighted',
      description: 'It looks like the question is already highlighted.',
    },

    threeQuestionAlreadyHighlighted: {
      responseType: 'threeQuestionAlreadyHighlighted',
      description: 'It looks like the question is already highlighted.',
    },

  },


  fn: async function (inputs, exits) {

    var questionId = inputs.questionId;

    var questionRecord = await Question.findOne({
        id: questionId,
    }).populateAll();

    if (questionRecord.isHighlighted) {
        throw 'alreadyHighlighted';
    }

    var eventRecord = await Event.findOne({
        eventCode: questionRecord.event.eventCode
    }).populateAll();

    var numHighlighted = eventRecord.questions.filter(function(obj){return obj.isActive && obj.isHighlighted}).length;

    if (numHighlighted >= 3) {
        throw 'threeQuestionAlreadyHighlighted';
    }

    await Question.update({id: questionId}).set({isHighlighted:true});

    return exits.success();

  }

};
