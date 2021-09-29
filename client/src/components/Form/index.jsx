import React from 'react'
import {
	FormBox,
	FormHeading,
	FormSubmit,
	FormText,
	FormPath
} from './_Form.styles'
import { Formik } from 'formik'

export default function Form ({ children, ...props }) {
	return <Formik { ...props }>{ children }</Formik>
}

Form.Form = function FForm ({ children, ...props }) {
	return <FormBox { ...props }>{ children }</FormBox>
}

Form.Heading = function FHeading ({ children, ...props }) {
	return <FormHeading { ...props }>{ children }</FormHeading>
}

Form.Submit = function FSubmit ({ children, text, ...props }) {
	return <FormSubmit { ...props } type="submit">{ text || children }</FormSubmit>
}

Form.Text = function FText ({ children, ...props }) {
	return <FormText { ...props }>{ children }</FormText>
}

Form.Path = function FPath ({ children, ...props }) {
	return <FormPath { ...props }>{ children }</FormPath>
}
