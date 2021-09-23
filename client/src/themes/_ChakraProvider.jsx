import { ChakraProvider as ChakraContextProvider } from '@chakra-ui/react'
import customTheme from './_customTheme'

const ChakraProvider = ({ children }) => {
	return (
		<ChakraContextProvider resetCSS theme={ customTheme }>
			{ children }
		</ChakraContextProvider>
	)
}

export default ChakraProvider
