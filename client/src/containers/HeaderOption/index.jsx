import React from 'react'
import Header from './_Header'
import { Logo, Account } from '../../connections'

const HeaderOption = () => {
	return (
		<Header>
			<Header.Wrapper>
				<Logo>
					<Logo.Icon />
				</Logo>

				<Account isLazy>
					<Account.Button>
						<Account.Icon />
					</Account.Button>

					<Account.List>
						<Account.Item><Account.Path to="/login">Login</Account.Path></Account.Item>
						<Account.Item><Account.Path to="/register">Sign Up</Account.Path></Account.Item>
						<Account.Item><Account.Path to="/logout">Logout</Account.Path></Account.Item>
					</Account.List>
				</Account>
			</Header.Wrapper>
		</Header>
	)
}

export default HeaderOption
