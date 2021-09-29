import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { AuthConsumer } from '../context'
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
	const history = useHistory()
	const navigate = (path) => history.push(path)

	// allow user to authenticate
	const { login } = AuthConsumer()

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

		try {
			// post - '/blog/register' - body
			const { data } = await api.registerUser(body)

			setMessage({
				status: data.status || 'success',
				text: 'register success'
			})

			delay(1500).then(() => {
				actions.setSubmitting(false)
				setMessage(initialMessage)
				navigate('/login')
				//login(data).then(() => navigate('/login'))
			})
		} catch (error) {
			console.log('useRegister', error)
			setMessage({
				status: 'error',
				text: error.message || 'unknownerror'
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
