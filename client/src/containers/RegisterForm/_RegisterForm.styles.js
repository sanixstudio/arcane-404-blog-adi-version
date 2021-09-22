import {
	chakra,
	Heading,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button
} from '@chakra-ui/react'

export const RegisterForm = chakra('form', {
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

export const RegisterControl = chakra(FormControl, {
	baseStyle: {}
})

export const RegisterLabel = chakra(FormLabel, {
	baseStyle: {}
})

export const RegisterInput = chakra(Input, {
	baseStyle: {}
})

export const RegisterError = chakra(FormErrorMessage, {
	baseStyle: {}
})

export const RegisterSubmit = chakra(Button, {
	baseStyle: {
		mt: 4,
	  bg: 'teal.300',
	  _hover: { bg: 'teal.400' },
	  _active: { bg: 'teal.600' }
	}
})
