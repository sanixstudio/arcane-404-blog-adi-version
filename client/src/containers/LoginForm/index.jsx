import React, { useState } from 'react'
import axios from 'axios'
// import Login from './_LoginForm'
import { Form } from '../../components'
import { Alert, FormControls } from '../../connections'
import { useLogin } from '../../hooks'
import { authAttributes } from '../../json'
const { EMAIL, PASSWORD } = authAttributes

const LoginForm = () => {

	const { message, loginSchemaProps } = useLogin()

	const [ resent, setResent ] = useState(false)

	const handleResent = async () => {
		if (!message.email) return
		try {
			const resendVerf = await axios.post('/api/user/resendConfirm', {
				email: message.email
			})
			//console.log(resendVerf)
			setResent(true)
		} catch (err) {
			console.log(err.response)
		}
	}

	return (
		<Form { ...loginSchemaProps }>
			{ (props) => (
				<Form.Form>
					<Form.Heading>Welcome Back</Form.Heading>

					<FormControls.TextField name={ EMAIL } label="Email" />

					<FormControls.TextField name={ PASSWORD } label="Password" />

					<Alert status={ message.status } text={ message.text } />

					<Form.Submit text="Login" isLoading={ props.isSubmitting } />

					{ // display resend button
						(message && message.notVerified && !resent) &&
						 (
							 <p>
								 Click
								 <span onClick={ handleResent } role="button">
									 | here |
								 </span>
								 to resend email verification
							 </p>
						 )
					}

					{ // display resent successful
						(message && message.notVerified && resent) &&
						 <Alert status="success" text="email verification has been resent" />
					}

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
