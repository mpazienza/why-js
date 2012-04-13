/**
 * Why.js
 * (c) 2012 Michael Pazienza
 * Why.js may be freely distributed under the MIT license.
 */

var why = (function () {
	var why = {};
	
	/**
	* Returns the emoticon for an emotion
	* @method why.showEmotion
	* @param string the emotion to return
	*/
	why.showEmotion = function (emotion) {
		var no_emotion = ':-|';
		
		// If no emotion is set, then emotion equals no_emotion
		emotion = emotion || no_emotion;
		
		switch (emotion.toLowerCase()) {
		case 'happy': case 'smile':
			return ':-)';
		case 'sad': case 'frown':
			return ':-(';
		case 'laughing':
			return ':-)';
		case 'wink': case 'flirting': case 'smirking':
			return ';-)';
		case 'cheeky':
			return ':-P';
		case 'surprised': case 'shocked':
			return ':-O';
		case 'skeptical': case 'hesitant': case 'uneasy': case 'worried':
			return ':-/';
		case 'evil':
			return '>:-)';
		case 'angry':
			return '>:-/';
		}
		
		return no_emotion;
	};
	
	/**
	* Returns the sounds a cow makes
	* @method why.theCowSays
	* @param object attributes of the cow including but not limited to color, hair length, softness, attitude.
	*/
	why.theCowSays = function (attrs) {
		attrs = attrs || {};
		
		// Check based on the color of the cow
		if (attrs && attrs.color) {
			switch (attrs.color) {
			case 'spotted':
				return 'moo';
			case 'brown':
				return 'moo';
			case 'white':
				return 'moo';
			}
		}
		
		return 'moo';
	};
	
	/**
	* Returns the sounds a pig makes
	* @method why.thePigSays
	* @param object attributes of the pig including but not limited to color, height, cleanliness, altitude.
	*/
	why.thePigSays = function (attrs) {
		attrs = attrs || {};
		
		// Check based on the color of the pig
		if (attrs && attrs.color) {
			switch (attrs.color) {
			case 'pink':
				return 'oink';
			case 'light pink':
				return 'oink';
			case 'brown':
				return 'oink';
			}
		}
		
		// Is the pig wild or domesticated
		if (attrs && attrs.isWild) {
			return "oink";
		}
		
		return 'oink';
	};
	
	/**
	* Returns true if today is a holiday
	* @method why.isHoliday
	* @param object params optional parameters to pass in such as country, nautical miles, speed, and mass
	*/
	why.isHoliday = function (params) {
		var today = new Date(),
				defaults = {
					country : 'all'
				};
				
		params = params || defaults;
		
		/* US Holidays */
		if (params.country === 'US' || params.country === 'all') {
			// January 1st - New Years
			if (today.getMonth() === 0 && today.getDate() === 1) {
				return true;
		
			// January 16th - MLK Day
			} else if (today.getMonth() === 0 && today.getDate() === 16) {
				return true;
		
			// February 2nd - Groundhog Day
			} else if (today.getMonth() === 1 && today.getDate() === 2) {
				return true;
		
			// February 12th - Lincoln's Birthday
			} else if (today.getMonth() === 1 && today.getDate() === 12) {
				return true;

			// February 14th - Valentine's Day
			} else if (today.getMonth() === 1 && today.getDate() === 14) {
				return true;
		
			// February 20th - Presidents Day
			} else if (today.getMonth() === 1 && today.getDate() === 14) {
				return true;

			// March 17th - St. Patricks Day
			} else if (today.getMonth() === 2 && today.getDate() === 17) {
				return true;
		
			// March 20th - Vernal Equinox
			} else if (today.getMonth() === 2 && today.getDate() === 20) {
				return true;

			// March 30th - National Doctor's Day
			} else if (today.getMonth() === 2 && today.getDate() === 30) {
				return true;

			// April 1st - April Fools Day
			} else if (today.getMonth() === 3 && today.getDate() === 1) {
				return true;

			// April 22nd - Earth Day
			} else if (today.getMonth() === 3 && today.getDate() === 22) {
				return true;
			
			// Last Friday of April - Arbor Day
			} else if (today.getMonth() === 3 && today.getDate() > 15 && (today.getDay() === 5 && today.getDate() + 7 > 30)) {
				return true;
			
			// Second Sunday of May - Mothers Day
			} else if (today.getMonth() === 4 && (today.getDay() === 0 && today.getDate() > 14)) {
				return true;
				
			// Third Saturday of May - Armed Forces Day
			} else if (today.getMonth() === 4 && (today.getDay() === 6 && today.getDate() - 21 > 1)) {
				return true;
				
			// Last Monday of May - Memorial Day
			} else if (today.getMonth() === 4 && (today.getDay() === 1 && today.getDate() + 7 > 31)) {
				return true;

			// June 14th - Flag Day
			} else if (today.getMonth() === 5 && today.getDate() === 14) {
				return true;
			
			// Third Sunday of June - Fathers Day
			} else if (today.getMonth() === 5 && (today.getDay() === 0 && today.getDate() - 21 > 1)) {
				return true;
		
			// July 4th - Independance Day
			} else if (today.getMonth() === 6 && today.getDate() === 4) {
				return true;
			
			// First Monday of September - Labor Day
			} else if (today.getMonth() === 8 && today.getDate() < 15 && (today.getDay() === 1 && today.getDate() - 7 < 1)) {
				return true;
		
			// September 11th - Patriot Day
			} else if (today.getMonth() === 8 && today.getDate() === 11) {
				return true;
			
			// Second Monday of October - Columbus Day
			} else if (today.getMonth() === 9 && today.getDate() < 15 && (today.getDay() === 1 && today.getDate() - 14 > 1)) {
				return true;
		
			// October 31st - Halloween
			} else if (today.getMonth() === 9 && today.getDate() === 31) {
				return true;

			// Novermber 1st - All Saints Day
			} else if (today.getMonth() === 10 && today.getDate() === 1) {
				return true;
		
			// Novermber 11th - Veterans Day
			} else if (today.getMonth() === 10 && today.getDate() === 11) {
				return true;

			// December 25th - Christmas Day
			} else if (today.getMonth() === 11 && today.getDate() === 25) {
				return true;
		
			// December 26 - January 1 - Kwanzaa
			} else if (today.getMonth() === 11 && (today.getDate() > 25)) {
				return true;
			}
		}
		
		return false;
	};
	
	/**
	* Returns a randomized song title from Hoobastank
	* @method why.hoobastankMe
	* @param string direction the direction string you wish to convert
	* @param string conversion the type of conversion, can be Word or Code
	*/
	why.hoobastankMe = function () {
		var songs = {
			titles : [
				'Invisible',
				'Pee Wee',
				'Educated Fool',
				'Naked Jock Man',
				'Prank Call to Cobalt Cafe',
				'Show me your Titz',
				'Earthsick',
				'Foot in your Mouth',
				'Karma Patrol',
				'Stuck without a Voice',
				'Can I buy you a drink',
				'Our Song',
				'The Mirror',
				'The Dance that broke my jaw',
				'Crawling in the dark',
				'Remember me',
				'Running away',
				'Pieces',
				'Let you know',
				'Better',
				'Ready for you',
				'Up and Gone',
				'Too little too late',
				'Hello again',
				'To be with you',
				'Give it back',
				'Losing my grip',
				'The critic',
				'Same direction',
				'Out of control',
				'What happened to us?',
				'Escape',
				'Just one',
				'Lucky',
				'From the heart',
				'The reason',
				'Let it out',
				'Unaffected',
				'Never there',
				'Disappear',
				'The rules',
				'Born to lead',
				'Moving forward',
				'Inside of you',
				'The first of me',
				'Good enough',
				'If I were you',
				'Without a fight',
				'Don\'t tell me',
				'Look where we are',
				'Say the same',
				'If only',
				'More than a memory',
				'Finally awake',
				'Waiting',
				'Face the music',
				'My turn',
				'I don\'t think I love you',
				'So close, so far',
				'All about you',
				'The Letter',
				'Tears of yesterday',
				'Sick of hanging on',
				'You\'re the one',
				'Who the hell am I?',
				'You need to be here',
				'Gone gone gone',
				'Replace you',
				'Stay with me'
			],
			sucks : true
		},
		_rd = Math.floor(Math.random() * songs.titles.length);
		
		if (songs.sucks) {
			return false;
		} else {
			return songs.titles[_rd];
		}
	};
	
	/**
	* Returns the code for a direction
	* @method why.convertDirection
	* @param string direction the direction string you wish to convert
	* @param string conversion the type of conversion, can be Word or Code
	*/
	why.convertDirection = function (direction, conversion) {
		conversion = conversion || 'code';
		
		if (conversion === 'code') {
			return direction.substr(0, 1).toUpperCase();
		}
		
		if (conversion === 'word') {
			switch (direction.toUpperCase()) {
			case 'N':
				return 'North';
			case 'S':
				return 'South';
			case 'E':
				return 'East';
			case 'W':
				return 'West';
			}
		}
		
		return false;
	};

	/**
	 * Returns an necessary item of clothing for men depending on the season
	 * @method why.stylishClothingForMen
	 * @param string season can be fall, winter, spring, or summer
	 */
	why.seasonalClothing = function (season) {
		var clothings = {
			cold : [
				'Leather Gloves',
			'Black Scarf',
			'Denim',
			'Gingham Check Shirt',
			'Corduroy Pants',
			'Wingtips',
			'Leather Boots',
			'Gray Suit'
				],
			hot : [
				'Yellow Umbrella',
			'Colored Chinos',
			'Cotton Suit',
			'Boat Shoes',
			'White Oxfords',
			'Cardigan Sweater',
			'Surfboard',
			'Shorts, 9"',
			'Swimming Shorts, 5"'
				]
		}

		if (season === 'fall' || season === 'winter') {
			_rd = Math.floor(Math.random() * clothings.cold.length);
			return clothings.cold[_rd];
		} else if (season === 'spring' || season === 'summer') {
			_rd = Math.floor(Math.random() * clothings.hot.length);
			return clothings.hot[_rd];
		}

		return "Socks";
	};

	return why;
}());

window.why = why;
