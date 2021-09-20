import React from 'react'
import Header from './_Header'
import { Logo,	NavBar } from '../../connections'

const HeaderContainer = () => {
	return (
		<Header>
			<Header.Wrapper>
				<Logo>
					<Logo.Text>Arcane 404 Blog App</Logo.Text>
				</Logo>

				<NavBar isLazy>
					{
						({ isOpen }) => (
							<>
								<NavBar.Button>
									{ isOpen ? <NavBar.Close /> : <NavBar.Open /> }
								</NavBar.Button>

								<NavBar.List>
									<NavBar.Item><NavBar.Path to="/">Home</NavBar.Path></NavBar.Item>
									<NavBar.Item><NavBar.Path to="/search">Search</NavBar.Path></NavBar.Item>
									<NavBar.Line />
									<NavBar.Item><NavBar.Path to="/login">Login</NavBar.Path></NavBar.Item>
									<NavBar.Item><NavBar.Path to="/signup">Sign Up</NavBar.Path></NavBar.Item>
								</NavBar.List>
							</>
						)
					}
				</NavBar>
			</Header.Wrapper>
		</Header>
	)
}

export default HeaderContainer
