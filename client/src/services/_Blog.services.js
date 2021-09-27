// import axios from 'axios'

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

	try {
		// const { data } = await axios.put(PATH)
	} catch (error) { throw error }
}

// POST BLOG in Post Page
export const createNewBlogPost = async (body) => {
	const PATH = '/api/blog/create'

	try {
		// const { data } = await axios.post(PATH, body)
	} catch (error) { throw error }
}
