import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import StoreProvider from '@/components/store-provider';
import './globals.css';

const nunito = Nunito_Sans({ subsets: ['cyrillic', 'latin'] });

export const metadata: Metadata = {
	title: 'Eien',
	description: 'Library'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<StoreProvider>
						{children}
						<Toaster />
					</StoreProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
