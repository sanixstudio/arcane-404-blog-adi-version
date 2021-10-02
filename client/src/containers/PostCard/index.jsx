import React from 'react'

import { DownVote, UpVote } from '../../connections'
import PostCard from './_PostCard'

const PostCardContainer = ({ post }) => {

	return (
		<PostCard>

			<PostCard.Link href={ `/blog/${post._id}` }>
				{<PostCard.Image src={ post.imgUrl } /> }

				<PostCard.Headline>{ post.title }</PostCard.Headline>
			</PostCard.Link>

			<PostCard.Topic>{ post.category }</PostCard.Topic>

			{
				post.tags.map(tag => <PostCard.Tags key={ tag }> { tag } </PostCard.Tags> )
			}

			{/* <PostCard.Headline> { post.rating.downVotes || 0 } </PostCard.Headline> */}

			<PostCard.Tagline> { post.tagline } </PostCard.Tagline>

			{/* <PostCard.Timestamp>{ timestamp }</PostCard.Timestamp> */}

		</PostCard>

	)
}

export default PostCardContainer
