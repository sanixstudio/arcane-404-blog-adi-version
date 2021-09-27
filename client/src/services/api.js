import * as Blog from './_Blog.services'
import * as User from './_User.services'

export const api = {
	...Blog,
	...User
}
