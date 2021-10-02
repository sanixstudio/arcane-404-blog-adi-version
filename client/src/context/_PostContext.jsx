import { useQuery } from 'react-query'

import {
	createContext,
	useEffect,
	useState
} from 'react'

const POST_URL = 'https://arcane404.prestoapi.com/api/posts'

const getPosts = async () => {
	const res = await (await fetch(POST_URL)).json()
	return res
}

export const PostContext = createContext()

const PostContextProvider = ({ children }) => {
	const { data, isLoading, isError, error } = useQuery(
		'posts', getPosts
	)

	return (
		<PostContext.Provider value = {{ data, isLoading, isError, error }}> { children } </PostContext.Provider>
	)
}

export default PostContextProvider
