var Promise = require("bluebird"),
	http = require("http"),
	https = require("https");

module.exports = function(url, isSecure) {
	return new Promise(function(resolve) {
		(isSecure ? https.get : http.get)(url, function(res) {
			var data = "";
			res.on("data", function(chunk) { data += chunk; });
			res.on("end", function() {
				resolve(data);
			});
		}).on("error", function(e) {
			resolve(0);
		});
	});
};