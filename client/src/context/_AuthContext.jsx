import  React, {
	createContext, useContext, useEffect, useMemo
} from 'react'
import { useAuth } from '../hooks'

const AuthContext = createContext(null)

const AuthConsumer = () => useContext(AuthContext)
// const AuthConsumer = async () => await useContext(AuthContext)
// const AuthConsumer = async () => {
// 	try {	return await useContext(AuthContext) }
// 	catch (error) {	throw new Error(error) }
// }

export const AuthProvider = ({ children }) => {
	// const value = useAuth()
	const { isAuth, user, email, login, loginNotVerified, resetEmail, logout } = useAuth()
	const value = useMemo(() => (
		{ isAuth, user, email, login, loginNotVerified, resetEmail, logout }
	), [ isAuth, user, email, login, loginNotVerified, resetEmail, logout ])

	return (
		<AuthContext.Provider value={ value }>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthConsumer
