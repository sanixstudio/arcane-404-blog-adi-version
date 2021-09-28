import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'

import { User, Verify } from '../model/index.js'

import sendVerifyEmail from '../services/_verifyEmail.js'


const tokenOptions = {
	expiresIn: '2h'
}

// find exiting user from email
const findExistingEmail = async (email) => {
	try {
		// check if user exists
		const existingUser = await User.findOne({ email: email.toLowerCase() })
		if (existingUser) {
			return {
				status: 409,
				message: 'User exists. Please create a new user!'
			}
		} else {
			return null
		}
	} catch (err) {
		return {
			status: 500,
			message: err.message
		}
	}
}

// function for creating error message object
const createErrorMsg = (message = 'error message') => ({ message })

// function for creating user object
const createUserObj = (user) => {
	if (!user) {
		return {}
	}
	return {
		username: user.username,
		email: user.email,
		avatar: user.avatar,
		role: user.role,
		isVerified: user.isVerified
	}
}


// REGISTER function
export const register = async (req, res) => {

	try {
		// getting username, email, password info from frontend
		const { username, email, password } = req.body

		// check if email and/or password is supplied from user
		if ( !email || !password || email.trim() === '' || password.trim() === '') {
			return res.status(400).json(createErrorMsg('email and password are required'))
		}

		// check if user exists or there is an error
		const checkUser = await findExistingEmail(email)
		if (checkUser) {
			return res.status(checkUser.status).json(createErrorMsg(checkUser.message))
		}

		// encrypt user password
		const hashedPWD = await bcrypt.hash(password, 10)

		// save to db
		const newUser = new User({
			username,
			email: email.toLowerCase(),
			password: hashedPWD
		})

		const confirmToken = new Verify({
			_user: newUser._id,
			token: crypto.randomBytes(16).toString('hex')
		})

		// send email
		sendVerifyEmail(newUser.email, confirmToken.token)

		// saved token and user
		await confirmToken.save()
		await newUser.save()

		return res.json({ data: 'User registered succesfully! Please check email for confirmation' })

	} catch (err) {
		console.log(err.message)
		return res.status(500).json(createErrorMsg(err.message))
	}
}


// LOGIN function
export const loginJWT = async (req, res) => {
	try {
		// getting username, email, password info from frontend
		const { email, password } = req.body

		// check if email and/or password is supplied from user
		if (!email || !password || email.trim() === '' || password.trim() === '') {
			return res.status(400).json(createErrorMsg('email and password are required'))
		}

		// find user based on email
		const user = await User.findOne({ email: email.toLowerCase() })

		// if user does not exist or password is not correct
		if (!(user && (await bcrypt.compare(password, user.password)))) {
			return res.status(400).json(createErrorMsg('invalid credential'))
		}

		if (!user.isVerified) {
			return res.status(401).json(createErrorMsg('please verify your account'))
		}

		// user object
		const userObj = createUserObj(user)

		// create token
		const tokenObj = {
			id: user._id,
			user: userObj
		}

		const token = jwt.sign(tokenObj, process.env.JWT_SECRET, tokenOptions)

		return res.status(200).json({
			token, user: userObj
		})

	} catch (err) {
		console.log(err.message)
		return res.status(500).json(createErrorMsg(err.message))
	}
}


// CONFIRM USER
export const confirmUser = async (req, res) => {

	const confirmToken = req.body ? req.body.confirmId : null
	if (!confirmToken) {
		return res.status(401).json({ message: 'No confirm token provided, cannot verify user!' })
	}

	try {
		// find confirmation token
		const findUser = await Verify.findOne({
			token: confirmToken
		},{
			_id: 0
		}).populate({
			path: '_user',
			select: 'isVerified'
		})

		// if cannot find user
		if (!findUser) return res.status(401).json({ message: 'invalid token' })

		// if user is verified before
		if (findUser._user.isVerified) {
			return res.json({ data: 'account confirmed!' })
		}

		// find the user by id and update verification status
		const confirmedUser = await User.findById(findUser._user._id)
		confirmedUser.isVerified = true
		await confirmedUser.save()

		return res.json({ data: 'account confirmed!' })

	} catch (err) {
		console.log(err.message)
		return res.status(500).json({ message: err.message })
	}
}


// VALIDATE_TOKEN function
export const validateToken = async (req, res) => {

	// get token from header
	const token = req.header('x-auth-token')
	if (!token) return res.status(401).json(createErrorMsg('missing auth header'))

	try {
		const verified = jwt.verify(token, process.env.JWT_SECRET)
		if (!verified) return res.status(401).json(createErrorMsg(''))

		// find if user exists
		const verifiedUser = await User.findById(verified.id)
		if (!verifiedUser) return res.status(401).json(createErrorMsg('cannot find user'))

		return res.json(createUserObj(verifiedUser))

	} catch (err) {
		res.status(500).json(createErrorMsg(err.message))
	}

}
