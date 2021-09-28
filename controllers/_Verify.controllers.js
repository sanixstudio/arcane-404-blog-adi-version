
import crypto from 'crypto'


// CONFIRM USER
export const confirmUser = async (req, res) => {

	const confirmToken = req.params ? req.params.confirmId : null
	if (!confirmToken) {
		return res.status(401).json({ message: 'No confirm token provided, cannot verify user!' })
	}

	try {
		const findUser = await Verify.find({ token: confirmToken }).populate('_user')


		console.log(findUser)
	} catch (err) {
		console.log(err.message)
	} finally {
		return res.status(503).json({ message: 'here' })
	}

}

