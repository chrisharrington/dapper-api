var Promise = require("bluebird"),
    steps = require("./steps");

module.exports = function(count) {
    count = count || 10;
        
    return new Promise(function(resolve, reject) {
        this.get("statuses/user_timeline", { exclude_replies: true, trim_user: true }, function(err, data) {
            if (err) reject(err);
            else resolve(steps(data));
        });
    }.bind(this));
};