var express = require("express"),
    app = express(),
    crossDomain = require("./middlewares/cross-domain"),
    
    config = require("./config"),
    GitHub = require("./github");

app.use(crossDomain);

app.get("/github", function (req, res, next) {
    var github = new GitHub(config.githubApiKey);
    github.repos().then(function(repos) {
        res.status(200).json(repos); 
    }).catch(function() {
        res.status(500).send("An error has occurred.");  
    });
});

var server = app.listen(8083, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)
});

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};