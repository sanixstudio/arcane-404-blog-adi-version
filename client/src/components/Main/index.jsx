import React from 'react'
import { MainBox, MainWrapper } from './_Main.styles'

export default function Main ({ children, ...props }) {
	return <MainBox { ...props } as="main">{ children }</MainBox>
}

Main.Wrapper = function MWrapper ({ children, ...props }) {
	return <MainWrapper { ...props }>{ children }</MainWrapper>
}
