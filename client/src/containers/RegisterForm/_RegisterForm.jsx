import React from 'react'
import {
	RegisterFormik,
	RegisterBox,
	RegisterHeading,
	RegisterSubmit,
	RegisterText,
	RegisterPath
} from './_RegisterForm.styles'

export default function Register ({ children, ...props }) {
	return <RegisterFormik { ...props }>{ children }</RegisterFormik>
}

Register.Form = function RForm ({ children, ...props }) {
	return <RegisterBox { ...props }>{ children }</RegisterBox>
}

Register.Heading = function RHeading ({ children, ...props }) {
	return <RegisterHeading { ...props }>{ children }</RegisterHeading>
}

Register.Submit = function RSubmit ({ children, text, ...props }) {
	return <RegisterSubmit { ...props } type="submit">{ text || children }</RegisterSubmit>
}

Register.Text = function RText ({ children, ...props }) {
	return <RegisterText { ...props }>{ children }</RegisterText>
}

Register.Path = function RPath ({ children, ...props }) {
	return <RegisterPath { ...props }>{ children }</RegisterPath>
}
