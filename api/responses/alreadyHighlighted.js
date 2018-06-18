/**
 * alreadyHighlighted.js
 */
module.exports = function alreadyHighlighted() {

  var req = this.req;
  var res = this.res;

  sails.log.verbose('Ran custom response: res.alreadyHighlighted()');

  if (req.wantsJSON) {
    return res.status(400).send('Already highlighted');
  }
  else {
    return res.status(400).view('Bad request');
  }

};
