'use client';

import { Separator } from '@/components/ui/separator';
import { useRouter } from 'next/navigation';

export default function NotFound() {
	const router = useRouter();

	setTimeout(() => router.back(), 1000);

	return (
		<div className="flex justify-center items-center h-[100svh] w-[100svw]">
			<div className=" grid grid-cols-[auto_auto_auto] gap-4 items-center">
				<div className="text-[2rem] font-bold">404</div>
				<Separator orientation="vertical" />
				<div>
					<div className="text-muted-foreground">Страница не найдена</div>
					<div className="text-muted-foreground text-sm">Вы будете перенаправлены обратно</div>
				</div>
			</div>
		</div>
	);
}
