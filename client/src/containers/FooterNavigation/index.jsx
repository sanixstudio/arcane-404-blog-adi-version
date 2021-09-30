import React from 'react'
import Footer from './_Footer'
import { Frame } from '../../components'
import { NavLink } from '../../connections'

const FooterNavigation = () => {
	return (
		<Frame.Footer>
			<Frame.Wrapper>
				<Footer.Menu>
					<NavLink to="/"> <Footer.Home /> </NavLink>
					<NavLink to="/admin/post"> <Footer.Post /> </NavLink>
				</Footer.Menu>
			</Frame.Wrapper>
		</Frame.Footer>
	)
}

export default FooterNavigation
