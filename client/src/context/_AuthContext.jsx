import  React, { createContext, useContext } from 'react'
import { useAuth } from '../hooks'

const AuthContext = createContext()

const AuthConsumer = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
	const auth = useAuth()

	return (
		<AuthContext.Provider value={ auth }>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthConsumer
