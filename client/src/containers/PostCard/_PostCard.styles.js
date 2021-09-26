import {
	Box, chakra, Heading, Image, Tag, Text 
} from '@chakra-ui/react'

export const PostCardBox = chakra(Box, {
	baseStyle: {
		m: 10,
		border: '1px'
	}
})
export const PostCardHeadline = chakra(Heading, {})
export const PostCardTagline = chakra(Tag, {})
export const PostCardTopic = chakra(Text, {})
export const PostCardImage = chakra(Image, {})
export const PostCardTimestamp = chakra(Text, {})
