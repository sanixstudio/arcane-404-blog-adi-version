import mongoose from 'mongoose'
const Schema = mongoose.Schema

const BlogSchema = new Schema({
	author: {
		id: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		username: {
			type: String
		}
	},
	title: {
		type: String
	},
	body: {
		type: String
	},
	upvotes: [
		{
			id: {
				type: Schema.Types.ObjectId,
				ref: 'User'
			},
			username: {
				type: String
			}
		}
	],
	downvotes: [
		{
			id: {
				type: Schema.Types.ObjectId,
				ref: 'User'
			},
			username: {
				type: String
			}
		}
	],
	// Add comments: [String?]
	createdOn: { type: Date, default: Date.now }
})

const Blog = mongoose.model('Blog', BlogSchema)

export default Blog
