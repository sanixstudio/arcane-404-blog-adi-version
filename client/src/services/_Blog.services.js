import axios from 'axios'

// GET BLOG for Home Page
export const getAllBlogPost = async () => {
	const PATH = '/api/blog/all'

	try {
		// const { data } = await axios.get(PATH)
	} catch (error) { throw error }
}

// GET BLOG for Content
export const getOneBlogPost = async (id) => {
	const PATH = `/api/blog/${ id }`

	try {
		// const { data } = await axios.get(PATH)
	} catch (error) { throw error }
}

// PUT BLOG in Home Page
export const voteOneBlogPost = async (id, vote) => {
	const PATH = `/api/blog/${ id }/vote`
	// const PATH = `/api/blog/${ id }?vote={vote}` // up || down

	try {
		// const { data } = await axios.put(PATH)
	} catch (error) { throw error }
}

// POST BLOG in Post Page
export const createNewBlogPost = async (body) => {
	const PATH = '/api/blog/create'
	const newPath = 'https://arcane404.prestoapi.com/api/posts'

	try {
		const { data } = await axios.post(newPath, body)
		data.status = 'success'
		return { data }
	} catch (error) { throw error }
}
