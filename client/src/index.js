import { StrictMode } from 'react'
import { render } from 'react-dom'
import { ChakraContextProvider } from './themes'
import App from './App'

render(
	<StrictMode>
		<ChakraContextProvider>
			<App />
		</ChakraContextProvider>
	</StrictMode>,
	document.getElementById('root')
)
