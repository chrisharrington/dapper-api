var GitHub = require("../github"),
    config = require("../config");

module.exports = function(app) {
    app.get("/github", function (req, res, next) {
        var github = new GitHub(config.githubApiKey);
        github.repos().then(function(repos) {
            res.status(200).json(repos); 
        }).catch(function() {
            res.status(500).send("An error has occurred.");  
        });
    });  
};