import {
	chakra,
	Center,
	Text
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// import { Icon } from '../../components'

export const NavLinkBox = chakra(Link, {
	baseStyle: {
		border: '1px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export const LinkCenter = chakra(Center, {
	baseStyle: {
		flexFlow: 'column'
	}
})

export const LinkText = chakra(Text, {
	baseStyle: {
		fontWeight: 'bold'
	}
})
