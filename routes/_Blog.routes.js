import express from 'express'
import { BlogControllers } from '../controllers/index.js'
import { authJWT } from '../middlewares/index.js'

const blogRouter = express.Router()

blogRouter
	.post('/create', authJWT, BlogControllers.postOne)
	.get('/all', BlogControllers.getAllBlogs)
	.get('/:id', BlogControllers.searchBlogs)
	.put('/:id', BlogControllers.updateBlogById)

	// Remove these before production
	.delete('/delete', BlogControllers.deleteAllBlogs)
	.delete('/:id', BlogControllers.deleteBlogById)

	// single route for upvote + downvote
	.put('/:id/upvote', authJWT, BlogControllers.upvoteBlog)
	.put('/:id/downvote', authJWT, BlogControllers.downvoteBlog)
	// req.query up v down

export default blogRouter
