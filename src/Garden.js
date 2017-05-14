

"use strict";
module.exports = Garden;

function Garden() {
	var plants = [];
	var isPlanted = false;
	var isWatering = false;

	return {
		sow: function(plant) {
			if (!plants) {
				plants = [];
			}
			plants.push(plant);
			plant.sow();
			isPlanted = true;
		},

		water: function() {
			isWatering = true;
			for (var i = 0; i < plants.length; i++) {
				plants[i].water();
			}
		},

		harvestAll: function() {
			var harvestedPlants = [];
			for (var i = plants.length - 1; i >= 0; i--) {
				var plant = plants[i];
				if (plant.harvest()) {
					console.log(plant.name);
					harvestedPlants.push(plant);
					plants.splice(i, 1);
				}
			}

			if (!plants.length) {
				isPlanted = false;
			}

			return harvestedPlants.reverse();
		},

		harvestOne: function() {
			for (var i = 0; i < plants.length; i++) {
				var plant = plants[i];
				if (plant.harvest()) {
					console.log(plant.name);
					plants.splice(i, 1);
					return plant;
				}
			}
		},

		getIsWatering: function() {
			return isWatering;
		},

		getIsPlanted: function() {
			return isPlanted;
		},

		getPlants: function() {
			return plants;
		}
	}

};