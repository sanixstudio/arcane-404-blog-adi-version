import { chakra, Box } from '@chakra-ui/react'

export const FrameBox = chakra(Box, {
	baseStyle: ({ as }) => ({ bg: (as) ? 'white' : null })
})

export const HeaderBox = chakra(Box, {
	baseStyle: {
		bg: 'white',
		w: '100%',
		minH: '6vh',
		pos: 'sticky',
		top: 0
	}
})

export const FooterBox = chakra(Box, {
	baseStyle: {
		bg: 'white',
		w: '100%',
		pos: 'fixed',
		bottom: 0
	}
})

export const MainBox = chakra(Box, {})

const template = {
	border: '2px',
	maxW: '600px',
	w: '100%',
	h: '100%',
	mx: 'auto',
	px: '8'
}

export const BarBox = chakra(Box, {
	baseStyle: {
		...template,
		display: 'flex',
		flexFlow: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between'
	}
})

export const WrapperBox = chakra(Box, {
	baseStyle: {
		...template
		// display: 'flex',
		// flexFlow: 'column',
		// alignItems: 'center'
		// justifyContent: 'space-between'
	}
})
