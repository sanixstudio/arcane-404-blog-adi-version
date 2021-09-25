import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import path from 'path'

// EDIT: we can make it into a single import
import userRoutes from './routes/User.routes.js'
import blogRoutes from './routes/Blog.routes.js'
import voteRoutes from './routes/Vote.routes.js'

import auth from './middlewares/auth.js'
import authAdmin from './middlewares/auth_admin.js'

const app = express()

// middleware setup
app.use(logger('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// EDIT: figure out path setup
app.use('/api/users', userRoutes)
app.use('/api', blogRoutes)
app.use('/api', voteRoutes)


// serve React static build if in production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

export default app
