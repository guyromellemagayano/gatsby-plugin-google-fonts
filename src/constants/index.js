// API config defaults
export const BASE_URL = "https://fonts.googleapis.com/";
export const GOOGLE_API_VERSION = "css";
export const GOOGLE_API_VERSION_V2 = "css2";

// Regex
export const VARIABLE_WEIGHT_REGEX = /(^\d{3})(?:[.]{2})(\d{3}$)/gm;

// Config defaults
export const FIXED_WEIGHTS = ["100", "200", "300", "400", "500", "600", "700", "800", "900"];

// Error defaults
export const ERRORS = {
	NOT_VALID_WEIGHT: "Regular font selected but selected weights not valid",
	TOO_MANY_WEIGHTS: "Variable font supports a maximum of 2 weights (regular and italic)",
	NOT_VALID_VARIABLE_WEIGHT_FORMAT: "The used weight format did not match. The valid format is (min)..(max) where min and max are 3 digit numbers",
	VARIABLE_LEGACY_CONFLICT: "You want to use v1 API but are requesting variable fonts. That will not work. Remove one or the other"
};

// Console colors
export const FG_BLACK = "\x1b[30m";
export const FG_RED = "\x1b[31m";
export const FG_GREEN = "\x1b[32m";
export const FG_YELLOW = "\x1b[33m";
export const FG_BLUE = "\x1b[34m";
export const FG_MAGENTA = "\x1b[35m";
export const FG_CYAN = "\x1b[36m";
export const FG_WHITE = "\x1b[37m";
