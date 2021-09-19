import express from 'express'
const router = express.Router()
import BlogModel from '../model/BlogModel.js'

// API route to get all blogs
router.get('/blog', (req, res, next) => {
	BlogModel.find().then((blogs) => {
		res.json(blogs)
	})
})

// Route to post a new blog
router.post('/blog', (req, res, next) => {
	BlogModel.create({
		title: req.body.title,
		body: req.body.body
	}).then((newBlog) => {
		res.json(newBlog)
		// console.log(newBlog)
	}).catch((err) => {
		res.json(err)
	})
})

// Route to update an existing blog
router.put('/blog/:id', (req, res, next) => {
	BlogModel.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (updatedBlog, err) => {
		if (err) {
			res.send(err)
		} else {
			res.json(updatedBlog)
		}
	})
})

// Route to delete a blog
router.delete('/blog/:id', (req, res, next) => {
	BlogModel.findByIdAndDelete({ _id: req.params.id }).then(() => {
		res.send(`deleted ${req.params.id}`)
	}).catch((err) => res.send(err))
})

export default router
