import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthConsumer } from '../context'

// After Login: Private routes based on the app service
// e.g. Dashboard, Settings, Post

const REDIRECT_PATH = '/login'

const PrivateRoute = ({ path, element }) => {
	const { isAuth } = AuthConsumer()

	const Component = isAuth
		? element
		: (
			<Navigate
				to={ REDIRECT_PATH }
				replace
				// state={{ path }}
			/>
		)

	return <Route path={ path } element={ Component } />
}

export default PrivateRoute
