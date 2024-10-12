import { EnterIcon } from '../icons';
import { Button } from './button';
import Link from 'next/link';

const SignInButton = () => {
	return (
		<>
			<Button className="hidden xl:flex" variant="ghost" asChild>
				<Link href="/sign">
					Вход | Регистрация
					<EnterIcon className="ml-1.5 w-4 h-4" />
				</Link>
			</Button>

			<Button className="xl:hidden" variant="outline" size="icon" asChild>
				<Link href="/sign">
					<EnterIcon className="w-4 h-4" />
				</Link>
			</Button>
		</>
	);
};

export { SignInButton };
