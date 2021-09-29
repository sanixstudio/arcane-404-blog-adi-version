import React from 'react'
import { WrapperBox, ContainerBox } from './_Wrap.styles'

/* NEW */

export default function Wrapper ({ children, ...props }) {
	return <WrapperBox { ...props }>{ children }</WrapperBox>
}

Wrapper.Container = function Container ({ children, ...props }) {
	return <ContainerBox { ...props }>{ children }</ContainerBox>
}
