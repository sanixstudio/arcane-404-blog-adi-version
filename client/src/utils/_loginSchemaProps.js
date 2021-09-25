import * as yup from 'yup'
import { sleep } from './_helpers'
import { EMAIL, PASSWORD } from './_authAttributes'

const loginSchemaProps = {
	initialValues: {
		[EMAIL]: '',
		[PASSWORD]: ''
	},

	validationSchema: yup.object({
		[EMAIL]: yup.string().required().email()
	}),

	onSubmit: (values, actions) => {
		// console.log('values',values)
		// API POST route + req.body
		// check
		// if (not valid user) then add error handling
		// if (password is incorrect) then add error handling
		// if (both are correct) then navigate to `/`
		sleep(500).then(() => {
			window.alert(JSON.stringify(values, null, 2))
			actions.setSubmitting(false)
		})
	}
}

export default loginSchemaProps
