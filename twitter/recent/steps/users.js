var _ = require("underscore");

module.exports = function(tweet) {
    _.each(tweet.user_mentions, function(user) {
        //tweet.html = tweet.html.replace(new RegExp("@" + user.screen_name + "( |:|\\?|!|\\.|,|;|///)"), "<a href='https://twitter.com/" + user.screen_name + "' target='_blank'>@" + user.screen_name + "</a> "); 
        
        var regex = new RegExp("@" + user.screen_name + "[^A-Za-z_] ");
        while (match = regex.exec(tweet.html)) {
            var value = match[0], location = match.index;
            var punctuation = value.replace("@" + user.screen_name, "");
            var result = "<a href='https://twitter.com/" + user.screen_name + "' target='_blank'>@" + user.screen_name + "</a>" + punctuation;
            tweet.html = tweet.html.slice(0, location) + result + tweet.html.slice(location+value.length);
        }
    });
    return tweet;
}