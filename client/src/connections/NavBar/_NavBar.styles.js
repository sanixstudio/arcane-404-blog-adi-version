import {
	chakra,
	Menu,
	MenuButton,
	MenuDivider,
	MenuList,
	MenuItem
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { Icon } from '../../components'

export const NavBarBox = chakra(Menu, {
	baseStyle: {}
})

export const NavButton = chakra(MenuButton, {
	baseStyle: {}
})

export const NavClose = chakra(Icon.CloseIcon, {
	baseStyle: {}
})

export const NavOpen = chakra(Icon.OpenIcon, {
	baseStyle: {
		fontSize: '1.25em'
	}
})

export const NavLine = chakra(MenuDivider, {
	baseStyle: {}
})

export const NavList = chakra(MenuList, {
	baseStyle: {}
})

export const NavItem = chakra(MenuItem, {
	baseStyle: {}
})

export const NavPath = chakra(Link, {
	baseStyle: {
		w: '100%'
	}
})
