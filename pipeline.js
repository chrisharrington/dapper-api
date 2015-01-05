var Promise = require("bluebird"),
    _ = require("underscore");

module.exports = function(steps) {
    this.go = function() {
        if (!steps || steps.length === 0)
            throw new Error("Pipeline: invalid step list.");

        var promise = steps[0]();
        for (var i = 1; i < steps.length; i++)
            (function(index) {
                promise = promise.then(function(result) {
                    return steps[index](result);
                });
            })(i);
        return promise;
    }
};