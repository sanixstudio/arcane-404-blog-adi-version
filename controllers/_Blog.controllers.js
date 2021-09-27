// Modularizing
import Blog from '../model/_Blog.model.js'

export const postOne = async (req, res) => {
	try {
		// console.log(req.body, req.auth)
		const { title, body } = req.body
		const { id, username } = req.auth
		const newBlog = await Blog.create({
			author: {
				id,
				username
			},
			title,
			body
		})
		return res.status(200).json({ blog: newBlog })

	} catch (err) {
		console.log(err.message)
		return res.status(500).json({ error: err.message })
	}
}

// Get all blog posts
export const getAllBlogs = async (req, res) => {
	try {
		// find by "key" ex: "author.username" : "herman " || "title": "New Article"
		const allBlogs = await Blog.find()
		return res.status(200).json({ blogs: allBlogs })

	} catch (err) {
		res.status(500).json({ error: err.message })
	}
}

// Finding blog by id
export const searchBlogs = async (req, res) => {
	try {
		const id = req.params.id
		const foundBlog = await Blog.findById({ _id: id })
		return res.status(200).json({ blog: foundBlog })

	} catch (err) {
		return res.status(500).json({ error: err.message })
	}
}

// Update Blog by Id
export const updateBlogById = async (req, res) => {
	try {
		const id = req.params.id
		const updatedBlog = await Blog.findByIdAndUpdate(
			{ _id: id },
			{
				title: req.body.title,
				body: req.body.body
			},
			{ new: true }
		)
		return res.status(200).json({ blog: updatedBlog })

	} catch (err) {
		return res.status(500).json({ error: err.message })
	}
}

// Delete Blog by Id
export const deleteBlogById = async (req, res) => {
	try {
		const id = req.params.id
		const deleteBlog = await Blog.findOneAndDelete({ _id: id })
		return res.status(200).json({ message: 'successfully deleted!', blog: deleteBlog })

	} catch (err) {
		return res.status(500).json({ error: err.message })
	}
}

