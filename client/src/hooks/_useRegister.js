import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { authAttributes } from '../json'
import { delay } from '../utils/_helpers'
import { api } from '../services/api'

const {
	AVATAR,
	USERNAME,
	EMAIL,
	PASSWORD,
	PASSWORD_CONFIRM
} = authAttributes

const initialMessage = {
	status: undefined,
	text: undefined
}

const useRegister = () => {

	// hook to redirect route
	const navigate = useNavigate()

	// include alert message for error or success
	const [ message, setMessage ] = useState(initialMessage)

	// Formik prop: initial state values
	const initialValues = {
		[AVATAR]: '',
		[USERNAME]: '',
		[EMAIL]: '',
		[PASSWORD]: '',
		[PASSWORD_CONFIRM]: ''
	}

	// Formik prop: to check validation on values
	const validationSchema = yup.object({
		[EMAIL]: yup.string().required().email(),
		[PASSWORD]: yup.string().required().min(6),
		[PASSWORD_CONFIRM]: yup.string()
			.required(`please confirm your ${ PASSWORD }`)
			.oneOf([ yup.ref(PASSWORD) ], `${ PASSWORD } must match`)
	})

	// Formik prop: to check verification & handle submit
	const onSubmit = async (values, actions) => {
		const { passwordConfirm, ...body } = values
		// console.log('body', body)

		try {
			// const response = await axios.post('/signup', body)
			const response = await api.registerUser(body)
			console.log(response)

			setMessage({
				status: 'success',
				text: 'register success'
			})

			/* TEST */
			delay(1000).then(() => {
				actions.setSubmitting(false)
				setMessage(initialMessage)
				// navigate('/')
			})
		} catch (error) {
			setMessage({
				status: 'error',
				text: error.message
			})
		}
	}

	return {
		message,
		registerSchemaProps: {
			initialValues,
			validationSchema,
			onSubmit
		}
	}
}

export default useRegister
