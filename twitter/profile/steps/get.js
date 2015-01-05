var Twitter = require("twit"),
    Promise = require("bluebird"),
    config = require("../../../config").twitter;

module.exports = function(context) {
    return new Promise(function(resolve, reject) {
        var twitter = new Twitter({
            consumer_key: config.consumerKey,
            consumer_secret: config.consumerSecret,
            access_token: config.tokenKey,
            access_token_secret: config.tokenSecret
        });

        twitter.get("users/show", { "screen_name": "charrington99" }, function(err, profile) {
            if (err) reject(err);
            else resolve(profile);
        });
    });
};