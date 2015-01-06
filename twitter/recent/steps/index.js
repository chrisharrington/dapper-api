var _ = require("underscore");

var steps = [
    require("./mapper"),
    require("./users"),
    require("./urls")
    //require("./hashtags")
];

module.exports = function(tweets) {
    return _.map(tweets, function(tweet) {
        _.each(steps, function(step) {
            tweet = step(tweet); 
        });
        return tweet;
    });
};