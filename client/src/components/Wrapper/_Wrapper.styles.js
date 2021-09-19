import { chakra, Box } from '@chakra-ui/react'

export const WrapperBox = chakra(Box, {
	baseStyle: {
		maxW: '600px',
		h: '100%',
		m: '0 auto',
		border: '2px'
	}
})
