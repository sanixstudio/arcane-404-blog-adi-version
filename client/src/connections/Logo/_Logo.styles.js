import {
	chakra,
	Image,
	Heading
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Icon } from '../../components'

export const LogoBox = chakra(Link, {
	baseStyle: {
		border: '1px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export const LogoIcon = chakra(Icon.LogoIcon, {
	baseStyle: {
		w: '2em',
		h: '2em',
		color: 'red.500'
	}
})

export const LogoImage = chakra(Image, {})

export const LogoHeading = chakra(Heading, {
	baseStyle: {
		// fontSize: 'lg',
		fontWeight: 'bold'
	}
})
