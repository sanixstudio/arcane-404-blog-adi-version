import * as yup from 'yup'
import { sleep } from './_helpers'
import {
	AVATAR,
	USERNAME,
	EMAIL,
	PASSWORD,
	PASSWORD_CONFIRM
} from './_authAttributes'

const registerSchemaProps = {
	initialValues: {
		[AVATAR]: '',
		[USERNAME]: '',
		[EMAIL]: '',
		[PASSWORD]: '',
		[PASSWORD_CONFIRM]: ''
	},

	validationSchema: yup.object({
		[EMAIL]: yup.string()
			.required().email(),
		[PASSWORD]: yup.string()
			.required().min(6),
		[PASSWORD_CONFIRM]: yup.string()
			.oneOf([ yup.ref(PASSWORD), null ], `${ PASSWORD } must match`)
	}),

	onSubmit: (values, actions) => {
		// console.log('values',values)
		sleep(500).then(() => {
			window.alert(JSON.stringify(values, null, 2))
			actions.setSubmitting(false)
		})
	}
}

export default registerSchemaProps
