import {
	Box, chakra, Heading, Image, Tag, Text, Link
} from '@chakra-ui/react'

export const PostCardBox = chakra(Box, {
	baseStyle: {
		minW: '100%',
		marginBottom: '8',
		p: '4',
		boxShadow: '0 0 2em #ccc'
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

export const PostCardLink = chakra(Link, {})
export const PostCardHeadline = chakra(Heading, {})
export const PostCardImage = chakra(Image, {
	baseStyle: {
		minW: '100%',
		maxH: '200px',
		objectFit: 'cover',
		transition: 'ease .3s',
		_hover: {
			// filter: 'sepia(40)'

		}
	}
})
export const PostCardTimestamp = chakra(Text, {})
export const PostCardTagline = chakra(Text, {})
