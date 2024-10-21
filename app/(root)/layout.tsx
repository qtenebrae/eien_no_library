import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { IUser } from '@/lib/interfaces/user.interface';
import { cookies } from 'next/headers';

const fetchUserData = async (): Promise<IUser | undefined> => {
	try {
		const cookieStore = cookies();
		const refresh_token = cookieStore.get('refresh_token');

		if (!refresh_token) return undefined;

		const response = await fetch('http://localhost:3131/keycloak/refresh', {
			method: 'POST',
			credentials: 'include',
			headers: {
				Cookie: `refresh_token=${refresh_token?.value}`
			}
		});

		const data: IUser = await response.json();
		return data;
	} catch {
		// I don't care
	}
};

export default async function HomeLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const initialUserData = await fetchUserData();

	return (
		<div className="grid grid-rows-[auto_1fr_auto] min-h-[100svh]">
			<Header initialData={initialUserData} />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
