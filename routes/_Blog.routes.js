import express from 'express'
import { BlogControllers } from '../controllers/index.js'
const blogRouter = express.Router()
// API route to get all blogs
blogRouter
	.get('/blog', BlogControllers.findAll)
	.post('/blog', BlogControllers.postOne)

export default blogRouter
