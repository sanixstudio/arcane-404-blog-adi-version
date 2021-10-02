import {
	Box, Stack, chakra, Heading, Image, Tag, Text, Link
} from '@chakra-ui/react'

export const PostCardBox = chakra(Stack, {
	baseStyle: {
		w: '100%',
		p: '4',
		gap: '1em'
	}
})

export const PostCardTag = chakra(Tag, {
	baseStyle: {
		mr: '1'
	}
})

export const PostCardTopic = chakra(Text, {
	baseStyle: {
		fontSize: '1.2em',
		fontWeight: '500'
	}
})

export const PostCardImage = chakra(Image, {
	baseStyle: {
		w: '100%',
		maxH: '300px',
		objectFit: 'cover'
	}
})

export const PostCardTagline = chakra(Text, {
	baseStyle: {
		fontWeight: '500',
		textTransform: 'uppercase'
	}
})

export const TagsContainer = chakra(Box, {})
export const PostCardLink = chakra(Link, {})
export const PostCardHeadline = chakra(Heading, {})
export const PostCardTimestamp = chakra(Text, {})
export const PostCardDescription = chakra(Text, {})
