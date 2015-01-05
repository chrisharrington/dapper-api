var Promise = require("bluebird");

module.exports = function(profile) {    
    return new Promise(function(resolve, reject) {
        resolve({
            name: profile.name,
            screenName: profile.screen_name,
            followers: profile.followers_count,
            tweets: profile.statuses_count,
            image: profile.profile_image_url_https
        })
    });
};