import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as yup from 'yup'
import { api } from '../services/api'

const initialMessage = {
	status: undefined,
	text: undefined
}

const DELAY_POST = 1000

const categoryValues = [ 'Front-End', 'Back-End', 'React-Only', 'CSS' ]

const usePost = () => {
	const [ message, setMessage ] = useState(initialMessage)

	// hook to redirect route
	const history = useHistory()
	const navigate = (path) => history.push(path)

	// Initial Values
	const initialValues = {
		imgUrl: '',
		title: '',
		tagline: '',
		description: '',
		category: '',
		tags: ''
	}

	const noSpaceAllowed = /^\S*$/

	// Form Validation
	const validationSchema = yup.object({
		imgUrl: yup.string().required()
			.test('noWhiteSpace', 'No space allowed', (str) =>  { return noSpaceAllowed.test(str) } ),
		title: yup.string().required().min(5).max(64),
		tagline: yup.string().required().min(5).max(128),
		description: yup.string().required().min(128).max(1600),
		category: yup.string().oneOf(categoryValues).required(),
		tags: yup.string().required('Enter at least one tag')
	})

	// Form Submission
	const onSubmit = async (values, actions) => {
		values.imgUrl = values.imgUrl.trim()
		values.title = values.title.trim()
		values.tagline = values.tagline.trim()
		values.description = values.description.trim()
		values.category = values.category.trim()
		values.tags = values.tags.trim()
		values.tags = values.tags.split(',')
		values.upVotes = 0
		values.downVotes = 0
		values.dataPosted = Date.now()
		console.log(values)

		try {
			await api.createNewBlogPost(values)
			actions.setSubmitting(false)
			setMessage(initialMessage)
			navigate('/')
		} catch (error) {
			setMessage({
				status: 'error',
				text: error.message
			})
		}
	}

	return {
		message,
		postSchemaProps: {
			initialValues,
			validationSchema,
			onSubmit
		}
	}
}

export default usePost
