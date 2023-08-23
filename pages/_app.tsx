import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactNode } from 'react';
import PageLayout from '@/components/layout/PageLayout';
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
					<link rel="shortcut icon" href="/images/favicon.ico" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/images/apple-touch-icon.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/images/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/images/favicon-16x16.png"
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
			{/* <Head>
				<title>SDE💚Despierta</title>
				<meta
					name="SDE💚Despierta"
					content="El unico parada de Santo Domingo Este para todas las necesidades municipales"
				/>
				<link rel="shortcut icon" href="/images/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/images/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/images/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/images/favicon-16x16.png"
				/>
	</Head> */}
			<SessionProvider>
				<AuthProvider>
					<ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
						<PageLayout>
							<Component {...pageProps} />
						</PageLayout>
					</ThemeProvider>
				</AuthProvider>
			</SessionProvider>
		</>
	);
}
