import {
	chakra,
	Box,
	Text
} from '@chakra-ui/react'

export const LogoBox = chakra(Box, {})

export const LogoImage = chakra(Image, {})

export const LogoText = chakra(Text, {
	baseStyle: {
		fontSize: 'lg',
		fontWeight: 'bold'
	}
})
