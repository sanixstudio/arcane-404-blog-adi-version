import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import Header from './_Header'
import {
	Logo,
	NavBar,
	MenuToggle
} from '../../connections'

const HeaderContainer = () => {
	const { isOpen, onToggle } = useDisclosure()
	const isDisplay = isOpen ? 'block' : 'none'

	return (
		<Header>
			<Header.Wrapper>
				<Logo>
					<Logo.Text>Arcane 404 Blog App</Logo.Text>
				</Logo>

				<NavBar display={ isDisplay }>
					<NavBar.List>
						<NavBar.Item><NavBar.Link to="/">Home</NavBar.Link></NavBar.Item>
						<NavBar.Item><NavBar.Link to="/login">Login</NavBar.Link></NavBar.Item>
						<NavBar.Item><NavBar.Link to="/signup">Sign Up</NavBar.Link></NavBar.Item>
					</NavBar.List>
				</NavBar>

				<MenuToggle onClick={ onToggle }>
					{ isOpen ? <MenuToggle.Close /> : <MenuToggle.Open /> }
				</MenuToggle>
			</Header.Wrapper>
		</Header>
	)
}

export default HeaderContainer
