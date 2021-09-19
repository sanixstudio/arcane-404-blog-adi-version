import React from 'react'
import { HeaderBox, HeaderWrapper } from './_Header.styles'

export default function Header ({ children, ...props }) {
	return <HeaderBox { ...props } as="header">{ children }</HeaderBox>
}

Header.Wrapper = function HWrapper ({ children, ...props }) {
	return <HeaderWrapper { ...props }>{ children }</HeaderWrapper>
}
