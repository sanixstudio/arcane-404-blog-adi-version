import React from 'react'
import { IconButton } from '@chakra-ui/react'
import {
	NavBarBox,
	NavButton,
	NavClose,
	NavOpen,
	NavLine,
	NavList,
	NavItem,
	NavPath
} from './_NavBar.styles'

export default function NavBar ({ children, ...props }) {
	return <NavBarBox { ...props }>{ children }</NavBarBox>
}

NavBar.Button = function NBButton ({ children, ...props }) {
	return <NavButton { ...props }>{ children }</NavButton>
}

NavBar.Close = function NBClose (props) {
	return <NavClose { ...props } />
}

NavBar.Open = function NBOpen (props) {
	return <NavOpen { ...props } />
}

NavBar.Line = function NBLine (props) {
	return <NavLine { ...props } />
}

NavBar.List = function NBList ({ children, ...props }) {
	return <NavList { ...props }>{ children }</NavList>
}

NavBar.Item = function NBItem ({ children, ...props }) {
	return <NavItem { ...props }>{ children }</NavItem>
}

NavBar.Path = function NBPath ({ children, ...props }) {
	return <NavPath { ...props }>{ children }</NavPath>
}
