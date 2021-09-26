import React from 'react'
import {
	LoginFormik,
	LoginBox,
	LoginHeading,
	LoginSubmit,
	LoginText,
	LoginPath
} from './_LoginForm.styles'

export default function Login ({ children, ...props }) {
	return <LoginFormik { ...props }>{ children }</LoginFormik>
}

Login.Form = function LForm ({ children, ...props }) {
	return <LoginBox { ...props }>{ children }</LoginBox>
}

Login.Heading = function LHeading ({ children, ...props }) {
	return <LoginHeading { ...props }>{ children }</LoginHeading>
}

Login.Submit = function LSubmit ({ children, text, ...props }) {
	return <LoginSubmit { ...props } type="submit">{ text || children }</LoginSubmit>
}

Login.Text = function LText ({ children, ...props }) {
	return <LoginText { ...props }>{ children }</LoginText>
}

Login.Path = function LPath ({ children, ...props }) {
	return <LoginPath { ...props }>{ children }</LoginPath>
}
