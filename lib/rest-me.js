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

RestMe.prototype.put = function() {
    return this.strategy.put.apply(this.strategy, arguments);
}

RestMe.prototype.post = function() {
    return this.strategy.post.apply(this.strategy, arguments);
}

RestMe.prototype.delete = function() {
    return this.strategy.delete.apply(this.strategy, arguments);
}

module.exports = RestMe;
