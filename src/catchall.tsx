import { QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import queryClient from './queryClient.ts'

export default function Component() {
	return (
		<QueryClientProvider client={queryClient}>
				<App />
		</QueryClientProvider>
	)
}
