module.exports = {


  friendlyName: 'Edit question',


  description: 'Edit question.',


  extendedDescription: '',


  inputs: {

    questionId: {
      description: 'The question id.',
      type: 'number',
      required: true,
    },

    questionText: {
      description: 'The question text.',
      type: 'string',
      required: true,
    },

  },


  exits: {

    success: {
      description: '',
      extendedDescription: ''
    },

    questionSize: {
      responseType: 'questionSize',
      description: 'It looks like the question size is too big or too small.',
    },

  },


  fn: async function (inputs, exits) {

    var questionId = inputs.questionId;
    var text = inputs.questionText;

    var questionRecord = await Question.findOne({
        id: questionId,
    });

    if (text.length <= 0 || text.length > 240) {
        throw 'questionSize';
    }

    await Question.update({id: questionId}).set({text:text});

    return exits.success();

  }

};
