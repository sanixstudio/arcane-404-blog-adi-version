import React from 'react'
import Alert from './_Alert'

const AlertConnection = ({
	status = 'info', // error, success
	text = ''
}) => {

	if (status === 'info') return null

	return (
		<Alert status={ status }>
			<Alert.Icon />
			<Alert.Text text={ text } />
		</Alert>
	)
}

export default AlertConnection
