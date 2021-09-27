import  React, {
	createContext, useContext, useMemo
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
	// const auth = useAuth()
	const { isAuth, user, login, logout	} = useAuth()
	const value = useMemo(() => (
		{ isAuth, user, login, logout }
	), [ isAuth, user, login, logout ])

	return (
		<AuthContext.Provider value={ value }>
			{ children }
		</AuthContext.Provider>
	)
}

export default AuthConsumer
