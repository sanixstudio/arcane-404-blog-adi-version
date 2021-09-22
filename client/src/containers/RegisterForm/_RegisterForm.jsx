import React from 'react'
import {
	RegisterForm,
	RegisterHeading,
	RegisterControl,
	RegisterLabel,
	RegisterInput,
	RegisterError,
	RegisterSubmit
} from './_RegisterForm.styles'

export default function Register ({ children, ...props }) {
	return <RegisterForm { ...props }>{ children }</RegisterForm>
}

Register.Heading = function RHeading ({ children, ...props }) {
	return <RegisterHeading { ...props }>{ children }</RegisterHeading>
}

Register.Control = function RControl ({ children, ...props }) {
	return <RegisterControl { ...props }>{ children }</RegisterControl>
}

Register.Label = function RLabel ({ children, ...props }) {
	return <RegisterLabel { ...props }>{ children }</RegisterLabel>
}

Register.Input = function RInput (props) {
	return <RegisterInput { ...props } />
}

Register.Error = function RError ({ children, ...props }) {
	return <RegisterError { ...props }>{ children }</RegisterError>
}

Register.Submit = function RSubmit ({ children, ...props }) {
	return <RegisterSubmit { ...props } type="submit">{ children }</RegisterSubmit>
}
