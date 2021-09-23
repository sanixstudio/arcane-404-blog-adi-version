import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from './themes'
import { AuthProvider } from './context/provider'

import App from './App'

render(
	<StrictMode>
		<ChakraProvider>
			<AuthProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AuthProvider>
		</ChakraProvider>
	</StrictMode>,
	document.getElementById('root')
)
