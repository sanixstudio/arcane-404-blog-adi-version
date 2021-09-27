import mongoose from 'mongoose'

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost/blogs'
const mongoOptions = { }

mongoose.connect(MONGO_URI, mongoOptions)
	.then(() => console.log(`connected to db: ${ MONGO_URI }`))
	.catch((err) => {
		console.error(`db connection error: ${ err.message }`)
		process.exit(1)
	})

export default mongoose.connection
