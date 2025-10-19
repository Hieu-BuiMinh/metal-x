import HomePage from '@/app/home'
import { createBrowserRouter } from 'react-router'

const routes = createBrowserRouter([
	{
		path: '/',
		Component: HomePage,
		children: [
			{ index: true, Component: HomePage },
			{ path: 'about', Component: HomePage },
		],
	},
])

export default routes