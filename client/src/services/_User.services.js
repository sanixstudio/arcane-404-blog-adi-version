import axios from 'axios'

// POST USER in Register Page
export const registerUser = async (body) => {
	const PATH = '/api/user/register'

	try {
		const { data } = await axios.post(PATH, body)
		return {
			status: 'success',
			data
		}
	} catch (error) {
		// console.warn('error services', error.response)
		if (!error?.response?.data) throw Error('Unknown error')
		else throw Error(error.response.data.message)
	}
}

// POST USER in Login Page
export const loginUser = async (body) => {
	const PATH = '/api/user/login'

	try {
		const { data } = await axios.post(PATH, body)
		return {
			status: 'success',
			data
		}
	} catch (error) {
		// console.warn('error services', error.response)
		if (!error?.response?.data) throw Error('Unknown error')
		else throw Error(error.response.data.message)
	}
}

// POST USER when page LOADS
export const validateToken = async (token) => {
	const PATH = '/api/user/validateToken'
	const CONFIG = { headers: { 'x-auth-token': token } }

	try {
		const { data } = await axios.post(PATH, null, CONFIG)
		return data // user
	} catch (error) {
		// console.warn('error services', error.response)
		if (!error?.response?.data) throw Error('Unknown error')
		else throw Error(error.response.data.message)
	}
}
