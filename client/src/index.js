import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from './themes'
import { AuthProvider } from './context/provider'

import App from './App'
import PostContextProvider from './context/_PostContext'
import QueryProvider from './context/_QueryClient'

render(
	<StrictMode>
		<ChakraProvider>
			<AuthProvider>
				<QueryProvider>
					<PostContextProvider>
						<BrowserRouter>
							<App />
						</BrowserRouter>
					</PostContextProvider>
				</QueryProvider>
			</AuthProvider>
		</ChakraProvider>
	</StrictMode>,
	document.getElementById('root')
)
