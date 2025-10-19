import { ThemeProvider } from '@/components/custom/providers/theme-provider'
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7'
import { type ReactNode } from 'react'

function AppProvider({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<NuqsAdapter>{children}</NuqsAdapter>
		</ThemeProvider>
	)
}

export default AppProvider
