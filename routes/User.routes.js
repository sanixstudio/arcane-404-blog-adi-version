import express from 'express'

import { UserControllers } from '../controllers/index.js'

const {
	register,
	loginJWT,
	validateToken
} = UserControllers

const userRouter = express.Router()

userRouter
	.post('/register', register)
	.post('/login', loginJWT)
	.post('/validateToken', validateToken)


export default userRouter
