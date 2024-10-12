import { Sheet, SheetTrigger, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { DashboardIcon, ExitIcon, QuestionIcon, SettingsIcon } from '../icons';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useLogoutMutation } from '@/lib/api/api';
import { useAppDispatch } from '@/hooks/hooks';
import { clearToken } from '@/lib/features/userSlice';
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
				<Avatar className="border rounded-full">
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>IS</AvatarFallback>
				</Avatar>
			</SheetTrigger>
			<SheetContent className="w-60 text-sm lg:w-80">
				<SheetHeader className="grid grid-cols-[auto_1fr] items-center">
					<Avatar className="border rounded-full">
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>IS</AvatarFallback>
					</Avatar>

					<div className="text-start justify-self-start ml-5">
						<Link href="/" className="font-bold">
							qtenebrae
						</Link>
						<div className="text-muted-foregroun">Ivanov Sergey</div>
					</div>
				</SheetHeader>

				<Separator className="my-2.5" />

				<div className="flex flex-col">
					<Button className="justify-start" size="sm" variant="ghost" asChild>
						<Link href="/">
							<DashboardIcon className="mr-1.5 w-4 h-4" />
							Список книг
						</Link>
					</Button>
					<Button className="justify-start" size="sm" variant="ghost" asChild>
						<Link href="/">
							<SettingsIcon className="mr-1.5 w-4 h-4" />
							Настройки
						</Link>
					</Button>
				</div>

				<Separator className="my-2.5" />

				<div className="flex flex-col">
					<Button className="justify-start" size="sm" variant="ghost" asChild>
						<Link href="/">
							<QuestionIcon className="mr-1.5 w-4 h-4" />
							FAQ
						</Link>
					</Button>
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
