'use client';

import { cn } from '@/lib/utils';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { ModeToggle } from '@/components/ui/mode-toggle';
import Link from 'next/link';

interface FooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export function Footer({ className }: FooterProps) {
	return (
		<footer className={cn(className)}>
			<nav className="grid grid-cols-5 gap-2 justify-items-center items-center p-2 border-t lg:hidden">
				<Button className="w-full h-full p-1" variant="ghost" size="default" asChild>
					<Link href="/catalog">
						<div className="flex flex-col items-center">
							<Icons.dashboard className="w-6 h-6" />
							<span className=" text-muted-foreground">Каталог</span>
						</div>
					</Link>
				</Button>

				<Button className="w-full h-full p-1" variant="ghost" size="default" asChild>
					<Link href="/challenges">
						<div className="flex flex-col items-center">
							<Icons.mix className="w-6 h-6" />
							<span className=" text-muted-foreground">Челленджи</span>
						</div>
					</Link>
				</Button>

				<ModeToggle />

				<Button className="w-full h-full p-1" variant="ghost" size="default" asChild>
					<Link href="/leaderboard">
						<div className="flex flex-col items-center">
							<Icons.rocket className="w-6 h-6" />
							<span className=" text-muted-foreground">Лидеры</span>
						</div>
					</Link>
				</Button>

				<Button className="w-full h-full p-1" variant="ghost" size="default" asChild>
					<Link href="/contacts">
						<div className="flex flex-col items-center">
							<Icons.reader className="w-6 h-6" />
							<span className=" text-muted-foreground">Контакты</span>
						</div>
					</Link>
				</Button>
			</nav>
		</footer>
	);
}
