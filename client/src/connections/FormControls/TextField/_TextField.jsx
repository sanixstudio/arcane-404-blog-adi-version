import React from 'react'
import { Field } from 'formik'
import { FieldControl } from './_TextField.styles'
import {
	Label,
	Input,
	ErrorText
} from '../../../components'


export default function TextField ({ children, ...props }) {
	return <Field { ...props }>{ children }</Field>
}

TextField.Control = function TFControl ({ children, ...props }) {
	return <FieldControl { ...props }>{ children }</FieldControl>
}

TextField.Label = function TFLabel ({ children, text, ...props }) {
	return <Label { ...props }>{ text || children }</Label>
}

TextField.Input = function TFInput (props) {
	return <Input { ...props } />
}

TextField.Error = function TFError ({ children, text, ...props }) {
	return <ErrorText { ...props }>{ text || children }</ErrorText>
}
