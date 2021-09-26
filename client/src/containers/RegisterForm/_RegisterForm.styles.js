import {
	chakra,
	Heading,
	Text
} from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'
import { Button } from '../../components'

export const RegisterFormik = chakra(Formik, {})

export const RegisterBox = chakra(Form, {
	baseStyle: {
		m: 2,
		border: '1px',
		rounded: 'md',
		flex: '1 1 auto'
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

export const RegisterText = chakra(Text, {
	baseStyle: {
		mt: 4
	}
})

export const RegisterPath = chakra(Link, {})

