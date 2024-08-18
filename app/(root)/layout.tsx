import styles from './page.module.css';

export default function HomeLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={styles.wrapper}>
			<header className={styles.header}>Header</header>
			<div className={styles.body}>{children}</div>
			<footer className={styles.footer}>Footer</footer>
		</div>
	);
}
