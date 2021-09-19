import { chakra, Box } from '@chakra-ui/react'
import { Wrapper } from '../../components'

export const HeaderBox = chakra(Box, {
	baseStyle: {
		bg: 'silver',
		w: '100%',
		h: '6vh'
	},
	defaultProps: {
		as: 'header'
	}
})

export const HWrapper = chakra(Wrapper, {})
