import {
	chakra,
	Box,
	Flex,
	Center
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Wrapper, Icon } from '../../components'

export const FooterBox = chakra(Box, {
	baseStyle: {
		w: '100%',
		minH: '6vh',
		bg: 'silver',
		position: 'fixed',
		bottom: 0
	}
})

export const FooterWrapper = chakra(Wrapper, {
	baseStyle: {}
})

export const FooterMenu = chakra(Flex, {
	baseStyle: {
		border: '1px solid blue',
		w: '100%',
		flexFlow: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
})

export const FooterCenter = chakra(Center, {
	baseStyle: { flexFlow: 'column' }
})

export const FooterPath = chakra(Link, {
	baseStyle: {
		border: '1px'
	}
})

export const FooterHome = chakra(Icon.HomeIcon, {
	baseStyle: {
		w: '2em',
		h: '2em'
	}
})
export const FooterSearch = chakra(Icon.SearchIcon, {
	baseStyle: {
		w: '2em',
		h: '2em'
	}
})
export const FooterPost = chakra(Icon.PostIcon, {
	baseStyle: {
		w: '2em',
		h: '2em'
	}
})
