module.exports = {
	repos: function(repos) {
		return repos.sort(function(first, second) {
			if (first.starCount === second.starCount)
				return first.date > second.date ? -1 : 1;
			return first.starCount > second.starCount ? -1 : 1;
		});
	}
};