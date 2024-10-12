'use client';

import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import { useAppDispatch } from '@/hooks/hooks';
import { useRefreshTokensMutation } from '@/lib/api/api';
import { setToken } from '@/lib/features/userSlice';
import { useEffect } from 'react';
import styles from './layout.module.css';

export default function HomeLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [refreshTokens] = useRefreshTokensMutation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		const updateTokens = async () => {
			try {
				const response = await refreshTokens({}).unwrap();
				dispatch(setToken(response));
			} catch (error) {
				// I don't care
			}
		};

		updateTokens();
	}, [refreshTokens, dispatch]);

	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
}
