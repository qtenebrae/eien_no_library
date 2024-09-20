'use client';

import { cn } from '@/lib/utils';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { ModeToggle } from '../ui/mode-toggle';
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from '../ui/navigation-menu';
import Link from 'next/link';

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Header({ className }: HeaderProps) {
	return (
		<header className={cn(className)}>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<Link href="/docs" legacyBehavior passHref>
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Documentation
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
			<ModeToggle />
		</header>
	);
}
