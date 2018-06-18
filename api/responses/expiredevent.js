module.exports = function expired() {

  var req = this.req;
  var res = this.res;

  sails.log.verbose('Ran custom response: res.expired()');

  if (req.wantsJSON) {
    return res.send('Event expired');
  }
  else {
    return res.status(498).view('498');
  }

};