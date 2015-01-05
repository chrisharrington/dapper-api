var _ = require("underscore"),
    moment = require("moment");

module.exports = {
    repos: function(repos) {
        var count = 0;
        return _.map(repos, function(repo) {
            return {
                id: repo.id,
                timeago: moment(repo.pushed_at).fromNow(),
                url: repo.html_url,
                name: repo.name,
                starCount: repo.stargazers_count
            };
        });
    }
};