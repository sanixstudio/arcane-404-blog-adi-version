import React from 'react'
import { LabelBox } from './_Label.styles'

export default function Label ({ children, ...props }) {
	return <LabelBox { ...props }>{ children }</LabelBox>
}
