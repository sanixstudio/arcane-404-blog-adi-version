import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { authAttributes } from '../json'
import { delay } from '../utils/_helpers'
import { api } from '../services/api'

const { EMAIL, PASSWORD } = authAttributes

const initialMessage = {
	status: undefined,
	text: undefined
}

const useLogin = () => {

	// hook to redirect route
	const navigate = useNavigate()

	// include alert message for error or success
	const [ message, setMessage ] = useState(initialMessage)

	// Formik prop: initial state values
	const initialValues = {
		[EMAIL]: '',
		[PASSWORD]: ''
	}

	// Formik prop: to check validation on values
	const validationSchema = yup.object({
		[EMAIL]: yup.string().required().email(),
		[PASSWORD]: yup.string().required()
	})

	// Formik prop: to check verification & handle submit
	const onSubmit = async (values, actions) => {
		try {
			// const response = await axios.post('/login', values)
			const response = await api.loginUser(values)
			console.log(response)

			setMessage({
				status: 'success',
				text: 'login success'
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
		loginSchemaProps: {
			initialValues,
			validationSchema,
			onSubmit
		}
	}
}

export default useLogin
