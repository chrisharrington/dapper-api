var _ = require("underscore");

module.exports = function(tweet) {
    _.each(tweet.user_mentions, function(user) {
        tweet.html = tweet.html.replace(new RegExp("@" + user.screen_name + "( |:)"), "<a href='https://twitter.com/" + user.screen_name + "' target='_blank'>@" + user.screen_name + "</a> "); 
    });
    return tweet;
}