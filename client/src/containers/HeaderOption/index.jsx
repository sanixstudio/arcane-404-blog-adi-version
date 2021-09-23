import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './_Header'
import { Logo, Account } from '../../connections'
import { AuthConsumer } from '../../context'


const HeaderOption = () => {

	const navigate = useNavigate()
	const { isAuth, logout } = AuthConsumer()

	const handleLogout = () => {
		logout().then(() => navigate('/login'))
	}

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
						{
							!isAuth ? (
								<>
									<Account.Item><Account.Path to="/login">Login</Account.Path></Account.Item>
									<Account.Item><Account.Path to="/register">Sign Up</Account.Path></Account.Item>
								</>
							) : (
								<>
									<Account.Item onClick={ handleLogout }>Logout</Account.Item>
								</>
							)
						}
					</Account.List>
				</Account>
			</Header.Wrapper>
		</Header>
	)
}

export default HeaderOption
