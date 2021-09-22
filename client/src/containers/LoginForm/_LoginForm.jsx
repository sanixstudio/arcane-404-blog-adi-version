import React from 'react'
import {
	LoginForm,
	LoginHeading,
	LoginControl,
	LoginLabel,
	LoginInput,
	LoginError,
	LoginSubmit
} from './_LoginForm.styles'

export default function Login ({ children, ...props }) {
	return <LoginForm { ...props }>{ children }</LoginForm>
}

Login.Heading = function LHeading ({ children, ...props }) {
	return <LoginHeading { ...props }>{ children }</LoginHeading>
}

Login.Control = function LControl ({ children, ...props }) {
	return <LoginControl { ...props }>{ children }</LoginControl>
}

Login.Label = function LLabel ({ children, ...props }) {
	return <LoginLabel { ...props }>{ children }</LoginLabel>
}

Login.Input = function LInput (props) {
	return <LoginInput { ...props } />
}

Login.Error = function LError ({ children, ...props }) {
	return <LoginError { ...props }>{ children }</LoginError>
}

Login.Submit = function LSubmit ({ children, ...props }) {
	return <LoginSubmit { ...props } type="submit">{ children }</LoginSubmit>
}
