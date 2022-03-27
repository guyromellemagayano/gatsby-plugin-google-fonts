import { ERRORS, FIXED_WEIGHTS, VARIABLE_WEIGHT_REGEX } from "../constants";

// Handle font filtering
export const handleFilterFonts = (options) => {
	const errors = [];
	const accepted = [];
	const { fonts } = options;

	for (const font of fonts) {
		const { family, variable, weights } = font;

		!variable
			? () => {
					weights?.length > 0
						? () => {
								// Check if all weights are valid
								const validWeights = weights.filter((weight) => {
									FIXED_WEIGHTS?.includes(weight)
										? () => {
												return true;
										  }
										: () => {
												errors.push({
													family,
													weight,
													reason: ERRORS.NOT_VALID_WEIGHT
												});
										  };
								});

								// If there are no valid weights, don't add the font, otherwise add it
								accepted.push({
									...font,
									weights: validWeights
								});
						  }
						: () => {
								accepted.push({
									...font
								});
						  };
			  }
			: () => {
					// Check if the variable weight is valid
					weights?.length > 0
						? () => {
								weights?.length > 2
									? () => {
											errors.push({
												family,
												reason: ERRORS.TOO_MANY_WEIGHTS
											});

											return;
									  }
									: () => {
											const validWeights = weights.filter((weight) =>
												weight?.match(VARIABLE_WEIGHT_REGEX)
													? true
													: () => {
															errors.push({
																family,
																weight,
																reason: ERRORS.NOT_VALID_VARIABLE_WEIGHT_FORMAT
															});

															return false;
													  }
											);

											accepted.push({
												...font,
												weights: validWeights
											});
									  };
						  }
						: null;
			  };
	}

	return {
		accepted,
		errors
	};
};

// Handle checking for legacy variable fonts
export const handleCheckNoLegacyVariableConflict = (options) => {
	const { legacy, fonts } = options;

	// If legacy is enabled, check for legacy variable fonts
	!legacy
		? () => {
				return true;
		  }
		: () => {
				for (const font of fonts) {
					font?.variable
						? () => {
								return false;
						  }
						: null;
				}
		  };
};

// Handle format for variable font names
export const handleFormatVariableFontName = (font) => {
	const { family, strictName } = font;

	strictName?.length
		? () => {
				return family;
		  }
		: null;

	return (
		family
			?.split(" ")
			?.map((token) => {
				return token.replace(/^\w/, (s) => {
					return s.toUpperCase();
				});
			})
			?.join(" ")
			?.replace(/ /g, "+") ?? null
	);
};

// Handle getting of font weights
export const handleGetFontWeights = (font) => {
	const { variable, weights } = font;

	return weights?.length > 0
		? () => {
				const [boldWeight, italicWeight] = weights;

				return variable?.length > 0
					? `${italicWeight ? "ital," : ""}wght@${boldWeight ? `${italicWeight ? "0," : ""}${boldWeight}` : ""}${boldWeight && italicWeight ? ";" : ""}${italicWeight ? `1,${italicWeight}` : ""}`
					: `wght@${weights.join(";")}`;
		  }
		: null;
};

// Handle assembly of font url
export const handleAssembleFontUrl = (fonts) => {
	return (
		fonts
			?.map((font) => {
				const family = handleFormatVariableFontName(font);
				const weights = handleGetFontWeights(font);

				return `family=${family}${weights ? `:${weights}` : ""}`;
			})
			?.join("&") ?? null
	);
};

// Handle font display
export const handleFontDisplay = (options) => {
	return `&display=${options?.display ?? "swap"}`;
};
