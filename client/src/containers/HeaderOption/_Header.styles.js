import { chakra, Box } from '@chakra-ui/react'
import { Wrapper } from '../../components'

export const HeaderBox = chakra(Box, {
	baseStyle: {
		w: '100%',
		minH: '6vh',
		pos: 'sticky',
		top: 0,
		bg: 'white'
	}
})

export const HeaderWrapper = chakra(Wrapper, {})
