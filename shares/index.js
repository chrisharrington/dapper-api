var Promise = require("bluebird"),
	get = require("./get-count"),
	config = require("../config"),
	util = require("util"),
	cache = require("../cache"),
	moment = require("moment"),
	
	CACHE_KEY = "share-counts";

module.exports = function(url) {
	if (!url) {
		return Promise.resolve({
			twitter: 0,
			facebook: 0,
			linkedin: 0,
			googleplus: 0
		});
	}
	
	var cached = cache.get(CACHE_KEY + url);
	if (cached)
		return Promise.resolve(cached);
	
	return Promise.all([
		require("./twitter")(url),
		require("./facebook")(url),
		require("./linkedin")(url),
		require("./google-plus")(url)
	]).then(function(result) {
		result = {
			twitter: result[0],
			facebook: result[1],
			linkedin: result[2],
			googleplus: result[3]
		};
		cache.set(CACHE_KEY + url, result, moment().add(1, "h"));
		return result;
	});
};