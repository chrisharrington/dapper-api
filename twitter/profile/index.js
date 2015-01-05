var Promise = require("bluebird"),
    Pipeline = require("../../pipeline"),
    
    steps = require("./steps");

module.exports = function() {
    return new Pipeline(steps).go();
};