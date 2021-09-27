import React from 'react'

import { Main } from '../../components'
import { PostCard } from '../../containers'

const IMG =
  'https://i.picsum.photos/id/237/500/300.jpg?hmac=31zB7Ceyovr2h1qoOGeI6Pg8iB8wDymSCLEasQlnHIE'

const HomePage = () => {
	return (
		<Main>
			<Main.Wrapper>
				{Array(5).fill().map((val, index) => (
					<PostCard 
						key={ index } 
						headline={ 'Molly' } 
						tagline={ 'movie' } 
						topic={ 'In 4KHD!' } 
						timestamp={ 'Oct 1, 2021 PST 10:30PM' }
						image={ IMG }
					/>
				))}
			</Main.Wrapper>
		</Main>
	)
}

export default HomePage
