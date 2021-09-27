import { useState, useEffect } from 'react'
import { useStorage } from './'
import { api } from '../services/api'

const INITIAL_KEY = 'token'
const AUTH_TOKEN = process.env.REACT_APP_AUTH_TOKEN || null
console.log(INITIAL_KEY, AUTH_TOKEN)

const useAuth = () => {

	const [ token, setToken, removeToken ] = useStorage(INITIAL_KEY, AUTH_TOKEN)
	const [ isAuth, setAuth ] = useState(false)
	const [ user, setUser ] = useState(null)

	/*
	1) user is not logged in
		- on initial load, check for token
		- if no token, not in localstorage, auth is false
	2) user is logging in
		- login submit, server will start session, respond back w/ token
		- token will stay in localstorage
	3) user is already logged in
		- on page reload, check for token
		- send localstorage token w/ header, server will check for user, respond back w/ token
	*/

	// initial load (check)
	useEffect(() => {
		(async () => {
			console.log('check', token)
			if (!token) return null
			try {
				const { data } = await api.validateToken(token)
				setUser(data)
				setAuth(true)
			} catch (error) {	console.error(error) }
		})()
	}, [ token ])

	// login once
	// logout once

	return {
		isAuth,
		user,

		login: (data) => new Promise((resolve) => {
			setAuth(true)
			setToken(data)
			// setUser(data.user)
			resolve()
		}),

		logout: () => new Promise((resolve) => {
			setAuth(false)
			removeToken()
			setUser(null)
			resolve()
		})
	}
}

export default useAuth
