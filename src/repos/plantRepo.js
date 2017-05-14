'use strict';

var PlantRepo = (function() {
	var plantRepo;

	var getPlant = function() {
		console.log('Here is a plant pulled from the database!');
	};

	var savePlant = function(plant) {
		console.log('Plant ' + plant.name + ' saved to database');
	};

	var createRepo = function() {
		var plantRepo = {
			get: getPlant,
			save: savePlant
		}
		return plantRepo;
	};

	var getInstance = function() {
		if (!plantRepo) {
			plantRepo = createRepo();
		}
		return plantRepo;
	}

	return {
		getInstance: getInstance
	}

})();

module.exports = PlantRepo;