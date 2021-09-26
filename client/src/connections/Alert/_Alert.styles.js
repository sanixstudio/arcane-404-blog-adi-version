import {
	chakra,
	Alert,
	AlertIcon,
	AlertDescription
} from '@chakra-ui/react'

export const AlertBox = chakra(Alert, {
	baseStyle: {
		mt: 4
	}
})

export const AlertBoxIcon = chakra(AlertIcon, {})
export const AlertBoxText = chakra(AlertDescription, {})
