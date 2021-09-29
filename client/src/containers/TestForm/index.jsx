import React from 'react'
import { usePost } from '../../hooks'
import { Form } from '../../components'
import { Alert, FormControls } from '../../connections'
const { TextField, TextAreaField } = FormControls

function TestForm () {

	const { message, loginSchemaProps } = usePost()

	return (
		<Form { ...loginSchemaProps }>
			{(props) => (
				<Form.Form>
					<Form.Heading>The From is Real</Form.Heading>

					<TextField name="title" label="Title" placeholder="Enter title here" />

					<TextAreaField name="description" label="Description" placeholder="Enter your post description" />

					{/*<Alert status={ message.status } text={ message.text } />*/}

					<Form.Submit>Submit</Form.Submit>
				</Form.Form>
			)}
		</Form>
	)
}

export default TestForm
