import React from 'react'
import { FormErrorText } from './_ErrorText.styles'

export default function ErrorText ({ children, ...props }) {
	return <FormErrorText { ...props }>{ children }</FormErrorText>
}
