import React from 'react'
import Register from './_RegisterForm'

const RegisterForm = () => {

	// submit user login
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('submit login form')
	}

	return (
		<Register onSubmit={ handleSubmit }>
			<Register.Heading>Register</Register.Heading>

			{/* email input */}
			<Register.Control isRequired>
				<Register.Label htmlFor="email">Email</Register.Label>
				<Register.Input
					type="text"
					id="email"
					placeholder="email here"
				/>
				{ false && <Register.Error>error</Register.Error> }
			</Register.Control>

			{/* password input */}
			<Register.Control isRequired>
				<Register.Label htmlFor="password">Password</Register.Label>
				<Register.Input
					type="text"
					id="password"
					placeholder="password here"
				/>
				{ false && <Register.Error></Register.Error> }
			</Register.Control>

			{/* confirm password input */}
			<Register.Control isRequired>
				<Register.Label htmlFor="password">Confirm Password</Register.Label>
				<Register.Input
					type="text"
					id="password"
					placeholder="confirm password here"
				/>
				{ false && <Register.Error></Register.Error> }
			</Register.Control>

			{/* submit button */}
			<Register.Submit>Submit</Register.Submit>
		</Register>
	)
}

export default RegisterForm
