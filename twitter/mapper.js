var _ = require("underscore");

module.exports = {
    tweets: function(tweets) {
        return _.map(tweets, function(tweet) {
            return {
                text: tweet.text,
                retweets: tweet.retweet_count,
                favourites: tweet.favorite_count,
                hashtags: tweet.entities.hashtags || [],
                user_mentions: tweet.entities.user_mentions || [],
                urls: tweet.entities.urls || []
            }
        });
    }
}