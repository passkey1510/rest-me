'use strict';
function RestMe() {

}

RestMe.prototype.use = function(strategy) {
    this.strategy = strategy;
    return this;
}

RestMe.prototype.getPaginatedList = function(path) {
    return this.strategy.getPaginatedList(path);
}

RestMe.prototype.get = function(path) {
    return this.strategy.get(path);
}

module.exports = RestMe;
