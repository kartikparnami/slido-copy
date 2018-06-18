module.exports = {


  friendlyName: 'Unhighlight question',


  description: 'Unhighlight question.',


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

    alreadyUnhighlighted: {
      responseType: 'alreadyUnhighlighted',
      description: 'It looks like the question is already unhighlighted.',
    },

  },


  fn: async function (inputs, exits) {

    var questionId = inputs.questionId;

    var questionRecord = await Question.findOne({
        id: questionId,
    });

    if (!questionRecord.isHighlighted) {
        throw 'alreadyUnhighlighted';
    }

    await Question.update({id: questionId}).set({isHighlighted:false});

    return exits.success();

  }

};
