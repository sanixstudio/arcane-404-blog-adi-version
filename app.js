import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import blogRoutes from './routes/Blog.routes.js'
import voteRoutes from './routes/Vote.routes.js'

const app = express()

// middleware setup
app.use(logger('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// apiRoute
app.use('/api', blogRoutes)
app.use('/api', voteRoutes)

app.get('/', (req, res) => {
	res.send('index page')
})

export default app
