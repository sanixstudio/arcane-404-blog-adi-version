import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Headers } from './containers'
import {
	ContentPage, HomePage, LoginPage, PostPage, RegisterPage, SearchPage 
} from './pages'

const App = () => {
	return (
		<>
			<Headers />
			<Switch>
				<Route exact path="/" component= { HomePage } /> {/* Home */}
				<Route path="/search" component= { SearchPage } /> {/* Search */}
				<Route path="/submit" component= { PostPage } /> {/* Post */}
				<Route path="/content" component= { ContentPage } /> {/* Content */}
				<Route path="/login" component= { LoginPage } /> {/* Login */}
				<Route path="/register" component= { RegisterPage } /> {/* Register */}
			</Switch>
		</>
	)
}

export default App
