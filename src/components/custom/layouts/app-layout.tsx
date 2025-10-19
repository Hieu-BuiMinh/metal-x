import type { ReactNode } from 'react'

function AppLayout({ children }: { children: ReactNode }) {
	return <div className="w-full min-h-screen">{children}</div>
}

export default AppLayout
