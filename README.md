# @epic-design-labs/gatsby-plugin-google-fonts

Revised Gatsby plugin that loads Google Fonts to your custom Gatsby sites. It supports importing variable size fonts.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Install

```bash
# With NPM
$ npm install @epic-design-labs/gatsby-plugin-google-fonts

# With Yarn
$ yarn add @epic-design-labs/gatsby-plugin-google-fonts
```

## Add to Gatsby Config

In `gatbsy-config.js`

```javascript
plugins: [
	{
		resolve: `@epic-design-labs/gatsby-plugin-google-fonts`,
		options: {
			fonts: [
				{
					family: "JetBrains Mono",
					weights: ["100", "400"]
				},
				{
					family: "Roboto Mono",
					weights: ["100..400"]
				}
			]
		}
	}
	// other plugins
];
```

## Options

### Plugin options

| Option                   | Description                                                                                                                                      |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **verbose** _(optional)_ | Enables the error reporting in case any malformed options are passed to the font                                                                 |
| **legacy** _(optional)_  | It uses the v1 api. **CAUTION**: this will disable variable font and will error out if both are used at the same time. Not fully implemented yet |
| **display** _(optional)_ | Enables font-display option. Details [here](https://font-display.glitch.me/). Defaults to `display=swap`                                         |

### Font options

| Option                      | Description                                                                                                                                                                                                                                              |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **family** _(required)_     | the font family you would like to use as it appears in [Google Fonts](https://fonts.google.com/) - it will be formatted by capitalising the first letter of every word and replacing _space_ with "+"                                                    |
| **strictName** _(optional)_ | if used, the font family name will be used as the user typed it. Useful for some fonts that have ALL CAPS names                                                                                                                                          |
| **variable** _(optional)_   | if used, it signals that the font is a variable width font and will revert to using the (min_weight..max_weight) format for the font weight - if not present, the font will be treated as a regular font and will require the regular font weight format |
| **weights** _(optional)_    | if not used, the font will load with the default weight selected                                                                                                                                                                                         |

### Weights formats

| Option                    | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Regular font**          | `['300']`- will load the 300 weight `['300', '900']` - will load the 300 and 900 weights                                                                                                                                                                                                                                                                                          |
| **Variable font**         | `['200..500']` - will load the non-italic version with all weights between 200 and 500 `['200..500', [300..400]` - will load the non-italic version with all weights between 200 and 500 AND italic version with weights between 300 and 400 `['', '200..500']` - will load just the italic version with all weights between 200 and 500 NB: Will only work with `variable: true` |
| **variable** _(optional)_ | if used, it signals that the font is a variable width font and will revert to using the (min_weight..max_weight) format for the font weight - if not present, the font will be treated as a regular font and will require the regular font weight format                                                                                                                          |
| **weights** _(optional)_  | if not used, the font will load with the default weight selected                                                                                                                                                                                                                                                                                                                  |

## Work in Progress

- [ ] Full backwards compatibility support for `v1` Google Fonts API

## Author

[**Epic Design Labs**](https://epicdesignlabs.com)

## License

Released under the [MIT license](LICENSE).

## Credits

Thanks to all the contributors and maintainers of both the original plugin [gatsby-plugin-google-fonts](https://github.com/didierfranc/gatsby-plugin-google-fonts) and its `v2` version, [gatsby-plugin-google-fonts-v2](https://github.com/pocorschi/gatsby-plugin-google-fonts-v2) for the great work. 🎉
