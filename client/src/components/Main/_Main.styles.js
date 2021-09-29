import { chakra, Box } from '@chakra-ui/react'
import { Wrapper } from '../'

export const MainBox = chakra(Box, {})

export const MainWrapper = chakra(Wrapper, {
	baseStyle: {
		display: 'flex',
		flexFlow: 'column',
		alignItems: 'baseline',
		justifyContent: 'center',
		w: '100%'
	}
})
