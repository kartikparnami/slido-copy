module.exports = {


  friendlyName: 'Delete question',


  description: 'Delete question.',


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

    alreadyDeleted: {
      responseType: 'alreadyDeleted',
      description: 'It looks like the question is already deleted.',
    },

  },


  fn: async function (inputs, exits) {

    var questionId = inputs.questionId;

    var questionRecord = await Question.findOne({
        id: questionId,
    });

    if (!questionRecord.isActive) {
        throw 'alreadyDeleted';
    }

    await Question.update({id: questionId}).set({isActive:false});

    return exits.success();

  }

};
