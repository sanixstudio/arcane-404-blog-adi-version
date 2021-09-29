import { chakra, Box } from '@chakra-ui/react'

/*
- FrameBox
- WrapperBox
*/

export const WrapperBox = chakra(Box, {
	baseStyle: {
		bg: 'white'
	}
})

export const ContainerBox = chakra(Box, {
	baseStyle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexFlow: 'wrap',
		maxW: '600px',
		w: '100%',
		h: '100%',
		mx: 'auto',
		px: '8',
		border: '2px'
	}
})
