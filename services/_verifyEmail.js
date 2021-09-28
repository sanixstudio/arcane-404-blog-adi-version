import nodemailer from 'nodemailer'

const verifyURL = process.env.VERIFY_URL || 'http://10.0.0.21:3000/confirm'

const htmlTEmplate = token => (
	`<!DOCTYPE html>
		<html>
		  <body>
        <h2>
				  Thank you for registering with Arcane-404-Blog!
				</h2>
				<p>
				  Please click <a href="${verifyURL}/${token}" > here </a> to confirm your acoount
				</p>
				<footer>
				  <h5> - Arcane-404-Blog </h5>
				</footer>
		  </body>
	</html>`
)

const sendVerifyEmail = async (userEmail, token) => {
	// create email transport
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		secure: false,
		requireTLS: true,
		auth: {
			user: process.env.DONOT_EMAIL,
			pass: process.env.DONOT_PASS
		}
	})

	const mailOptions = {
		from: process.env.DONOT_EMAIL,
		to: userEmail,
		subject: 'Arcane-404-Blog: Please confirm your account',
		html: htmlTEmplate(token)
	}

	// send email
	transporter.sendMail(mailOptions, (err, info) => {
		if (err) return console.log(err)
		return console.log(info.response)
	})
}

export default sendVerifyEmail
