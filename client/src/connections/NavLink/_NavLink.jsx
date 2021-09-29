import React from 'react'
import {
	NavLinkBox,
	LinkCenter,
	LinkText
} from './_NavLink.styles'

export default function NavLink ({ children, ...props }) {
	return <NavLinkBox { ...props }>{ children }</NavLinkBox>
}

NavLink.Center = function NLCenter ({ children, ...props }) {
	return <LinkCenter { ...props }>{ children }</LinkCenter>
}

NavLink.Text = function NLText ({ children, ...props }) {
	return <LinkText { ...props } as="h4">{ children }</LinkText>
}
