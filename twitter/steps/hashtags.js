var _ = require("underscore");

module.exports = function(tweet) {
    _.each(tweet.hashtags, function(hashtag) {
        tweet.html = tweet.html.replace("#" + hashtag.text + " ", "<a href='https://twitter.com/hashtag/" + hashtag.text + "' target='_blank'>#" + hashtag.text + "</a> "); 
    });
    return tweet;
}