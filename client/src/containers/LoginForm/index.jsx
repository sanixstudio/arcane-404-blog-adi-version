import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from './_LoginForm'
import { AuthConsumer } from '../../context'

const LoginForm = () => {
	const navigate = useNavigate()
	// const { state } = useLocation() // state.path ||
	const { login } = AuthConsumer()

	// submit user login
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submit login form')
		login().then(() => navigate('/'))
	}

	return (
		<Login onSubmit={ handleSubmit }>
			<Login.Heading>Login</Login.Heading>

			{/* email input */}
			<Login.Control>
				<Login.Label htmlFor="email">Email</Login.Label>
				<Login.Input
					type="text"
					id="email"
					placeholder="email here"
				/>
				{ false && <Login.Error>error</Login.Error> }
			</Login.Control>

			{/* password input */}
			<Login.Control>
				<Login.Label htmlFor="password">Password</Login.Label>
				<Login.Input
					type="text"
					id="password"
					placeholder="password here"
				/>
				{ false && <Login.Error></Login.Error> }
			</Login.Control>

			{/* submit button */}
			<Login.Submit>Submit</Login.Submit>
		</Login>
	)
}

export default LoginForm
