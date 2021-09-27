import  React, { createContext, useContext } from 'react' // useMemo
import { useAuth } from '../hooks'

const AuthContext = createContext()

const AuthConsumer = async () => {
	try {	return await useContext(AuthContext) }
	catch (error) {	throw new Error(error) }
}

export const AuthProvider = ({ children }) => {
	const auth = useAuth()
	// const value = useMemo(() => ({ auth }), [ auth ])

	return (
		<AuthContext.Provider value={ auth }>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthConsumer
