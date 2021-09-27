import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from '../context'

// After Login: Private routes based on the app service
// e.g. Dashboard, Settings, Post

const REDIRECT_PATH = '/login'

const PrivateRoute = ({
	children,
	element: Element,
	...rest
}) => {

	const { isAuth } = AuthConsumer()

	const Component = () => isAuth
		? (children || <Element />)
		: <Redirect	to={ REDIRECT_PATH } />

	return <Route { ...rest } render={ Component } />
}

export default PrivateRoute
