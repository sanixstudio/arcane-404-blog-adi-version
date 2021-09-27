import React from 'react'

import { Main } from '../../components'
import { PostCard } from '../../containers'

const HomePage = () => {
	return (
		<Main>
			<Main.Wrapper>
				{Array(5).fill().map((val, index) => (
					<PostCard key={ index } headline={ 'Molly' } />
				))}
			</Main.Wrapper>
		</Main>
	)
}

export default HomePage
