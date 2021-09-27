import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import path from 'path'

import { blogRoutes, userRoutes } from './routes/index.js'
// import { authJWT, authJWTAdmin } from './middlewares/index.js'


const app = express()

// middleware setup
app.use(logger('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes setup
app.use('/api/user', userRoutes)
app.use('/api/blog', blogRoutes)

// serve React static build if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

export default app
