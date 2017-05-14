"use strict";

function Plant(data) {
	this.name = data.name;
	this.isSown = false;
	this.isHarvested = false;
	this.minWaterCountForHarvest = data.minWaterCountForHarvest;
	this.waterCount = 0;
}

Plant.prototype.sow = function() {
	this.isSown = true;
};

Plant.prototype.water = function() {
	if (!this.waterCount) {
		this.waterCount = 0;
	}

	this.waterCount += 1;
};

Plant.prototype.harvest = function() {
	if (!this.waterCount) {
		this.waterCount = 0;
	} 
	if (this.waterCount > 5) {
		this.isHarvested = true;
		return true;
	}
	return false;
};

Plant.prototype.getIsHarvested = function() {
	return this.isHarvested;
};

Plant.prototype.getIsSown = function() {
	return this.isSown;
};

module.exports = Plant;
