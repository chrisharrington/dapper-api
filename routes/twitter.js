var Twitter = require("../twitter"),
    config = require("../config");

module.exports = function(app) {
    var twitter = new Twitter(config.twitter.consumerKey, config.twitter.consumerSecret, config.twitter.tokenKey, config.twitter.tokenSecret);
    app.get("/twitter", function (req, res, next) {
        twitter.recent().then(function(tweets) {
            res.status(200).send(tweets); 
        }).catch(function(e) {
            res.status(500).send(e);  
        });
    });
};
