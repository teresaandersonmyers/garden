"use strict";
module.exports = Plant;

function Plant() {
	var type = "";
	var isSown = false;
	var isHarvested = false;
	var minWaterCountForHarvest = 5;
	var waterCount = 0;

	return {
		sow: function() {
			isSown = true;
		},

		water: function() {
			if (!waterCount) {
				waterCount = 0;
			}

			waterCount += 1;
		},

		harvest: function() {
			if (!waterCount) {
				waterCount = 0;
			} 
			if (waterCount > 5) {
				isHarvested = true;
				return true;
			}
			return false;
		},

		getIsHarvested: function() {
			return isHarvested;
		},

		getIsSown: function() {
			return isSown;
		}
	}
}
