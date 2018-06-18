/**
 * threeQuestionAlreadyHighlighted.js
 */
module.exports = function threeQuestionAlreadyHighlighted() {

  var req = this.req;
  var res = this.res;

  sails.log.verbose('Ran custom response: res.threeQuestionAlreadyHighlighted()');

  if (req.wantsJSON) {
    return res.status(400).send('Three Questions already highlighted');
  }
  else {
    return res.status(400).view('Bad request');
  }

};
