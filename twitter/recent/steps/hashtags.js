var _ = require("underscore");

module.exports = function(tweet) {
     var increase = tweet.increase || 0;
    if (tweet.text.substring(0, 10).indexOf("Dates f") > -1)
        debugger;
    _.each(tweet.hashtags, function(hashtag) {
        var insert = "<a href='https://twitter.com/hashtag/" + hashtag.text + "' target='_blank'>#" + hashtag.text + "</a>";
        tweet.html = tweet.html.slice(0, hashtag.indices[0]+increase) + insert + tweet.html.slice(hashtag.indices[1]+increase);
        increase += insert.length - hashtag.text.length-1;
    });
    if (tweet.hashtags.length > 0)
        tweet.increase = tweet.increase ? (tweet.increase + increase) : increase;
    return tweet;
}