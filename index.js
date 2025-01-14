// use dotenv
import {} from 'dotenv/config'

import app from './app.js'
import db from './config/connection.js'

const PORT = process.env.PORT || 8000

// connect db and start server
db.once('open', () => {
	app.listen(PORT, () => (
		console.log(`connected to app: http://localhost:${PORT}`)
	))
})
