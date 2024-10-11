import { Separator } from '@/components/ui/separator';

export default function NotFound() {
	return (
		<div className="flex justify-center items-center h-[100svh] w-[100svw]">
			<div className=" grid grid-cols-[auto_auto_auto] gap-4 items-center">
				<div className="text-[2rem] font-bold">404</div>
				<Separator orientation="vertical" />
				<div className="text-muted-foreground">Страница не найдена</div>
			</div>
		</div>
	);
}
