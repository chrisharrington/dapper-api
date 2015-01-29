var _ = require("underscore");

module.exports = function(app) {
    _.each([
        require("./github"),
        require("./twitter"),
		require("./shares")
    ], function(route) {
       route(app); 
    });
};