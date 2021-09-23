import { useState } from 'react'

const useAuth = () => {
	const [ isAuth, setAuthed ] = useState(false)
	// const [ isAdmin, setAdmin ] = useState(false)

	// , useEffect
	// useEffect(() => { console.log(isAuth)}, [ isAuth ])

	return {
		isAuth,
		login: () => new Promise((resolve) => {
			setAuthed(true)
			resolve()
		}),
		logout: () => new Promise((resolve) => {
			setAuthed(false)
			resolve()
		})
	}
}

export default useAuth
