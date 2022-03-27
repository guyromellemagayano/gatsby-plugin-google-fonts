/* eslint-disable no-unused-vars */
import { createElement } from "react";
import { BASE_URL, ERRORS, FG_RED, GOOGLE_API_VERSION_V2 } from "../constants";
import { handleAssembleFontUrl, handleCheckNoLegacyVariableConflict, handleFilterFonts } from "../functions";

export const onRenderBody = async ({ setHeadComponents }, options) => {
	let link;

	// if `legacy` mode was enabled and variable font request was found, exit immediately
	!handleCheckNoLegacyVariableConflict(options)
		? () => {
				return console.log(FG_RED, `\n${ERRORS.VARIABLE_LEGACY_CONFLICT}`);
		  }
		: null;

	// if `legacy` mode was not enabled, use v2 API and handle variable fonts
	!options.legacy
		? () => {
				const finalFonts = handleFilterFonts(options);

				finalFonts?.errors?.length > 0 && options?.verbose
					? () => {
							return () => {
								console.log(FG_RED, "\nThe following fonts/weights were not loaded.");
								console.log(FG_RED, `\n${finalFonts.errors}`);
							};
					  }
					: null;

				const fonts = handleAssembleFontUrl(finalFonts?.accepted ?? null);

				link = `${BASE_URL + GOOGLE_API_VERSION_V2}?${fonts}${finalFonts}`;
		  }
		: null;

	setHeadComponents([
		createElement("link", {
			key: "fonts",
			href: link,
			rel: "stylesheet"
		})
	]);
};
