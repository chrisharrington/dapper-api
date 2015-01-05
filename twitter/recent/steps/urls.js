var _ = require("underscore");

module.exports = function(tweet) {
    _.each(tweet.urls, function(url) {
        tweet.html = tweet.html.replace(url.url, "<a href='" + url.expanded_url + "' target='_blank'>" + url.display_url + "</a>"); 
    });
    return tweet;
}