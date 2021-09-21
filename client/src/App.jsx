import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { HeaderOption, FooterNavigation } from './containers'
import {
	LoginPage,
	RegisterPage,
	HomePage,
	PostPage,
	ContentPage,
	SearchPage
} from './pages'

const App = () => {
	return (
		<>
			<HeaderOption />
			<Switch>
				<Route exact path="/" component= { HomePage } /> {/* Home */}
				<Route path="/search" component= { SearchPage } /> {/* Search */}
				<Route path="/submit" component= { PostPage } /> {/* Post */}
				<Route path="/content" component= { ContentPage } /> {/* Content */}
				<Route path="/login" component= { LoginPage } /> {/* Login */}
				<Route path="/register" component= { RegisterPage } /> {/* Register */}
			</Switch>
			<FooterNavigation />
		</>
	)
}

export default App
