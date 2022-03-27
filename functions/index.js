"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.handleGetFontWeights = exports.handleFormatVariableFontName = exports.handleFontDisplay = exports.handleFilterFonts = exports.handleCheckNoLegacyVariableConflict = exports.handleAssembleFontUrl = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _constants = require("../constants");

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
	var it = (typeof Symbol !== "undefined" && o[Symbol.iterator]) || o["@@iterator"];
	if (it) return (it = it.call(o)).next.bind(it);
	if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === "number")) {
		if (it) o = it;
		var i = 0;
		return function () {
			if (i >= o.length) return { done: true };
			return { done: false, value: o[i++] };
		};
	}
	throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === "Object" && o.constructor) n = o.constructor.name;
	if (n === "Map" || n === "Set") return Array.from(o);
	if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) {
		arr2[i] = arr[i];
	}
	return arr2;
}

var handleFilterFonts = function handleFilterFonts(options) {
	var errors = [];
	var accepted = [];
	var fonts = options.fonts;

	var _loop = function _loop() {
		var font = _step.value;
		var family = font.family,
			variable = font.variable,
			weights = font.weights;
		!variable
			? function () {
					(weights === null || weights === void 0 ? void 0 : weights.length) > 0
						? function () {
								var validWeights = weights.filter(function (weight) {
									_constants.FIXED_WEIGHTS !== null && _constants.FIXED_WEIGHTS !== void 0 && _constants.FIXED_WEIGHTS.includes(weight)
										? function () {
												return true;
										  }
										: function () {
												errors.push({
													family: family,
													weight: weight,
													reason: _constants.ERRORS.NOT_VALID_WEIGHT
												});
										  };
								});
								accepted.push(
									(0, _extends2.default)({}, font, {
										weights: validWeights
									})
								);
						  }
						: function () {
								accepted.push((0, _extends2.default)({}, font));
						  };
			  }
			: function () {
					(weights === null || weights === void 0 ? void 0 : weights.length) > 0
						? function () {
								(weights === null || weights === void 0 ? void 0 : weights.length) > 2
									? function () {
											errors.push({
												family: family,
												reason: _constants.ERRORS.TOO_MANY_WEIGHTS
											});
											return;
									  }
									: function () {
											var validWeights = weights.filter(function (weight) {
												return weight !== null && weight !== void 0 && weight.match(_constants.VARIABLE_WEIGHT_REGEX)
													? true
													: function () {
															errors.push({
																family: family,
																weight: weight,
																reason: _constants.ERRORS.NOT_VALID_VARIABLE_WEIGHT_FORMAT
															});
															return false;
													  };
											});
											accepted.push(
												(0, _extends2.default)({}, font, {
													weights: validWeights
												})
											);
									  };
						  }
						: null;
			  };
	};

	for (var _iterator = _createForOfIteratorHelperLoose(fonts), _step; !(_step = _iterator()).done; ) {
		_loop();
	}

	return {
		accepted: accepted,
		errors: errors
	};
};

exports.handleFilterFonts = handleFilterFonts;

var handleCheckNoLegacyVariableConflict = function handleCheckNoLegacyVariableConflict(options) {
	var legacy = options.legacy,
		fonts = options.fonts;
	!legacy
		? function () {
				return true;
		  }
		: function () {
				for (var _iterator2 = _createForOfIteratorHelperLoose(fonts), _step2; !(_step2 = _iterator2()).done; ) {
					var font = _step2.value;
					font !== null && font !== void 0 && font.variable
						? function () {
								return false;
						  }
						: null;
				}
		  };
};

exports.handleCheckNoLegacyVariableConflict = handleCheckNoLegacyVariableConflict;

var handleFormatVariableFontName = function handleFormatVariableFontName(font) {
	var _family$split$map$joi, _family$split, _family$split$map, _family$split$map$joi2;

	var family = font.family,
		strictName = font.strictName;
	strictName !== null && strictName !== void 0 && strictName.length
		? function () {
				return family;
		  }
		: null;
	return (_family$split$map$joi =
		family === null || family === void 0
			? void 0
			: (_family$split = family.split(" ")) === null || _family$split === void 0
			? void 0
			: (_family$split$map = _family$split.map(function (token) {
					return token.replace(/^\w/, function (s) {
						return s.toUpperCase();
					});
			  })) === null || _family$split$map === void 0
			? void 0
			: (_family$split$map$joi2 = _family$split$map.join(" ")) === null || _family$split$map$joi2 === void 0
			? void 0
			: _family$split$map$joi2.replace(/ /g, "+")) !== null && _family$split$map$joi !== void 0
		? _family$split$map$joi
		: null;
};

exports.handleFormatVariableFontName = handleFormatVariableFontName;

var handleGetFontWeights = function handleGetFontWeights(font) {
	var variable = font.variable,
		weights = font.weights;
	return (weights === null || weights === void 0 ? void 0 : weights.length) > 0
		? function () {
				var boldWeight = weights[0],
					italicWeight = weights[1];
				return (variable === null || variable === void 0 ? void 0 : variable.length) > 0
					? (italicWeight ? "ital," : "") + "wght@" + (boldWeight ? "" + (italicWeight ? "0," : "") + boldWeight : "") + (boldWeight && italicWeight ? ";" : "") + (italicWeight ? "1," + italicWeight : "")
					: "wght@" + weights.join(";");
		  }
		: null;
};

exports.handleGetFontWeights = handleGetFontWeights;

var handleAssembleFontUrl = function handleAssembleFontUrl(fonts) {
	var _fonts$map$join, _fonts$map;

	return (_fonts$map$join =
		fonts === null || fonts === void 0
			? void 0
			: (_fonts$map = fonts.map(function (font) {
					var family = handleFormatVariableFontName(font);
					var weights = handleGetFontWeights(font);
					return "family=" + family + (weights ? ":" + weights : "");
			  })) === null || _fonts$map === void 0
			? void 0
			: _fonts$map.join("&")) !== null && _fonts$map$join !== void 0
		? _fonts$map$join
		: null;
};

exports.handleAssembleFontUrl = handleAssembleFontUrl;

var handleFontDisplay = function handleFontDisplay(options) {
	var _options$display;

	return "&display=" + ((_options$display = options === null || options === void 0 ? void 0 : options.display) !== null && _options$display !== void 0 ? _options$display : "swap");
};

exports.handleFontDisplay = handleFontDisplay;
//# sourceMappingURL=index.js.map
