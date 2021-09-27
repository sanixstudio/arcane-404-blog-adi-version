import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { FooterNavigation, HeaderOption } from './containers'
import {
	ContentPage, ErrorPage, HomePage, LoginPage, PostPage, RegisterPage, TopicPage 
} from './pages'
import { PrivateRoute, ProtectedRoute } from './routes'

const App = () => {
	return (
		<>
			<HeaderOption />

			<Switch>
				<Route path="/" exact component={ HomePage } /> {/* Home */}
				<Route path="/blog/content" component={ ContentPage } /> {/* Content */}
				<Route path="/admin/post" component={ PostPage } /> {/* Post */}
				<Route path="/user/topic" component={ TopicPage } /> {/* Topic */}
				<Route path="*" component={ ErrorPage } /> {/* Error Page */}
				<ProtectedRoute path="/login" element={ LoginPage } /> {/* Login */}
				<ProtectedRoute path="/register" component={ RegisterPage } /> {/* Register */}
			</Switch>

			<FooterNavigation />
		</>
	)
}

export default App
