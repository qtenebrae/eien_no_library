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
import style from './header.module.css';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Header({ className }: HeaderProps) {
	const isAuth = false;

	return (
		<header className={cn(className, style.wrapper, 'border-b')}>
			<Link href="/">
				<Icons.logotype className="w-[40px] h-[40px]" />
			</Link>

			<div className="relative justify-self-start min-w-[200px] w-full">
				<Icons.loupe className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
				<Input type="search" placeholder="Поиск..." className=" rounded-lg bg-background pl-10" />
			</div>

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/catalog" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Каталог
								<Icons.dashboard className="ml-[5px] w-[16px] h-[16px]" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/challenges" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Челленджи
								<Icons.mix className="ml-[5px] w-[16px] h-[16px]" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/leaderboard" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Лидеры
								<Icons.rocket className="ml-[5px] w-[16px] h-[16px]" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/contacts" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Контакты
								<Icons.reader className="ml-[5px] w-[16px] h-[16px]" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<ModeToggle />

			{!isAuth && (
				<Button variant="ghost" asChild>
					<Link href="/sign">
						Вход | Регистрация
						<Icons.enter className="ml-[5px] w-[16px] h-[16px]" />
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
					<SheetContent className="w-[320px] text-sm">
						<SheetHeader className={style.sheetheader}>
							<Avatar className="border rounded-full">
								<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
								<AvatarFallback>IS</AvatarFallback>
							</Avatar>

							<div className="justify-self-start ml-[20px]">
								<Link href="/" className="font-bold">
									qtenebrae
								</Link>
								<div className="text-muted-foregroun">Ivanov Sergey</div>
							</div>
						</SheetHeader>

						<Separator className="my-[10px]" />

						<div className="flex flex-col">
							<Button className="justify-start" size="sm" variant="ghost" asChild>
								<Link href="/">
									<Icons.dashboard className="mr-[5px] w-[16px] h-[16px]" />
									Список книг
								</Link>
							</Button>
							<Button className="justify-start" size="sm" variant="ghost" asChild>
								<Link href="/">
									<Icons.settings className="mr-[5px] w-[16px] h-[16px]" />
									Настройки
								</Link>
							</Button>
						</div>

						<Separator className="my-[10px]" />

						<div className="flex flex-col">
							<Button className="justify-start" size="sm" variant="ghost" asChild>
								<Link href="/">
									<Icons.question className="mr-[5px] w-[16px] h-[16px]" />
									FAQ
								</Link>
							</Button>
							<Button className="justify-start" size="sm" variant="ghost" asChild>
								<Link href="/">
									<Icons.exit className="mr-[5px] w-[16px] h-[16px]" />
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
