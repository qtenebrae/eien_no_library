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
import style from './header.module.css';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Header({ className }: HeaderProps) {
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

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Вход | Регистрация
								<Icons.enter className="ml-[5px] w-[16px] h-[16px]" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Личный кабинет
								<Icons.person className="ml-[5px] w-[16px] h-[16px]" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<ModeToggle />

			<Avatar>
				<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
		</header>
	);
}
