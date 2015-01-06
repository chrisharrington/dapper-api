var _ = require("underscore"),
    moment = require("moment");

module.exports = {
    repos: function(repos) {
        var count = 0;
        return _.map(repos, function(repo) {
            return {
                id: repo.id,
                date: repo.pushed_at,
                url: repo.html_url,
                name: repo.name,
                starCount: repo.stargazers_count
            };
        });
    }
};