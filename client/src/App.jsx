import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './routes'
import { HeaderOption, FooterNavigation } from './containers'
import {
	LoginPage,
	RegisterPage,
	HomePage,
	PostPage,
	TopicPage,
	ContentPage
	// SearchPage
} from './pages'

// import { AuthConsumer } from './context'
// const { isAuth } = AuthConsumer()
// if (!isAuth) return null

const App = () => {
	return (
		<>
			<HeaderOption />
			<Routes>
				<Route path="/" element={ <HomePage /> } /> {/* Home */}
				{/* <Route path="/search" element={ <SearchPage /> } /> Search */}
				<Route path="/admin/post" element={ <PostPage /> } /> {/* Post */}
				<Route path="/user/">
					<Route path="topic" element={ <TopicPage /> } /> {/* Topic */}
					<Route path="content" element={ <ContentPage /> } /> {/* Content */}
				</Route>
				<ProtectedRoute path="/login" element={ <LoginPage /> } /> {/* Login */}
				<ProtectedRoute path="/register" element={ <RegisterPage /> } /> {/* Register */}
			</Routes>
			<FooterNavigation />
		</>
	)
}

export default App
