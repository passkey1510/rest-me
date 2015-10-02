'use strict';
function RestMe() {

}

RestMe.prototype.use = function(strategy) {
    this.strategy = strategy;
    return this;
}

RestMe.prototype.getPaginatedList = function() {
    return this.strategy.getPaginatedList.apply(this.strategy, arguments);
}

RestMe.prototype.get = function() {
    return this.strategy.get.apply(this.strategy, arguments);
}

module.exports = RestMe;
