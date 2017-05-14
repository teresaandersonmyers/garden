'use strict';

var repoFactory = function() {
	var repos = this;
	var repoList = [{name: 'plant', source: './plantRepo'},
					{name: 'seed', source: './seedRepo'}];

	repoList.forEach(function(repo) {
		repos[repo.name] = require(repo.source).getInstance();
	});

};

module.exports = new repoFactory();