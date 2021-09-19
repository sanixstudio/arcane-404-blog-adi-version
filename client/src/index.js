import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { ChakraContextProvider } from './themes'

render(
	<StrictMode>
		<ChakraContextProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraContextProvider>
	</StrictMode>,
	document.getElementById('root')
)
