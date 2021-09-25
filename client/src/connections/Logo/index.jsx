import React from 'react'
import {
	LogoBox,
	LogoIcon,
	LogoImage,
	LogoHeading
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

Logo.Heading = function LHeading ({ children, ...props }) {
	return <LogoHeading { ...props } as="h1">{ children }</LogoHeading>
}
