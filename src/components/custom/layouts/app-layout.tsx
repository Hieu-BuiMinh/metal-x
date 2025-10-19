import Navbar from '@/components/custom/navigation/navbar'
import Sidebar from '@/components/custom/navigation/sidebar'
import { Outlet } from 'react-router'

function AppLayout() {
	return (
		<div className="w-full min-h-screen flex flex-col">
			<Navbar />
			<div className="flex">
				<Sidebar />
				<div className="flex-1 p-3 max-w-7xl mx-auto">
					<Outlet />
				</div>
			</div>
		</div>
	)
}

export default AppLayout
