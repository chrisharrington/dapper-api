var _ = require("underscore"),
    moment = require("moment");

module.exports = function(tweet) {
    return {
        html: tweet.text,
        text: tweet.text,
        retweets: tweet.retweet_count,
        favourites: tweet.favorite_count,
        date: tweet.created_at,
        hashtags: tweet.entities.hashtags || [],
        user_mentions: tweet.entities.user_mentions || [],
        urls: tweet.entities.urls || []
    };
}