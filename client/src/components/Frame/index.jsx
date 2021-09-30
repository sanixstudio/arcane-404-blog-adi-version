import React from 'react'
import {
	FrameBox,
	WrapperBox,
	HeaderBox,
	FooterBox,
	MainBox,
	BarBox
} from './_Wrap.styles'

export default function Frame ({ children, ...props }) {
	return <FrameBox { ...props }>{ children }</FrameBox>
}

Frame.Header = function Header ({ children, ...props }) {
	return <HeaderBox { ...props } as="header">{ children }</HeaderBox>
}

Frame.Main = function Main ({ children, ...props }) {
	return <MainBox { ...props } as="main">{ children }</MainBox>
}

Frame.Footer = function Footer ({ children, ...props }) {
	return <FooterBox { ...props } as="footer">{ children }</FooterBox>
}

Frame.Bar = function Bar ({ children, ...props }) {
	return <BarBox { ...props }>{ children }</BarBox>
}


Frame.Wrapper = function Wrapper ({ children, ...props }) {
	return <WrapperBox { ...props }>{ children }</WrapperBox>
}
