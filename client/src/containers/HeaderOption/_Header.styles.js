import { chakra, Box } from '@chakra-ui/react'
import { Wrapper } from '../../components'

export const HeaderBox = chakra(Box, {
	baseStyle: {
		w: '100%',
		minH: '6vh',
		position: 'sticky',
		top: 0
	}
})

export const HeaderWrapper = chakra(Wrapper, {
	baseStyle: {
		bg: 'white'
	}
})
