import React from 'react'
import Footer from './_Footer'
import { NavLink } from '../../connections'

const FooterNavigation = () => {
	return (
		<Footer test="does this prop work">
			<Footer.Wrapper>
				<Footer.Menu>
					<NavLink to="/"> <Footer.Home /> </NavLink>
					<NavLink to="/admin/post"> <Footer.Post /> </NavLink>
				</Footer.Menu>
			</Footer.Wrapper>
		</Footer>
	)
}

export default FooterNavigation
