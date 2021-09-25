import { chakra, Heading } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { Button } from '../../components'

export const LoginFormik = chakra(Formik, {})

export const LoginBox = chakra(Form, {
	baseStyle: {
		m: 2,
		border: '1px',
		rounded: 'md'
	}
})

export const LoginHeading = chakra(Heading, {
	baseStyle: {
	  my: '1em'
	}
})

export const LoginSubmit = chakra(Button, {
	baseStyle: {
		mt: 4,
	  bg: 'teal.300',
	  _hover: { bg: 'teal.400' },
	  _active: { bg: 'teal.600' }
	}
})
