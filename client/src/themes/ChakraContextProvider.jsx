import { ChakraProvider } from '@chakra-ui/react'
import customTheme from './customTheme'

const ChakraContextProvider = ({ children }) => {
	return <ChakraProvider resetCSS theme={ customTheme }>{ children }</ChakraProvider>
}

export default ChakraContextProvider
