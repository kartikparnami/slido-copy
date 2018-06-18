/**
 * Event.js
 *
 * An event.
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    eventCode: {
      type: 'string',
      required: true,
      unique: true,
      description: 'Securely hashed representation of the user\'s login password.',
      example: 'aksjd-kjsad'
    },

    start: {
      type: 'number',
      required: true,
      description: 'A JS timestamp (epoch ms) representing the moment at which this event starts.',
      example: 1502844074211
    },

    end: {
      type: 'number',
      required: true,
      description: 'A JS timestamp (epoch ms) representing the moment at which this event ends.',
      example: 1502844074211
    },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝
    // n/a

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    questions: {
      collection: 'question',
      via: 'event'
    }

  },


};
