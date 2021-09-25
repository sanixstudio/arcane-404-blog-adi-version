import React from 'react'
import {
	RegisterFormik,
	RegisterBox,
	RegisterHeading,
	RegisterSubmit
} from './_RegisterForm.styles'

export default function Register ({ children, ...props }) {
	return <RegisterFormik { ...props }>{ children }</RegisterFormik>
}

Register.Form = function LForm ({ children, ...props }) {
	return <RegisterBox { ...props }>{ children }</RegisterBox>
}

Register.Heading = function LHeading ({ children, ...props }) {
	return <RegisterHeading { ...props }>{ children }</RegisterHeading>
}

Register.Submit = function LSubmit ({ children, text, ...props }) {
	return <RegisterSubmit { ...props } type="submit">{ text || children }</RegisterSubmit>
}
