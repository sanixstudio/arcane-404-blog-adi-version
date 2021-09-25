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

export const AccountBox = chakra(Menu, {
	baseStyle: {}
})

export const AccountButton = chakra(MenuButton, {
	baseStyle: {}
})

export const AccountIcon = chakra(Icon.AccountIcon, {
	baseStyle: {
		w: '2em',
		h: '2em'
	}
})

export const AccountLine = chakra(MenuDivider, {
	baseStyle: {}
})

export const AccountList = chakra(MenuList, {
	baseStyle: {}
})

export const AccountItem = chakra(MenuItem, {
	baseStyle: {}
})

export const AccountPath = chakra(Link, {
	baseStyle: {
		w: '100%'
	}
})
