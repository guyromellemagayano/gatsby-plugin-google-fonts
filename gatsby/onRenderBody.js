"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _react = require("react");

var _constants = require("../constants");

var _functions = require("../functions");

var onRenderBody = (function () {
	var _ref2 = (0, _asyncToGenerator2.default)(
		_regenerator.default.mark(function _callee(_ref, options) {
			var setHeadComponents, link;
			return _regenerator.default.wrap(function _callee$(_context) {
				while (1) {
					switch ((_context.prev = _context.next)) {
						case 0:
							setHeadComponents = _ref.setHeadComponents;
							!(0, _functions.handleCheckNoLegacyVariableConflict)(options)
								? function () {
										return console.log(_constants.FG_RED, "\n" + _constants.ERRORS.VARIABLE_LEGACY_CONFLICT);
								  }
								: null;
							!options.legacy
								? function () {
										var _finalFonts$errors, _finalFonts$accepted;

										var finalFonts = (0, _functions.handleFilterFonts)(options);
										(finalFonts === null || finalFonts === void 0 ? void 0 : (_finalFonts$errors = finalFonts.errors) === null || _finalFonts$errors === void 0 ? void 0 : _finalFonts$errors.length) > 0 &&
										options !== null &&
										options !== void 0 &&
										options.verbose
											? function () {
													return function () {
														console.log(_constants.FG_RED, "\nThe following fonts/weights were not loaded.");
														console.log(_constants.FG_RED, "\n" + finalFonts.errors);
													};
											  }
											: null;
										var fonts = (0, _functions.handleAssembleFontUrl)(
											(_finalFonts$accepted = finalFonts === null || finalFonts === void 0 ? void 0 : finalFonts.accepted) !== null && _finalFonts$accepted !== void 0 ? _finalFonts$accepted : null
										);
										link = _constants.BASE_URL + _constants.GOOGLE_API_VERSION_V2 + "?" + fonts + finalFonts;
								  }
								: null;
							setHeadComponents([
								(0, _react.createElement)("link", {
									key: "fonts",
									href: link,
									rel: "stylesheet"
								})
							]);

						case 4:
						case "end":
							return _context.stop();
					}
				}
			}, _callee);
		})
	);

	return function onRenderBody(_x, _x2) {
		return _ref2.apply(this, arguments);
	};
})();

exports.onRenderBody = onRenderBody;
//# sourceMappingURL=onRenderBody.js.map
