import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../../hooks/'

const ResendPage = () => {

	const history = useHistory()

	const { isAuth, email, resetEmail } = useAuth()

	const handleResend = async () => {
		try {
			const resendUser = await axios.post('/api/user/resendConfirm', { email })
			console.log(resendUser)

			history.push('/login')
		} catch (err) {
			console.log(err.response)
			history.push('/login')
		}
	}

	useEffect(() => {
		(async () => {
			console.log(isAuth, email)
			if (isAuth) {

				//history.push('/')
			} else if (!isAuth && !email) {
				//resetUser()
				//history.push('/login')
			}

			return () => {
				console.log('return')
				//resetUser()
			}
		})()
	}, [ history, isAuth, email ])

	return (
		<>
			<h2>
				Thanks for registering at Aracan-404-Blog!
			</h2>
			<p>
				Looks like upi have not verified your email yet.
				<a href="/login">
					Click here to login again
				</a>
				or
				<button onClick={ handleResend }>
					Click here to resend email verfication
				</button>
			</p>
		</>
	)
}

export default ResendPage
