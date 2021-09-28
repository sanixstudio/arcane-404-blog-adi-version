import express from 'express'

import { UserControllers } from '../controllers/index.js'

const {
	register,
	loginJWT,
	confirmUser,
	validateToken
} = UserControllers

const userRouter = express.Router()

userRouter
	.post('/register', register)
	.post('/login', loginJWT)
	.post('/confirm', confirmUser)
	.post('/validateToken', validateToken)


export default userRouter
