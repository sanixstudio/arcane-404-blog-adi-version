import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { FooterNavigation, HeaderOption } from './containers'
import {
	ContentPage, HomePage, LoginPage, PostPage, RegisterPage, SearchPage, TopicPage 
} from './pages'
import { ProtectedRoute } from './routes'

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
			<FooterNavigation />
		</>
	)
}

export default App
