'use strict';

var gardenTools = function() {
	var hoe = 'hoeing';
	var shovel = 'shoveling';
	var weedSpray = 'spraying for weeds';

	var prepareForPlanting = function() {
		console.log(hoe);
		console.log(shovel);
	};

	var weed = function() {
		console.log(weedSpray);
	};

	return {
		prepareForPlanting: prepareForPlanting,
		weed: weed

	}

}

module.exports = gardenTools();