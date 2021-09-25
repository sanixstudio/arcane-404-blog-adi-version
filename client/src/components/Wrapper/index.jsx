import React from 'react'
import { WrapperBox } from './_Wrapper.styles'

export default function Wrapper ({ children, ...props }) {
	return <WrapperBox { ...props }>{ children }</WrapperBox>
}
