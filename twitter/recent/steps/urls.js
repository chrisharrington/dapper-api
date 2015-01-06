var _ = require("underscore");

module.exports = function(tweet) {
    var increase = tweet.increase || 0;
//    if (tweet.text.substring(0, 10).indexOf("Dates f") > -1)
//        debugger;
    _.each(tweet.urls, function(url) {
        var insert = "<a href='" + url.expanded_url + "' target='_blank'>" + url.display_url + "</a>";
        tweet.html = tweet.html.slice(0, url.indices[0]+increase) + insert + tweet.html.slice(url.indices[1]+increase);
        increase += insert.length - url.display_url.length;
    });
    if (tweet.urls.length > 0)
        tweet.increase = tweet.increase ? (tweet.increase + increase) : increase;
    return tweet;
}