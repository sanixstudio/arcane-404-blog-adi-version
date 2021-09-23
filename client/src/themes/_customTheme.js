import { extendTheme, theme as chakraTheme } from '@chakra-ui/react'

const fonts = {
	...chakraTheme.fonts,
	body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
	heading: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
}

const overrides = {
	...chakraTheme,
	fonts,
	fontWeights: {
		normal: 300,
		medium: 600,
		bold: 700
	}
	// ,	styles: {
	// 	global: {
	// 		'html, body': {
	// 			border: '3px solid grey'
	// 		}
	// 	}
	// }
}

const customTheme = extendTheme(overrides)

export default customTheme
