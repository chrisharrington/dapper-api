var _ = require("underscore"),
    moment = require("moment");

module.exports = function(tweet) {
    return {
        html: tweet.text,
        text: tweet.text,
        retweets: tweet.retweet_count,
        favourites: tweet.favorite_count,
        timeago: moment(tweet.created_at, "dd MMM DD HH:mm:ss ZZ YYYY").fromNow(),
        hashtags: tweet.entities.hashtags || [],
        user_mentions: tweet.entities.user_mentions || [],
        urls: tweet.entities.urls || []
    };
}