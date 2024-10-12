import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetTitle,
	SheetDescription
} from '@/components/ui/sheet';
import { DashboardIcon, ExitIcon, QuestionIcon, SettingsIcon } from '../icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useLogoutMutation } from '@/lib/api/api';
import { useAppDispatch } from '@/hooks/hooks';
import { clearToken } from '@/lib/features/userSlice';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from './button';
import Link from 'next/link';

const UserMenu = () => {
	const [logout] = useLogoutMutation();
	const dispatch = useAppDispatch();

	async function toLogout() {
		try {
			await logout({}).unwrap();
			dispatch(clearToken());
		} catch (error) {
			// I don't care
		}
	}

	return (
		<Sheet>
			<SheetTrigger>
				<Avatar className="rounded-full">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>IS</AvatarFallback>
				</Avatar>
			</SheetTrigger>
			<SheetContent className="w-80 text-sm" aria-describedby="user-menu">
				<VisuallyHidden>
					<SheetTitle>Пользовательское меню</SheetTitle>
					<SheetDescription>Пользовательское меню</SheetDescription>
				</VisuallyHidden>
				<div className="grid grid-cols-[auto_1fr] items-center p-2 mb-4 border rounded-md">
					<Avatar className="rounded-full  ml-2">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>IS</AvatarFallback>
					</Avatar>

					<div className="justify-self-start text-start ml-5">
						<Link href="/" className="font-bold text-lg">
							qtenebrae
						</Link>
						<div className="text-muted-foregroun">Ivanov Sergey</div>
					</div>
				</div>

				<div className="flex flex-col p-2 mb-4 border rounded-md">
					<Button className="justify-start" size="sm" variant="ghost" asChild>
						<Link href="/">
							<DashboardIcon className="mr-1.5 w-4 h-4" />
							Список книг
						</Link>
					</Button>
					<Separator className="my-2" />
					<Button className="justify-start" size="sm" variant="ghost" asChild>
						<Link href="/">
							<SettingsIcon className="mr-1.5 w-4 h-4" />
							Настройки
						</Link>
					</Button>
				</div>

				<div className="flex flex-col p-2 border rounded-md">
					<Button className="justify-start" size="sm" variant="ghost" asChild>
						<Link href="/">
							<QuestionIcon className="mr-1.5 w-4 h-4" />
							FAQ
						</Link>
					</Button>
					<Separator className="my-2" />
					<Button
						className="justify-start cursor-pointer"
						onClick={() => toLogout()}
						size="sm"
						variant="ghost"
						asChild
					>
						<div>
							<ExitIcon className="mr-1.5 w-4 h-4" />
							Выход
						</div>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export { UserMenu };
