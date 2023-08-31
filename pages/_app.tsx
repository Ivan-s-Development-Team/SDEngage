import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';
import { AuthProvider } from '@/context/auth';
import { SessionProvider } from 'next-auth/react';

interface ComponentWithLayout {
	getLayout?: (page: ReactNode) => ReactNode;
}

export default function App({ Component, pageProps }: AppProps) {
	if ((Component as ComponentWithLayout)?.getLayout) {
		return (
			<>
				<Head>
					<title>SDE💚Despierta</title>
					<meta
						name="SDE💚Despierta"
						content="El unico parada de Santo Domingo Este para todas las necesidades municipales"
					/>
				
				</Head>
				<ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
					<Component {...pageProps} />
				</ThemeProvider>
			</>
		);
	}

	return (
		<>
		{/*	<Head>
				<title>SDE💚Despierta</title>
				<meta
					name="SDE💚Despierta"
					content="El unico parada de Santo Domingo Este para todas las necesidades municipales"
				/>
				
	</Head>
	*/}<SessionProvider>
				<AuthProvider>
					<ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
						
							<Component {...pageProps} />
						
					</ThemeProvider>
				</AuthProvider>
			</SessionProvider>
		</>
	);
}
