var _ = require("underscore");

module.exports = function(tweet) {
    var increase = tweet.increase || 0;
    if (tweet.text.substring(0, 10).indexOf("Dates f") > -1)
        debugger;
    _.each(tweet.user_mentions, function(user) {
        var insert = "<a href='https://twitter.com/" + user.screen_name + "' target='_blank'>@" + user.screen_name + "</a>";
        tweet.html = tweet.html.slice(0, user.indices[0]+increase) + insert + tweet.html.slice(user.indices[1]+increase);
        increase += insert.length - ("@" + user.screen_name).length;
    });
    if (tweet.user_mentions.length > 0)
        tweet.increase = tweet.increase ? (tweet.increase + increase) : increase;
    return tweet;
}