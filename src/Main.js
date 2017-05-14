"use strict";

var Garden = require('./garden.js'), Plant = require('./plant.js'), RSG = require('./RandomSeedGenerator'), GardenTools = require('./gardenTools');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What would you like to plant? ', (answer1) => {
  // TODO: Log the answer in a database
  var type = `${answer1}`, days;

  if (type.length < 3) {
  	type = RSG().randomSeed;
  }

  rl.question('How many days does this plant need to be watered before harvest? ', (answer2) => {
	  // TODO: Log the answer in a database
	  days = `${answer2}`;

	  rl.close();

	  var garden = new Garden();
	  var plant = new Plant('${answer}', 5);

	  GardenTools.prepareForPlanting();

	  console.log("Planted a " + type + " seed and will harvest in " + days + " days.");

	  GardenTools.weed();

	});
});