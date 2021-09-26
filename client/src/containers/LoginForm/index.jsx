import React from 'react'
import Login from './_LoginForm'
import { Alert, TextField } from '../../connections'
import { useLogin } from '../../hooks'
import { authAttributes } from '../../json'
const { EMAIL, PASSWORD } = authAttributes

const LoginForm = () => {

	const { message, loginSchemaProps } = useLogin()

	return (
		<Login { ...loginSchemaProps }>
			{ (props) => (
				<Login.Form>
					<Login.Heading>Welcome Back</Login.Heading>

					<TextField name={ EMAIL } label="Email" />

					<TextField name={ PASSWORD } label="Password" />

					<Alert status={ message.status } text={ message.text } />

					<Login.Submit text="Login" isLoading={ props.isSubmitting } />

					<Login.Text>
						don't have an account?{' '}
						<Login.Path to="/register">sign up</Login.Path>
					</Login.Text>
				</Login.Form>
			)}
		</Login>
	)
}

export default LoginForm
