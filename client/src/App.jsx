import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ProtectedRoute } from './routes'
import {
	HeaderOption,
	FooterNavigation,
	PostCard
} from './containers'
import {
	LoginPage,
	RegisterPage,
	HomePage,
	PostPage,
	TopicPage,
	ContentPage,
	SearchPage
} from './pages'

const App = () => {
	return (
		<>
			<HeaderOption />
			<Routes>
				<Route path="/" element={ <HomePage /> } /> {/* Home */}
				<Route path="/search" element={ <SearchPage /> } /> {/* Search */}
				<Route path="/admin/post" element={ <PostPage /> } /> {/* Post */}
				<Route path="/user/topic" element={ <TopicPage /> } /> {/* Topic */}
				<Route path="/user/content" element={ <ContentPage /> } /> {/* Content */}
				<ProtectedRoute path="/login" element={ <LoginPage /> } /> {/* Login */}
				<ProtectedRoute path="/register" element={ <RegisterPage /> } /> {/* Register */}
			</Routes>
			<PostCard />
			<FooterNavigation />
		</>
	)
}

export default App
