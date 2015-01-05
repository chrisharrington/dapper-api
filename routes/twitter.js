var Promise = require("bluebird"),
    Twitter = require("../twitter"),
    config = require("../config");

module.exports = function(app) {
    var twitter = new Twitter(config.twitter.consumerKey, config.twitter.consumerSecret, config.twitter.tokenKey, config.twitter.tokenSecret);
    
    app.get("/twitter", function (req, res, next) {
        var profile = twitter.profile();
        var recent = twitter.recent();
        Promise.all([twitter.recent(), twitter.profile()]).spread(function(tweets, profile) {
            res.status(200).send({ profile: profile, tweets: tweets }); 
        }).catch(function(e) {
            res.status(500).send(e.toString());  
        });
    });
};
