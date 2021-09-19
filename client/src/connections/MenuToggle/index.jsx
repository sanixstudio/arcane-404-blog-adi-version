import React from 'react'
import {
	MenuToggleBox,
	Close,
	Open
} from './_MenuToggle.styles'

export default function MenuToggle ({ children, ...props }) {
	return <MenuToggleBox { ...props }>{ children }</MenuToggleBox>
}

MenuToggle.Close = function MTClose ({ ...props }) {
	return <Close { ...props } />
}

MenuToggle.Open = function MTOpen ({ ...props }) {
	return <Open { ...props } />
}
