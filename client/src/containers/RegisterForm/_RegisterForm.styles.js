import { chakra, Heading } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { Button } from '../../components'

export const RegisterFormik = chakra(Formik, {})

export const RegisterBox = chakra(Form, {
	baseStyle: {
		m: 2,
		border: '1px',
		rounded: 'md'
	}
})

export const RegisterHeading = chakra(Heading, {
	baseStyle: {
	  my: '1em'
	}
})

export const RegisterSubmit = chakra(Button, {
	baseStyle: {
		mt: 4,
	  bg: 'teal.300',
	  _hover: { bg: 'teal.400' },
	  _active: { bg: 'teal.600' }
	}
})
