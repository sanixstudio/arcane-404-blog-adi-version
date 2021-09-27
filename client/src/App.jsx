import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute, ProtectedRoute } from './routes'
import { FooterNavigation, HeaderOption } from './containers'
import {
	LoginPage,
	RegisterPage,
	HomePage,
	PostPage,
	TopicPage,
	ContentPage
} from './pages'

const App = () => {
	return (
		<>
			<HeaderOption />

			<Switch>
				<Route path="/" exact component={ HomePage } /> {/* Home */}
				<Route path="/admin/post" component={ PostPage } /> {/* Post */}
				<Route path="/user/topic" component={ TopicPage } /> {/* Topic */}
				<Route path="/user/content" component={ ContentPage } /> {/* Content */}
				<ProtectedRoute path="/login" element={ LoginPage } /> {/* Login */}
				<ProtectedRoute path="/register" component={ RegisterPage } /> {/* Register */}
			</Switch>

			<FooterNavigation />
		</>
	)
}

export default App
