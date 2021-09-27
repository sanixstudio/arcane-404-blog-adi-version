import React from 'react'

import PostCard from './_PostCard'

const PostCardContainer = ({ headline, tagline, topic, timestamp, image }) => {
	return (
		<PostCard>
			<PostCard.Headline>{ headline }</PostCard.Headline>

			<PostCard.Tagline>{ tagline }</PostCard.Tagline>

			<PostCard.Topic>{ topic }</PostCard.Topic>

			<PostCard.Timestamp>{ timestamp }</PostCard.Timestamp>
			
			<PostCard.Image src={ image } /> 
		</PostCard>
	)
}

export default PostCardContainer
