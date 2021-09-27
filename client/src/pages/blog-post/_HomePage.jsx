import React from 'react'

import { Main } from '../../components'
import { PostCard } from '../../containers'

const HomePage = () => {
	return (
		<Main>
			<Main.Wrapper>
				{[ 0,0,0,0,0 ].map((val, index) => {
					console.log(index)
					return <PostCard key={ index } headline={ 'Molly' } />
				})}
			</Main.Wrapper>
		</Main>
	)
}

export default HomePage
