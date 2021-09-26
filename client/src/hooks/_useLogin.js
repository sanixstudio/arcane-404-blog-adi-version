import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
// import axios from 'axios'
import { auth, authAttributes } from '../json'
import { asyncTest } from '../utils/_helpers'

const { EMAIL, PASSWORD } = authAttributes

const useLogin = () => {

	const navigate = useNavigate()

	const [ message, setMessage ] = useState({
		status: undefined,
		text: undefined
	})

	const isValidUser = (input) => auth.find(user => (
		user.email === input.email &&
		user.passowrd === input.password
	))

	const loginSchemaProps = {
		initialValues: {
			[EMAIL]: '',
			[PASSWORD]: ''
		},

		validationSchema: yup.object({
			[EMAIL]: yup.string().required().email(),
			[PASSWORD]: yup.string().required()
		}),

		onSubmit: async (values, actions) => {
			try {
				// const response = await axios.post('/login', values)
				const isValid = await isValidUser(values)
				if (!isValid) throw new Error('invalid credential')

				setMessage({
					status: undefined,
					text: undefined
				})

				/* TEST */
				asyncTest(1000).then(() => {
					actions.setSubmitting(false)
					setMessage({
						status: 'success',
						text: 'login success'
					})
					// navigate('/')
				})
			} catch (err) {
				setMessage({
					status: 'error',
					text: err.message
				})
			}
		}
	}

	return {
		message,
		loginSchemaProps
	}
}

export default useLogin
