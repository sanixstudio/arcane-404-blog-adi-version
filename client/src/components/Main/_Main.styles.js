import { chakra, Box } from '@chakra-ui/react'
import { Wrapper } from '../'

export const MainBox = chakra(Box, {})

export const MainWrapper = chakra(Wrapper, {
	baseStyle: {
		// border: '2px solid red',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		w: '100%'
	}
})
