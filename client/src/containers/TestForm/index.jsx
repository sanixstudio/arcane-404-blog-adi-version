import React from 'react'
import { useLogin } from '../../hooks'
import { Form } from '../../components'
import { Alert, FormControls } from '../../connections'
const { TextField } = FormControls

function TestForm () {

	const { message, loginSchemaProps } = useLogin()

	return (
		<Form { ...loginSchemaProps }>
			{(props) => (
				<Form.Form>
					<Form.Heading>The From is Real</Form.Heading>

					<TextField name="email" label="Email" placeholder="Enter email here" />

					<Alert status={ message.status } text={ message.text } />

					<Form.Submit>Submit</Form.Submit>
				</Form.Form>
			)}
		</Form>
	)
}

export default TestForm
