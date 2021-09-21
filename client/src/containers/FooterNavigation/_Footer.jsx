import React from 'react'
import {
	FooterBox,
	FooterWrapper,
	FooterMenu,
	FooterCenter,
	FooterPath,
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

Footer.Center = function FCenter ({ children, ...props }) {
	return <FooterCenter { ...props }>{ children }</FooterCenter>
}

Footer.Path = function FPath ({ children, ...props }) {
	return <FooterPath { ...props }>{ children }</FooterPath>
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
