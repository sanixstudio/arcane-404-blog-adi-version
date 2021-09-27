import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import Header from './_Header'
import { Logo, Account } from '../../connections'
import { AuthConsumer } from '../../context'

const HeaderOption = () => {

	const history = useHistory()
	const navigate = (path) => history.push(path)

	const { isAuth, logout } = AuthConsumer()

	const goToLogin = () => navigate('/login')
	const goToSignUp = () => navigate('/register')
	const handleLogout = () => logout().then(() => navigate('/login'))

	return (
		<Header>
			<Header.Wrapper>
				<Logo to="/">
					<Logo.Icon />
					<Logo.Heading>A 404 B</Logo.Heading>
				</Logo>

				<Account isLazy>
					<Account.Button>
						<IconButton
							as="div"
							aria-label="Options"
							variant="outline"
							icon={ <Account.Icon /> }
						/>
					</Account.Button>

					<Account.List>
						{
							!isAuth ? (
								<>
									<Account.Item onClick={ goToLogin }>Login</Account.Item>
									<Account.Item onClick={ goToSignUp }>Sign Up</Account.Item>
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

/*
					<Account.Button>
						<Account.Icon />
					</Account.Button>

					<Account.Button
						aria-label="Options"
						variant="outline"
						as={ IconButton }
						icon={ <Account.Icon /> }
					/>
*/
