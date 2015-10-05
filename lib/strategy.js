function Strategy() {

}

Strategy.prototype.get = function() {
    throw new Error('Strategy#get must be overridden by subclass');
}

Strategy.prototype.getPaginatedList = function() {
    throw new Error('Strategy#getPaginatedList must be overridden by subclass');
}

Strategy.prototype.put = function() {
    throw new Error('Strategy#put must be overridden by subclass');
}

Strategy.prototype.post = function() {
    throw new Error('Strategy#post must be overridden by subclass');
}

Strategy.prototype.delete = function() {
    throw new Error('Strategy#delete must be overridden by subclass');
}

module.exports = Strategy;