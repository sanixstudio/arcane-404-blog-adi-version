import React from 'react'
import PostCard from './_SinglePost'

const SinglePostContainer = ({ post }) => {
	return (
		<PostCard>

			<PostCard.Image src={ post.imgUrl } />

			<PostCard.Headline>{ post.title }</PostCard.Headline>

			<PostCard.Topic>{ post.category }</PostCard.Topic>

			<PostCard.TagsContainer>
				{
					post.tags.map(tag => <PostCard.Tags key={ tag }> { tag } </PostCard.Tags> )
				}
			</PostCard.TagsContainer>

			{/* <PostCard.Headline> { post.rating.downVotes || 0 } </PostCard.Headline> */}

			<PostCard.Tagline> { post.tagline } </PostCard.Tagline>

			<PostCard.Description> { post.description } </PostCard.Description>

			{/* <PostCard.Timestamp>{ timestamp }</PostCard.Timestamp> */}

		</PostCard>

	)
}

export default SinglePostContainer
