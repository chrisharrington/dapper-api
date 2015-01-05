var Twitter = require("twit"),    
    config = require("../config"),
    recent = require("./recent"),
    profile = require("./profile");

module.exports = function(consumerKey, consumerSecret, tokenKey, tokenSecret) {
    this._twitter = new Twitter({
        consumer_key: consumerKey,
        consumer_secret: consumerSecret,
        access_token: tokenKey,
        access_token_secret: tokenSecret
    });
    
    this.recent = recent.bind(this._twitter);
    this.profile = profile;
};