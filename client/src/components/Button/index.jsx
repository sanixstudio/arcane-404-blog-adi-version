import React from 'react'
import { ButtonBox } from './_Button.styles'

export default function Button ({ children, ...props }) {
	return <ButtonBox { ...props }>{ children }</ButtonBox>
}
