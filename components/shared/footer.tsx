'use client';

import { cn } from '@/lib/utils';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Link from 'next/link';
import { DashboardIcon, MixIcon, ReaderIcon, RocketIcon } from '../icons';
import {} from 'lucide-react';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Footer({ className }: FooterProps) {
	return (
		<footer className={cn(className)}>
			<nav className="grid grid-cols-5 gap-2 justify-items-center items-center p-2 border-t lg:hidden">
				<Button className="w-full h-full p-1" variant="ghost" size="default" asChild>
					<Link href="/catalog">
						<div className="flex flex-col items-center">
							<DashboardIcon className="w-6 h-6" />
							<span className=" text-muted-foreground">Каталог</span>
						</div>
					</Link>
				</Button>

				<Button className="w-full h-full p-1" variant="ghost" size="default" asChild>
					<Link href="/challenges">
						<div className="flex flex-col items-center">
							<MixIcon className="w-6 h-6" />
							<span className=" text-muted-foreground">Челленджи</span>
						</div>
					</Link>
				</Button>

				<ModeToggle />

				<Button className="w-full h-full p-1" variant="ghost" size="default" asChild>
					<Link href="/leaderboard">
						<div className="flex flex-col items-center">
							<RocketIcon className="w-6 h-6" />
							<span className=" text-muted-foreground">Лидеры</span>
						</div>
					</Link>
				</Button>

				<Button className="w-full h-full p-1" variant="ghost" size="default" asChild>
					<Link href="/contacts">
						<div className="flex flex-col items-center">
							<ReaderIcon className="w-6 h-6" />
							<span className=" text-muted-foreground">Контакты</span>
						</div>
					</Link>
				</Button>
			</nav>
		</footer>
	);
}
