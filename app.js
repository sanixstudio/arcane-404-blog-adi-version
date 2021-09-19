import express from 'express'
import logger from 'morgan'
import cors from 'cors'

import apiRoutes from './routes/apiRoutes.js'

const app = express()

// middleware setup
app.use(logger('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// apiRoute
app.use('/api', apiRoutes)

app.get('/', (req, res) => {
	res.send('index page')
})

export default app
