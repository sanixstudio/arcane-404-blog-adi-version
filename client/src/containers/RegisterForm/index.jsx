import React from 'react'
import Register from './_RegisterForm'
import { TextField } from '../../connections'
import { authAttributes, registerSchemaProps } from '../../utils'
const {
	EMAIL,
	PASSWORD,
	PASSWORD_CONFIRM
} = authAttributes

const RegisterForm = () => {
	return (
		<Register { ...registerSchemaProps }>
			{ (props) => (
				<Register.Form>
					<Register.Heading>Register Form</Register.Heading>

					<TextField
						name={ EMAIL }
						label="Email"
					/>

					<TextField
						name={ PASSWORD }
						label="Password"
					/>

					<TextField
						name={ PASSWORD_CONFIRM }
						label="Confirm Password"
					/>

					<Register.Submit
						text="Register"
						// disabled={ !props.isValid }
						// isLoading={ props.isSubmitting }
					/>
				</Register.Form>
			)}
		</Register>
	)
}

export default RegisterForm
