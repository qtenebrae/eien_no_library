import { Header } from '@/components/shared/header';
import { Footer } from '@/components/shared/footer';
import styles from './layout.module.css';

export default function HomeLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<div className={styles.body}>{children}</div>
			<Footer className={styles.footer} />
		</div>
	);
}
