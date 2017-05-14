'use strict';

var gardenTools = function() {
	var hoe = 'hoeing';
	var shovel = 'shoveling';
	var weedSpray = 'spraying for weeds';

	return {
		prepareForPlanting: function() {
			console.log(hoe);
			console.log(shovel);
		},

		weed: function() {
			console.log(weedSpray);
		}

	}

}

module.exports = gardenTools();