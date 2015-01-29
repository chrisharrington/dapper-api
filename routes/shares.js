var GitHub = require("../github"),
    config = require("../config"),
	Promise = require("bluebird"),
	shares = require("../shares");

module.exports = function(app) {
    app.get("/shares", function (req, res, next) {
		shares(req.query.url).then(function(counts) {
			res.status(200).json(counts);
		});
    });  
};