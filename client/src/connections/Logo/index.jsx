import React from 'react'
import {
	LogoBox,
	LogoIcon,
	LogoImage,
	LogoText
} from './_Logo.styles'

export default function Logo ({ children, ...props }) {
	return <LogoBox { ...props }>{ children }</LogoBox>
}

Logo.Icon = function LIcon (props) {
	return <LogoIcon { ...props } />
}

Logo.Image = function LImages (props) {
	return <LogoImage { ...props } />
}

Logo.Text = function LText ({ children, ...props }) {
	return <LogoText { ...props } as="h1">{ children }</LogoText>
}
