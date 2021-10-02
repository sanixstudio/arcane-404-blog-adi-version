import React, { useContext } from 'react'
import { Main, Wrapper } from '../../components'
import { PostCard } from '../../containers'
import Loader from 'react-loader-spinner'

import { PostContext } from '../../context/_PostContext'

const HomePage = () => {
	const { data, isLoading, isError, error } = useContext(PostContext)
	console.log(data)

	if (isLoading)
		return (
			<Wrapper>
				<Loader type="ThreeDots" color="#aaa" width="100"></Loader>
			</Wrapper>
		)

	if (isError) return <Wrapper>{ 'Error...' }</Wrapper>

	return (
		<Main>
			<Main.Wrapper>
				{
					data.map((post) => <PostCard key={ post._id } post={ post } />)
				}
			</Main.Wrapper>
		</Main>
	)

}

export default HomePage
