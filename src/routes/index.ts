import HomePage from '@/app/home'
import AppLayout from '@/components/custom/layouts/app-layout'
import { createBrowserRouter } from 'react-router'

const routes = createBrowserRouter([
	{
		path: '/',
		Component: AppLayout,
		children: [
			{ index: true, Component: HomePage },
			{ path: 'about', Component: HomePage },
		],
	},
])

export default routes
