'use strict';

var SeedRepo = (function() {
	var seedRepo;

	var getSeed = function() {
		console.log('Here is a seed pulled from the database!');
	};

	var saveSeed= function(seed) {
		console.log('Seed ' + seed.name + ' saved to database');
	};

	var createRepo = function() {
		var seedRepo = {
			get: getSeed,
			save: saveSeed
		}
		return seedRepo;
	};

	var getInstance = function() {
		if (!seedRepo) {
			seedRepo = createRepo();
		}
		return seedRepo;
	}

	return {
		getInstance: getInstance
	}

})();

module.exports = SeedRepo;