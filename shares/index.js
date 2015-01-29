var Promise = require("bluebird"),
	get = require("./get-count"),
	config = require("../config"),
	util = require("util");

module.exports = function(url) {
	return Promise.all([
		require("./twitter")(url),
		require("./facebook")(url),
		require("./linkedin")(url),
		require("./google-plus")(url)
	]).then(function(result) {
		return {
			twitter: result[0],
			facebook: result[1],
			linkedin: result[2],
			googleplus: result[3]
		};
	});
};