var _ = require("underscore");

var steps = [
    require("./mapper")
];

module.exports = function(tweets) {
    return _.map(tweets, function(tweet) {
        _.each(steps, function(step) {
            tweet = step(tweet); 
        });
        return tweet;
    });
};