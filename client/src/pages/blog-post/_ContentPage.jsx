import React, { useContext } from 'react'
import { SinglePost } from '../../containers'
import Loader from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import { Wrapper } from '../../components'

import { PostContext } from '../../context/_PostContext'


const ContentPage = () => {
	const {  data, isLoading, isError, error } = useContext(PostContext)

	let postId = useParams()
	postId = postId['postId']

	function getLoading () {
		return <Loader type="ThreeDots" color="#aaa" width="100" />
	}

	if (isLoading) return (
		<Wrapper>
			<Loader type="ThreeDots" color="#aaa" width="100"></Loader>
		</Wrapper>
	)

	if (isError) return <div> Error... </div>

	if (data) {
		const thePost = data.find(p => p._id === postId)
		return (
			<Wrapper>
				<SinglePost post={ thePost } />
			</Wrapper>
		)
	}
}

export default ContentPage
