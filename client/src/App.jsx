import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Headers } from './containers'
import { HomePage, SearchPage } from './pages'

const App = () => {
	return (
		<>
			<Headers />
			<Switch>
				<Route exact path="/" component= { HomePage } /> {/* Home */}
				<Route path="/search" component= { SearchPage } /> {/* Search */}
			</Switch>
		</>
	)
}

export default App
