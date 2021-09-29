import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'

// const initialMessage = {
// 	status: true,
// 	text: 'Yay...'
// }

const usePost = () => {
	// Initial Values
	const initialValues = {
		title: '',
		description: ''
	}
	// Form Validation
	const validationSchema = yup.object({
		title: yup.string().required().min(3),
		description: yup.string().required().min(10)
	})

	// Form Submission
	const onSubmit = async (values, actions) => {
		console.log(values)
	}

	return {
		loginSchemaProps: {
			initialValues,
			validationSchema,
			onSubmit
		}
	}
}

export default usePost
