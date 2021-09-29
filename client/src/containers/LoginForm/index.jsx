import React from 'react'
// import Login from './_LoginForm'
import { Form } from '../../components'
import { Alert, FormControls } from '../../connections'
import { useLogin } from '../../hooks'
import { authAttributes } from '../../json'
const { EMAIL, PASSWORD } = authAttributes

const LoginForm = () => {

	const { message, loginSchemaProps } = useLogin()

	return (
		<Form { ...loginSchemaProps }>
			{ (props) => (
				<Form.Form>
					<Form.Heading>Welcome Back</Form.Heading>

					<FormControls.TextField name={ EMAIL } label="Email" />

					<FormControls.TextField name={ PASSWORD } label="Password" />

					<Alert status={ message.status } text={ message.text } />

					<Form.Submit text="Login" isLoading={ props.isSubmitting } />

					<Form.Text>
						don't have an account?{' '}
						<Form.Path to="/register">sign up</Form.Path>
					</Form.Text>
				</Form.Form>
			)}
		</Form>
	)
}

export default LoginForm
