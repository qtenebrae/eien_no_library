'use client';

import { cn } from '@/lib/utils';
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import { ModeToggle } from '@/components/ui/mode-toggle';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Input } from '@/components/ui/input';
import {
	DashboardIcon,
	LogoIcon,
	LoupeIcon,
	MixIcon,
	ReaderIcon,
	RocketIcon
} from '@/components/icons';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { UserMenu } from '../ui/user-menu';
import { SignInButton } from '../ui/sign-in-button';
import { setToken } from '@/lib/features/userSlice';
import { IUser } from '@/lib/interfaces/user.interface';
import Link from 'next/link';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	initialData: IUser | undefined;
}

export function Header({ initialData, className }: HeaderProps) {
	const [userDataFromSSR, setUserDataFromSSR] = useState(initialData);
	const dispatch = useAppDispatch();
	const userData = useAppSelector((state) => state.user);

	useEffect(() => {
		if (initialData) {
			dispatch(setToken(initialData));
		}
		if (userData) {
			setUserDataFromSSR(userData);
		}
	}, [initialData, dispatch]);

	return (
		<header
			className={cn(
				className,
				'grid grid-cols-[3.75rem_1fr_auto_auto] gap-2 items-center justify-items-center py-2.5 px-2 border-b lg:grid-cols-[3.75rem_1fr_auto_auto_auto] lg:gap-8 lg:px-8'
			)}
		>
			<Link href="/">
				<LogoIcon className="w-10 h-10" />
			</Link>

			<div className="relative justify-self-start min-w-48 w-full">
				<LoupeIcon className="absolute left-2.5 top-2.5 h-5 w-5 text-muted-foreground" />
				<Input type="search" placeholder="Поиск..." className="rounded-lg bg-background pl-10" />
			</div>

			<NavigationMenu className="hidden lg:flex">
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/catalog" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Каталог
								<DashboardIcon className="ml-1.5 w-4 h-4" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/challenges" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Челленджи
								<MixIcon className="ml-1.5 w-4 h-4" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/leaderboard" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Лидеры
								<RocketIcon className="ml-1.5 w-4 h-4" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/contacts" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Контакты
								<ReaderIcon className="ml-1.5 w-4 h-4" />
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<div className="hidden lg:flex">
				<ModeToggle />
			</div>

			{userData.access_token || userDataFromSSR?.access_token ? <UserMenu /> : <SignInButton />}
		</header>
	);
}
