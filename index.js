import express from 'express'
import mongoose from 'mongoose'
import apiRoutes from './routes/apiRoutes.js'
const app = express()
const PORT = process.env.PORT || 8000
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost/blogs'

// Mongo DB/mongoose connection
const connection = () => {
	mongoose.connect(MONGO_URI, () => {
		console.log('connected to db!')
	})
}
connection()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// apiRoute
app.use('/api', apiRoutes)

app.listen(PORT, () => {
	console.log(`connected to http://localhost:${PORT}`)
})
