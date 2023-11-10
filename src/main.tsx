import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider as StoreProvider } from 'react-redux';
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom';

import { setupStore } from '@/store/store.ts';
import Layout from '@/layout/Layout.tsx';
import PostsPage from '@/pages/PostsPage.tsx';
import PostDetailsPage from '@/pages/PostDetailsPage.tsx';
import NotFoundPage from '@/pages/NotFoundPage.tsx';

const store = setupStore()

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout/>}>
			<Route index element={<Navigate to='/posts' replace/>} />
			<Route path="/posts" element={<PostsPage/>}/>
			<Route path="/posts/:id" element={<PostDetailsPage/>} />
			<Route path="*" element={<NotFoundPage/>} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<StoreProvider store={store}>
			<RouterProvider  router={router} />
        </StoreProvider>
	</React.StrictMode>,
)
