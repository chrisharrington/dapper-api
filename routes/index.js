var _ = require("underscore");

module.exports = function(app) {
    _.each([
        require("./github"),
        require("./twitter")
    ], function(route) {
       route(app); 
    });
};