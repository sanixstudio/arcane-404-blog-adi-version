import React from 'react'
import {
	AlertBox,
	AlertBoxIcon,
	AlertBoxText
} from './_Alert.styles'

export default function Alert ({ children, status, props }) {
	return <AlertBox { ...props } status={ status }>{ children }</AlertBox>
}

Alert.Icon = function AIcon (props) {
	return <AlertBoxIcon { ...props } />
}

Alert.Text = function AText ({ children, text, ...props }) {
	return <AlertBoxText { ...props }>{ text || children }</AlertBoxText>
}
