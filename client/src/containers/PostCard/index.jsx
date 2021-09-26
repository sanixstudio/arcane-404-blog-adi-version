import React from 'react'

import PostCard from './_PostCard'

const IMG =
  'https://i.picsum.photos/id/237/500/300.jpg?hmac=31zB7Ceyovr2h1qoOGeI6Pg8iB8wDymSCLEasQlnHIE'

const PostCardContainer = () => {
	return (
		<PostCard>
			<PostCard.Headline>Headline</PostCard.Headline>
			<PostCard.Tagline>Tagline</PostCard.Tagline>
			<PostCard.Topic>Topic</PostCard.Topic>
			<PostCard.Timestamp>Timestamp</PostCard.Timestamp>
			<PostCard.Image src={ IMG } />
		</PostCard>
	)
}

export default PostCardContainer
