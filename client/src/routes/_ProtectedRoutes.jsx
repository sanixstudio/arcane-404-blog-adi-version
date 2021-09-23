import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthConsumer } from '../context'

// Already login: Protected routes based on current user
// away from any authentication pages

const REDIRECT_PATH = '/'

const ProtectedRoute = ({ path, element }) => {
	const { isAuth } = AuthConsumer()

	const Component = !isAuth
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

export default ProtectedRoute
