module.exports = {
	repos: function(repos) {
		return repos.sort(function(first, second) {
			return first.starCount > second.starCount ? -1 : 1;
		});
	}
};