import React from 'react'
import {
	FooterBox,
	FooterWrapper,
	FooterMenu,
	FooterHome,
	FooterSearch,
	FooterPost
} from './_Footer.styles'

export default function Footer ({ children, ...props }) {
	return <FooterBox { ...props } as="footer">{ children }</FooterBox>
}

Footer.Wrapper = function FWrapper ({ children, ...props }) {
	return <FooterWrapper { ...props }>{ children }</FooterWrapper>
}

Footer.Menu = function FMenu ({ children, ...props }) {
	return <FooterMenu { ...props }>{ children }</FooterMenu>
}

Footer.Home = function FHome (props) {
	return <FooterHome { ...props } />
}

Footer.Search = function FSearch (props) {
	return <FooterSearch { ...props } />
}

Footer.Post = function FPost (props) {
	return <FooterPost { ...props } />
}

