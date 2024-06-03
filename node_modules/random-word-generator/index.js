/*!
 * random-word-generator  -- v0.9.0 -- 2013
 * http://github.com/thriqon/random-word-generator
 *
 * Copyright (C) 2013 "thriqon" Jonas Weber
 * Licensed under MIT
 * see file `LICENSE` for details
 */

"use strict";

// source data

var english_consonants =
    ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
        'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

var english_vowels =
    ['a', 'e', 'i', 'o', 'u'];

var default_pattern = 'Cvcvcvcvcv';

// helpers

var switch_if_given = function (value, getterF, setterF) {

	var oldVal = getterF();

	if (typeof value !== 'undefined' && value !== null) {
		setterF(value);
	}
	return oldVal;
};

var setter = function (obj, prop) {
	return function (value) {
		obj[prop] = value;
	};
};

var getter = function (obj, prop) {
	return function () {
		return obj[prop];
	};
};

var generate_exec = function (pattern, groups, cb) {

	var random_array_element = function (arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	};

	var result = pattern.split('').map(function (p) {
		if (p === p.toUpperCase()) {
			return (random_array_element(groups[p.toLowerCase()]) || ' ').toUpperCase();
		} else {
			return random_array_element(groups[p]) || ' ';
		}
	}).join('');

	if (typeof cb !== 'undefined' && cb !== null) {
		cb(null, result);
	}
	return result;	
};


/**
A word generator utility

Patterns
--------

A pattern describes how to generate words. It consists of
a series of characters, each referencing a group. If
the letter is uppercase, the result will also be in uppercase.

Example:

    var generator = new Generator();
    generator.pattern('Cvcvcv');

    generator.generate(); // returns something like 'Tafenu'

Groups
------

Groups are simple arrays with characters.

@class Generator
@constructor
*/
module.exports = function () {

	var self = this,
		mgroups = {
			'c' : english_consonants.slice(0),
			'v' : english_vowels.slice(0)
		},
		mpattern = default_pattern;

	return {
		/**
		 * Generates a word using this instances pattern and groups.
		 *
		 * @method generate
		 * @param {Callback (error, result) } [callback] node-style callback with the word as second parameter
		 * @return {String} the word
		 */ 
		generate: function (cb) {
			return generate_exec(mpattern, mgroups, cb);
		},

		/**
		 * Gives the group for the key, or sets this group
		 *
		 * @method group
		 * @param {Character} key the name of this group (one character, lowercase)
		 * @param {Array Character} [value] the new array of characters for this group
		 * @return {Array Character} the current group (in case of setting, the old group)
		 */
		group: function (c, val) { return switch_if_given(val, getter(mgroups, c), setter(mgroups, c)); },

		/**
		 * Gives the pattern, or sets it
		 *
		 * @method pattern
		 * @param {String} [pattern] the pattern, see chapter in documentation for details
		 * @return {String} the current pattern (the old, if set)
		 */
		pattern: function (p) { return switch_if_given(p, function() { return mpattern; }, function (x) { mpattern = x; });}
	};
};


/**
generates a default-configured word, with optional callback

@method generate
@for Generator
@static
@param {Callback (error, result)} [callback] node-style callback with word as second parameter
@return {String} the word
*/
module.exports.generate = function (cb) {
	return generate_exec(default_pattern, { 'c' : english_consonants, 'v': english_vowels }, cb);
};

// documentation follows

/**
The module providing the generator

@module Generator
*/

