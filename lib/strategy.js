function Strategy() {

}

Strategy.prototype.get = function(path) {
    throw new Error('Strategy#authenticate must be overridden by subclass');
}

Strategy.prototype.getPaginatedList = function(path) {
    throw new Error('Strategy#authenticate must be overridden by subclass');
}

module.exports = Strategy;