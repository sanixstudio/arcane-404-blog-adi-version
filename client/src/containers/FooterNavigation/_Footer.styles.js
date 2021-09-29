import {
	chakra,
	Box,
	Flex,
	Center
} from '@chakra-ui/react'
import { Wrapper, Icon } from '../../components'

export const FooterBox = chakra(Box, {
	baseStyle: {
		w: '100%',
		// minH: '6vh',
		bg: 'white',
		pos: 'fixed',
		bottom: 0
	}
})

export const FooterWrapper = chakra(Wrapper, {})

export const FooterMenu = chakra(Flex, {
	baseStyle: {
		border: '1px solid silver',
		w: '100%',
		p: 1,
		flexFlow: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
})

const iconStyle = {
	w: '1.5em',
	h: '1.5em'
}

export const FooterHome = chakra(Icon.HomeIcon, {
	baseStyle: iconStyle
})

export const FooterSearch = chakra(Icon.SearchIcon, {
	baseStyle: iconStyle
})

export const FooterPost = chakra(Icon.PostIcon, {
	baseStyle: iconStyle
})
