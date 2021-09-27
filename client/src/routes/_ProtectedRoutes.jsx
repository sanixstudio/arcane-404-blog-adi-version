import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from '../context'

// Already login: Protected routes based on current user
// away from any authentication pages

const REDIRECT_PATH = '/'

const ProtectedRoute = ({
	children,
	element: Element,
	...rest
}) => {

	const { isAuth } = AuthConsumer()

	const Component = () => !isAuth
		? (children || <Element />)
		: <Redirect	to={ REDIRECT_PATH } />

	return <Route { ...rest } render={ Component } />
}

export default ProtectedRoute
