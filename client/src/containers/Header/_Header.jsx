import React from 'react'
import { HeaderBox, HWrapper } from './_Header.styles'

export default function Header ({ children, ...props }) {
	return <HeaderBox { ...props } as="header">{ children }</HeaderBox>
}

Header.Wrapper = function HeaderWrapper ({ children, ...props }) {
	return <HWrapper { ...props }>{ children }</HWrapper>
}
