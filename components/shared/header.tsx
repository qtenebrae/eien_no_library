'use client';

import { cn } from '@/lib/utils';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import Link from 'next/link';
import { ModeToggle } from '@/components/ui/mode-toggle';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { Sheet, SheetTrigger, SheetContent, SheetHeader } from '@/components/ui/sheet';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Header({ className }: HeaderProps) {
	const isAuth = false;

	return (
		<header
			className={cn(
				className,
				'grid grid-cols-[3.75rem_1fr_auto_auto] gap-2 items-center justify-items-center py-2.5 px-2 border-b lg:grid-cols-[3.75rem_1fr_auto_auto_auto] lg:gap-8 lg:px-8'
			)}
		>
			<Link href="/">
				<Icons.logotype className="w-10 h-10" />
			</Link>

			<div className="relative justify-self-start min-w-48 w-full">
				<Icons.loupe className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
				<Input type="search" placeholder="Поиск..." className="rounded-lg bg-background pl-10" />
			</div>

			<NavigationMenu className="hidden lg:flex">
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/catalog" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Каталог
								<Icons.dashboard className="ml-1.5 w-4 h-4" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/challenges" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Челленджи
								<Icons.mix className="ml-1.5 w-4 h-4" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/leaderboard" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Лидеры
								<Icons.rocket className="ml-1.5 w-4 h-4" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/contacts" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Контакты
								<Icons.reader className="ml-1.5 w-4 h-4" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<div className="hidden lg:flex">
				<ModeToggle />
			</div>
			{!isAuth && (
				<Button className="hidden xl:flex" variant="ghost" asChild>
					<Link href="/sign">
						Вход | Регистрация
						<Icons.enter className="ml-1.5 w-4 h-4" />
					</Link>
				</Button>
			)}

			{!isAuth && (
				<Button className="xl:hidden" variant="outline" size="icon" asChild>
					<Link href="/sign">
						<Icons.enter className="w-4 h-4" />
					</Link>
				</Button>
			)}

			{isAuth && (
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
									<Icons.dashboard className="mr-1.5 w-4 h-4" />
									Список книг
								</Link>
							</Button>
							<Button className="justify-start" size="sm" variant="ghost" asChild>
								<Link href="/">
									<Icons.settings className="mr-1.5 w-4 h-4" />
									Настройки
								</Link>
							</Button>
						</div>

						<Separator className="my-2.5" />

						<div className="flex flex-col">
							<Button className="justify-start" size="sm" variant="ghost" asChild>
								<Link href="/">
									<Icons.question className="mr-1.5 w-4 h-4" />
									FAQ
								</Link>
							</Button>
							<Button className="justify-start" size="sm" variant="ghost" asChild>
								<Link href="/">
									<Icons.exit className="mr-1.5 w-4 h-4" />
									Выход
								</Link>
							</Button>
						</div>
					</SheetContent>
				</Sheet>
			)}
		</header>
	);
}
