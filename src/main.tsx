import AppProvider from '@/components/custom/providers/app-provider'
import routes from '@/routes'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import './global.css'

createRoot(document.getElementById('root')!).render(
	<AppProvider>
		<RouterProvider router={routes} />
	</AppProvider>
)
