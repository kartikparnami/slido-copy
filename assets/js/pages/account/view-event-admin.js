parasails.registerPage('viewEventAdmin', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
  data: {
    // Main syncing/loading state for this page.
    syncing: false,

    // Form data
    formData: { /* … */ },

    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `formData`.
    formErrors: { /* … */ },

    // A set of validation rules for our form.
    // > The form will not be submitted if these are invalid.
    formRules: {
      questionText: { required: true },
    },

    // Server error state for the form
    cloudError: '',

    // Event instance
    event: null,

    // Question ids of highlighted questions.
    highlightedQuestionIds: [],

    // Edit data
    editQuestion: {},

    // Delete data
    deleteQuestion: {},

    // Highlight daata
    highlightQuestion: {},

    // Unhighlight data
    unhighlightQuestion: {},

  },

  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
  },
  mounted: async function() {
    var uriParts = this.$el.baseURI.split('/');
    this.eventCode = uriParts[uriParts.length - 1];
    this.formData.eventCode = this.eventCode;
    var that = this;
    this.refreshData(this.eventCode);
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    editQuestionFunc: async function() {
        this.refreshData(this.eventCode);
    },

    highlightQuestionFunc: async function() {
        this.refreshData(this.eventCode);
    },

    deleteQuestionFunc: async function() {
        this.refreshData(this.eventCode);
    },

    unhighlightQuestionFunc: async function() {
        this.refreshData(this.eventCode);
    },

    syncGetRequest: function(url) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", url, false); // false for synchronous request
        xmlHttp.send(null);
        return JSON.parse(xmlHttp.responseText);
    },

    getEvent: function(eventCode) {
        var url = '/api/v1/entrance/get-event/?eventCode=' + eventCode;
        return this.syncGetRequest(url)
    },

    createdDescSorting: function(a, b) {
        return a.createdAt < b.createdAt;
    },

    sortQuestions: function() {
        this.event.questions.sort(this.createdDescSorting);
        this.event.highlightedQuestions.sort(this.createdDescSorting);
    },

    refreshData: function(eventCode) {
        this.event = this.getEvent(eventCode);
        this.event.highlightedQuestions = [];
        this.highlightedQuestionIds = [];
        var that = this;
        this.event.questions.forEach(function(question) {
            that.editQuestion[question.id] = {
                'questionId': question.id,
            };
            that.deleteQuestion[question.id] = {
                'questionId': question.id,
            };
            that.highlightQuestion[question.id] = {
                'questionId': question.id,
            };
            that.unhighlightQuestion[question.id] = {
                'questionId': question.id,
            };
            question.likeCount = question.likes.filter(function(obj){return obj.isLike}).length;
            question.dislikeCount = question.likes.filter(function(obj){return !obj.isLike}).length;
            if (question.isHighlighted) {
                that.event.highlightedQuestions.push(question);
                that.highlightedQuestionIds.push(question.id);
            }
        });
        this.sortQuestions();
    },

  }
});
