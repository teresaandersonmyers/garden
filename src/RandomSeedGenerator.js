"use strict"; 
var RandomSeedGenerator = (function () { 
	function createRandomSeed(randomNumber) {
		return {
			get randomSeed() {
				var seed = "pepper";
				switch(randomNumber) {
					case 0:
						seed = 'onion';
						break;
					case 1:
						seed = 'turnip';
						break;
					case 2:
						seed = 'grape';
						break;
					case 3:
						seed = 'tomato';
						break;
					case 4:
						seed = 'potato';
						break;
					case 5:
						seed = 'corn';
						break;
					case 6:
						seed = 'pea';
						break;
					case 7:
						seed = 'lettuce';
						break;
					case 8:
						seed = 'pumpkin';
						break;
					case 9:
						seed = 'zucchini';
						break;
				}; 
				return seed;
			}
		}
	}

	return function () { return createRandomSeed(Math.floor(Math.random() * 10)); };
})();

module.exports = RandomSeedGenerator;
