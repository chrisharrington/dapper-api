var express = require("express"),
    app = express(),
    crossDomain = require("./middlewares/cross-domain"),
    
    config = require("./config"),
    GitHub = require("./github");

app.use(crossDomain);

require("./routes")(app);

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Dapper service listening at http://%s:%s", host, port)
});

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'example.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};