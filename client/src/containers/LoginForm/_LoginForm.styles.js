// import styled from '@emotion/styled'
import {
	chakra,
	Heading,
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
	Button
} from '@chakra-ui/react'

// export const LoginForm = styled.form``
export const LoginForm = chakra('form', {
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

export const LoginControl = chakra(FormControl, {
	baseStyle: {}
})

export const LoginLabel = chakra(FormLabel, {
	baseStyle: {}
})

export const LoginInput = chakra(Input, {
	baseStyle: {}
})

export const LoginError = chakra(FormErrorMessage, {
	baseStyle: {}
})

export const LoginSubmit = chakra(Button, {
	baseStyle: {
		mt: 4,
	  bg: 'teal.300',
	  _hover: { bg: 'teal.400' },
	  _active: { bg: 'teal.600' }
	}
})
