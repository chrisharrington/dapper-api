var Twitter = require("twit"),
    Promise = require("bluebird"),
    
    config = require("../config"),
    steps = require("./steps");

module.exports = function(consumerKey, consumerSecret, tokenKey, tokenSecret) {
    this._twitter = new Twitter({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        access_token: tokenKey,
        access_token_secret: tokenSecret
    });
    
    this.recent = function(count) {
        count = count || 10;
        
        return new Promise(function(resolve, reject) {
            this._twitter.get("statuses/user_timeline", function(err, data) {
                if (err) reject(err);
                else resolve(steps(data));
            });
        }.bind(this));
    }
};