import React from 'react'
import {
	PostCardBox,
	PostCardHeadline,
	PostCardImage,
	PostCardTag,
	TagsContainer,
	PostCardTimestamp,
	PostCardTopic,
	PostCardDescription,
	PostCardTagline,
	PostCardLink
} from './_SinglePost.styles'

export default function PostCard ({ children, ...props }) {
	return <PostCardBox { ...props }>{ children }</PostCardBox>
}

PostCard.Headline = function PCHeadline ({ children, ...props }) {
	return <PostCardHeadline { ...props }>{ children }</PostCardHeadline>
}

PostCard.TagsContainer = function PCTags ({ children, ...props }) {
	return <TagsContainer { ...props }>{ children }</TagsContainer>
}

PostCard.Tags = function PCTags ({ children, ...props }) {
	return <PostCardTag { ...props }>{ children }</PostCardTag>
}

PostCard.Topic = function PCTopic ({ children, ...props }) {
	return <PostCardTopic { ...props }>{ children }</PostCardTopic>
}

PostCard.Image = function PCImage ({ children, ...props }) {
	return <PostCardImage { ...props }>{ children }</PostCardImage>
}

// PostCard.Tagline = function PCTagline ({ children, ...props }) {
// 	return <PostCardTimestamp { ...props }>{ children }</PostCardTimestamp>
// }

PostCard.Tagline = function PCTagline ({ children, ...props }) {
	return <PostCardTagline { ...props }>{ children }</PostCardTagline>
}

PostCard.Link = function PCTagline ({ children, ...props }) {
	return <PostCardLink { ...props }>{ children }</PostCardLink>
}

PostCard.Description = function PCDescription ({ children, ...props }) {
	return <PostCardDescription { ...props }>{ children }</PostCardDescription>
}
