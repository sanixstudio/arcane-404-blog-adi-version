import React from 'react'
import {
	PostCardBox,
	PostCardHeadline,
	PostCardImage,
	PostCardTagline,
	PostCardTimestamp,
	PostCardTopic
} from './_PostCard.styles'

export default function PostCard ({ children, ...props }) {
	return <PostCardBox { ...props }>{ children }</PostCardBox>
}

PostCard.Headline = function PCHeadline ({ children, ...props }) {
	return <PostCardHeadline { ...props }>{ children }</PostCardHeadline>
}

PostCard.Tagline = function PCTagline ({ children, ...props }) {
	return <PostCardTagline { ...props }>{ children }</PostCardTagline>
}

PostCard.Topic = function PCTopic ({ children, ...props }) {
	return <PostCardTopic { ...props }>{ children }</PostCardTopic>
}

PostCard.Image = function PCImage ({ children, ...props }) {
	return <PostCardImage { ...props }>{ children }</PostCardImage>
}

PostCard.Timestamp = function PCTimestamp ({ children, ...props }) {
	return <PostCardTimestamp { ...props }>{ children }</PostCardTimestamp>
}
