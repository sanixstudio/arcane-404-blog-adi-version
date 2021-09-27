import React from 'react'
import Register from './_RegisterForm'
import { Alert, TextField } from '../../connections'
import { useRegister } from '../../hooks'
import { authAttributes } from '../../json'

const {
	EMAIL,
	PASSWORD,
	PASSWORD_CONFIRM
} = authAttributes

const RegisterForm = () => {

	const { message, registerSchemaProps } = useRegister()

	return (
		<Register { ...registerSchemaProps }>
			{ (props) => (
				<Register.Form>
					<Register.Heading>Create Account</Register.Heading>

					<TextField name={ EMAIL } label="Email" />

					<TextField name={ PASSWORD } label="Password" />

					<TextField name={ PASSWORD_CONFIRM } label="Confirm Password" />

					<Alert status={ message.status } text={ message.text } />

					<Register.Submit text="Register" isLoading={ props.isSubmitting } />

					<Register.Text>
						already have an account?{' '}
						<Register.Path to="/login">login</Register.Path>
					</Register.Text>
				</Register.Form>
			)}
		</Register>
	)
}

export default RegisterForm
