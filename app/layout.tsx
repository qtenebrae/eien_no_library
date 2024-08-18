import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
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
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
