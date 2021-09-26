import React from 'react'
import Footer from './_Footer'

const FooterNavigation = () => {
	return (
		<Footer>
			<Footer.Wrapper>
				<Footer.Menu>
					<Footer.Path to="/">
						<Footer.Center> <Footer.Home /> </Footer.Center>
					</Footer.Path>

					<Footer.Path to="/admin/post">
						<Footer.Center>	<Footer.Post /> </Footer.Center>
					</Footer.Path>
				</Footer.Menu>
			</Footer.Wrapper>
		</Footer>
	)
}

export default FooterNavigation
