import AppLayout from '@/components/custom/layouts/app-layout'
import { ThemeProvider } from '@/components/custom/providers/theme-provider'
import { type ReactNode } from 'react'

function AppProvider({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<AppLayout>{children}</AppLayout>
		</ThemeProvider>
	)
}

export default AppProvider
