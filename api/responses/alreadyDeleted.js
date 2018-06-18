/**
 * alreadyDeleted.js
 */
module.exports = function alreadyDeleted() {

  var req = this.req;
  var res = this.res;

  sails.log.verbose('Ran custom response: res.alreadyDeleted()');

  if (req.wantsJSON) {
    return res.status(400).send('Already deleted');
  }
  else {
    return res.status(400).view('Bad request');
  }

};
