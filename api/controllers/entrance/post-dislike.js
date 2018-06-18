module.exports = {


  friendlyName: 'Post dislike',


  description: 'Post dislike.',


  extendedDescription: '',


  inputs: {

    ipAddress: {
      description: 'The ipAddress to post for.',
      type: 'string',
      required: true,
    },

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

  },


  fn: async function (inputs, exits) {

    var ipAddress = inputs.ipAddress;
    var questionId = inputs.questionId;

    var newLikeRecord = await Like.create(Object.assign({
      question: questionId,
      isLike: false,
      ipAddress: ipAddress,
    }, {}))
    .fetch();

    return exits.success(newLikeRecord);

  }

};
