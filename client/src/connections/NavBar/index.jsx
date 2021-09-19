import React from 'react'
import {
	NavBarBox,
	NavBarList,
	NavBarItem,
	NavBarLink
} from './_NavBar.styles'

export default function NavBar ({ children, ...props }) {
	return <NavBarBox { ...props } as="nav">{ children }</NavBarBox>
}

NavBar.List = function NBList ({ children, ...props }) {
	return <NavBarList { ...props }>{ children }</NavBarList>
}

NavBar.Item = function NBItem ({ children, ...props }) {
	return <NavBarItem { ...props }>{ children }</NavBarItem>
}

NavBar.Link = function NBLink ({ children, ...props }) {
	return <NavBarLink { ...props }>{ children }</NavBarLink>
}

