import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute, ProtectedRoute } from './routes'
import { FooterNavigation, HeaderOption } from './containers'
import {
	HomePage,
	ContentPage,
	PostPage,
	TopicPage,
	LoginPage,
	RegisterPage,
	ErrorPage,
	ConfirmPage
} from './pages'

const App = () => {
	return (
		<>
			<HeaderOption />

			<Switch>
				<Route path="/" exact component={ HomePage } /> {/* Home */}
				<Route path="/blog/content" component={ ContentPage } /> {/* Content */}
				<Route path="/admin/post" component={ PostPage } /> {/* Post */}
				<Route path="/user/topic" component={ TopicPage } /> {/* Topic */}
				<ProtectedRoute path="/confirm/:confirmId" component={ ConfirmPage } /> {/* Confirm */}
				<ProtectedRoute path="/login" element={ LoginPage } /> {/* Login */}
				<ProtectedRoute path="/register" component={ RegisterPage } /> {/* Register */}
				<Route path="*" component={ ErrorPage } /> {/* Error Page */}
			</Switch>

			<FooterNavigation />
		</>
	)
}

export default App
