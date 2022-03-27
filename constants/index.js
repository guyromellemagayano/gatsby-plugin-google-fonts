"use strict";

exports.__esModule = true;
exports.VARIABLE_WEIGHT_REGEX =
	exports.GOOGLE_API_VERSION_V2 =
	exports.GOOGLE_API_VERSION =
	exports.FIXED_WEIGHTS =
	exports.FG_YELLOW =
	exports.FG_WHITE =
	exports.FG_RED =
	exports.FG_MAGENTA =
	exports.FG_GREEN =
	exports.FG_CYAN =
	exports.FG_BLUE =
	exports.FG_BLACK =
	exports.ERRORS =
	exports.BASE_URL =
		void 0;
var BASE_URL = "https://fonts.googleapis.com/";
exports.BASE_URL = BASE_URL;
var GOOGLE_API_VERSION = "css";
exports.GOOGLE_API_VERSION = GOOGLE_API_VERSION;
var GOOGLE_API_VERSION_V2 = "css2";
exports.GOOGLE_API_VERSION_V2 = GOOGLE_API_VERSION_V2;
var VARIABLE_WEIGHT_REGEX = /(^\d{3})(?:[.]{2})(\d{3}$)/gm;
exports.VARIABLE_WEIGHT_REGEX = VARIABLE_WEIGHT_REGEX;
var FIXED_WEIGHTS = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];
exports.FIXED_WEIGHTS = FIXED_WEIGHTS;
var ERRORS = {
	NOT_VALID_WEIGHT: "Regular font selected but selected weights not valid",
	TOO_MANY_WEIGHTS: "Variable font supports a maximum of 2 weights (regular and italic)",
	NOT_VALID_VARIABLE_WEIGHT_FORMAT: "The used weight format did not match. The valid format is (min)..(max) where min and max are 3 digit numbers",
	VARIABLE_LEGACY_CONFLICT: "You want to use v1 API but are requesting variable fonts. That will not work. Remove one or the other"
};
exports.ERRORS = ERRORS;
var FG_BLACK = "\x1b[30m";
exports.FG_BLACK = FG_BLACK;
var FG_RED = "\x1b[31m";
exports.FG_RED = FG_RED;
var FG_GREEN = "\x1b[32m";
exports.FG_GREEN = FG_GREEN;
var FG_YELLOW = "\x1b[33m";
exports.FG_YELLOW = FG_YELLOW;
var FG_BLUE = "\x1b[34m";
exports.FG_BLUE = FG_BLUE;
var FG_MAGENTA = "\x1b[35m";
exports.FG_MAGENTA = FG_MAGENTA;
var FG_CYAN = "\x1b[36m";
exports.FG_CYAN = FG_CYAN;
var FG_WHITE = "\x1b[37m";
exports.FG_WHITE = FG_WHITE;
//# sourceMappingURL=index.js.map
