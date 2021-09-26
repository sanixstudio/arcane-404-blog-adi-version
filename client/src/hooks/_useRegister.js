/*
delete values.passwordConfirm
*/

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
// import axios from 'axios'
import { auth, authAttributes } from '../json'
import { asyncTest } from '../utils/_helpers'

const {
	AVATAR,
	USERNAME,
	EMAIL,
	PASSWORD,
	PASSWORD_CONFIRM
} = authAttributes

const useRegister = () => {

	const navigate = useNavigate()

	const [ message, setMessage ] = useState({
		status: undefined,
		text: undefined
	})

	const isAlreadyUser = (input) => auth.find(user => (
		user.email === input.email
	))

	const registerSchemaProps = {
		initialValues: {
			[AVATAR]: '',
			[USERNAME]: '',
			[EMAIL]: '',
			[PASSWORD]: '',
			[PASSWORD_CONFIRM]: ''
		},

		validationSchema: yup.object({
			[EMAIL]: yup.string().required().email(),
			[PASSWORD]: yup.string().required().min(6),
			[PASSWORD_CONFIRM]: yup.string()
				.required(`please confirm your ${ PASSWORD }`)
				.oneOf([ yup.ref(PASSWORD) ], `${ PASSWORD } must match`)
		}),

		onSubmit: async (values, actions) => {
			// console.log('values',values)
			try {
				// const response = await axios.post('/signup', values)
				const isUser = await isAlreadyUser(values)
				if (isUser) throw new Error('email is already in use')

				/* TEST */
				asyncTest(1000).then(() => {
					actions.setSubmitting(false)
					setMessage({
						status: 'success',
						text: 'register success'
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
		registerSchemaProps
	}
}

export default useRegister
