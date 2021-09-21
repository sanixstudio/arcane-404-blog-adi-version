import {
	chakra,
	Box,
	Text
} from '@chakra-ui/react'
import { Icon } from '../../components'

export const LogoBox = chakra(Box, {})

export const LogoIcon = chakra(Icon.LogoIcon, {
	baseStyle: {
		w: '2em',
		h: '2em',
		color: 'red.500'
	}
})

export const LogoImage = chakra(Image, {})

export const LogoText = chakra(Text, {
	baseStyle: {
		fontSize: 'lg',
		fontWeight: 'bold'
	}
})
