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
	* Returns the code for a direction
	* @method why.convertDirection
	* @param str direction the direction string you wish to convert
	* @param str conversion the type of conversion, can be Word or Code
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
	
	return why;
}());

window.why = why;