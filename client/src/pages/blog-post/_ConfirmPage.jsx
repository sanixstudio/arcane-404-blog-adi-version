import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import PropTypes from 'prop-types'

const ConfirmPage = (props) => {

	const history = useHistory()

	useEffect(() => {
		(async () => {
			try {
				// check if confirmId is not included
				if (!props.match.params.confirmId) {
					history.push('/login')
				}
				// confirm the user
				const confirm = await axios.post('/api/user/confirm', {
					confirmId: props.match.params.confirmId
				})
				//history.push('/login')

			} catch (error) {
				console.log(error.response?.data?.message)
				history.push('/login')
			}

		})()
	}, [ history, props.match.params.confirmId ])

	return (
		<div>
			<h1>Confirm</h1>
			<p>
				Click
				<a href="/login"> here </a>
				to login
			</p>
		</div>
	)

}

// ConfirmPage.propTypes = {
// 	params: {
// 		confirmId: PropTypes.string.isRequired
// 	}
// }

export default ConfirmPage
