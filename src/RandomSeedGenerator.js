"use strict"; 

module.exports = {
	RandomSeedGenerator: (function () { 
		function createRandomSeedName(randomNumber) { 
			return {
				get randomSeed() {
					var randomSeed = "";
					switch(randomNumber) {
						case 0:
							randomSeed = 'onion';
							break;
						case 1:
							randomSeed = 'turnip';
							break;
						case 2:
							randomSeed = 'grape';
							break;
						case 3:
							randomSeed = 'tomato';
							break;
						case 4:
							randomSeed = 'potato';
							break;
						case 5:
							randomSeed = 'corn';
							break;
						case 6:
							randomSeed = 'pea';
							break;
						case 7:
							randomSeed = 'lettuce';
							break;
						case 8:
							randomSeed = 'pumpkin';
							break;
						case 9:
							randomSeed = 'zucchini';
							break;
					}; 
					return randomSeed;
				}
			}
		} 
		return function () { 
			return createRandomSeedName(Math.floor(Math.random() * 10)); 
		}; 
	})()
}
