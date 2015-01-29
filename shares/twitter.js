var util = require("util"),
	config = require("../config"),
	get = require("./get-count");

module.exports = function(url) {
	return get(util.format(config.shares.twitter, url)).then(function(data) {
		return JSON.parse(data).count;	
	});
};