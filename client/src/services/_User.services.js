// import axios from 'axios'
import {
	isAlreadyUser,
	isValidUser,
	isValidToken
} from '../utils/_helpers'

// POST USER in Register Page
export const registerUser = async (body) => {
	const PATH = '/api/user/register'

	try {
		// const { data } = await axios.post(PATH, body)
		const response = await isAlreadyUser(body)
		if (response) throw new Error('email is already in use')
		else return {
			status: 'success',
			data: body
		}
	} catch (error) { throw error }
}

// POST USER in Login Page
export const loginUser = async (body) => {
	const PATH = '/api/user/login'

	try {
		// const { data } = await axios.post(PATH, body)
		const response = await isValidUser(body)
		if (!response) throw new Error('invalid credential')
		else return {
			status: 'success',
			data: body
		}
	} catch (error) { throw error }
}

// POST USER when page LOADS
export const validateToken = async (token) => {
	const PATH = '/api/user/validateToken'
	const HEADER = { 'x-auth-token': token }
	console.log('validate token', token)

	try {
		// const { data } = await axios.post(PATH, null, HEADER)
		const response = await isValidToken(token)
		console.log('response', response)
		if (!response) throw new Error('unauthorized token')
		else return response
	} catch (error) { throw error }
}
