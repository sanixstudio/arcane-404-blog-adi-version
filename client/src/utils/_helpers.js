import { auth } from '../json'

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
export const report = (values) => alert(JSON.stringify(values, null, 2))

// test: verify if user already exists via email
export const isAlreadyUser = (input) => auth.users.find(user => (
	user.email === input.email
))
// || throw new Error('email is already in use')

// test: verify is this is a user via credentials
export const isValidUser = (input) => auth.users.find(user => (
	user.email === input.email &&	user.passowrd === input.password
))
// || throw new Error('invalid credential')

// test: verify client token w/ server token
export const isValidToken = (token) => (
	auth.data.token === token && auth.data.user
)
// || throw new Error('unauthorized token')
