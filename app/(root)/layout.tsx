import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';

export default function HomeLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="grid grid-rows-[auto_1fr_auto] min-h-[100svh]">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
