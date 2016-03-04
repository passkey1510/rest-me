var RestMe = require('./rest-me');

exports = module.exports = new RestMe();
exports.Strategy = require('./strategy');
exports.createInstance = function() {
  return new RestMe();
}
