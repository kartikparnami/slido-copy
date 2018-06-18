/**
 * alreadyUnhighlighted.js
 */
module.exports = function alreadyUnhighlighted() {

  var req = this.req;
  var res = this.res;

  sails.log.verbose('Ran custom response: res.alreadyUnhighlighted()');

  if (req.wantsJSON) {
    return res.status(400).send('Already unhighlighted');
  }
  else {
    return res.status(400).view('Bad request');
  }

};
