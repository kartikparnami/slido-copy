parasails.registerPage('viewEvent', {
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

    // should show question map
    shouldShowQuestion: {},

    // Like data
    likeData: {},

    // Dislike data
    dislikeData: {},

    // 'popular': Most likes, 'createdAsc/createdDesc': Created time
    sortBy: 'popular',

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
    this.ip = this.syncGetRequest('http://ip.jsontest.com/')['ip'];
    var that = this;
    this.refreshData(this.eventCode);
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    submittedForm: async function() {
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

    postLike: async function() {
        this.refreshData(this.eventCode);
    },

    postDislike: async function() {
        this.refreshData(this.eventCode);
    },

    popularSorting: function(a, b) {
        if (a.likeCount < b.likeCount) {
            return true;
        } else if (a.likeCount > b.likeCount) {
            return false;
        } else if (a.dislikeCount > b.dislikeCount) {
            return true;
        } else if (a.dislikeCount < b.dislikeCount) {
            return false;
        } else {
            return a.createdAt < b.createdAt;
        }
    },

    createdDescSorting: function(a, b) {
        return a.createdAt < b.createdAt;
    },

    createdAscSorting: function(a, b) {
        return a.createdAt > b.createdAt;
    },

    sortQuestions: function() {
        if (this.sortBy === 'popular') {
            this.event.questions.sort(this.popularSorting);
        } else if (this.sortBy === 'createdDesc') {
            this.event.questions.sort(this.createdDescSorting);
        } else {
            this.event.questions.sort(this.createdAscSorting);
        }
    },

    refreshData: function(eventCode) {
        this.event = this.getEvent(eventCode);
        var that = this;
        this.event.questions.forEach(function(question) {
            that.shouldShowQuestion[question.id] = true;
            that.likeData[question.id] = {
                'questionId': question.id,
                'ipAddress': that.ip,
            };
            that.dislikeData[question.id] = {
                'questionId': question.id,
                'ipAddress': that.ip,
            };
            question.likeCount = question.likes.filter(function(obj){return obj.isLike}).length;
            question.dislikeCount = question.likes.filter(function(obj){return !obj.isLike}).length;
            that.shouldShowQuestion[question.id] = !question.likes.some(l => l.ipAddress === that.ip);
        });
        this.sortQuestions();
    },

  }
});
