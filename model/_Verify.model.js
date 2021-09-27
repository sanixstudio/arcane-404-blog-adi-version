import mongoose from 'mongoose'

const { Schema, model } = mongoose

const VerifySchema = new Schema({
	_user: {
		type: Schema.Types.ObjectId,
		required: true
	},
	token: {
		type: String,
		required: true
	},
	expireAt: {
		type: Date
	}
})

export default model('Verify', VerifySchema)
