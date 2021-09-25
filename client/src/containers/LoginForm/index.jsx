import React from 'react'
import Login from './_LoginForm'
import { TextField } from '../../connections'
import { authAttributes, loginSchemaProps } from '../../utils'
const { EMAIL, PASSWORD } = authAttributes

const LoginForm = () => {

	return (
		<Login { ...loginSchemaProps }>
			{ (props) => (
				<Login.Form>
					<Login.Heading>Login Form</Login.Heading>

					<TextField
						name={ EMAIL }
						label="Email"
					/>

					<TextField
						name={ PASSWORD }
						label="Password"
					/>

					<Login.Submit
						text="Login"
						// disabled={ !props.isValid }
						// isLoading={ props.isSubmitting }
					/>
				</Login.Form>
			)}
		</Login>
	)
}

export default LoginForm
