import { Button } from '@/components/ui/button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter
} from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Shapes } from '@/components/shapes';
import { Checkbox } from '@/components/ui/checkbox';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Icons } from '@/components/icons';
import Link from 'next/link';

export default function Sign() {
	return (
		<div className="relative flex flex-col justify-start items-center p-4 w-[100vw] min-h-[100vh] md:justify-center">
			<Card className="static top-10 left-10 flex justify-center items-center p-4 mb-4 w-full h-14 sm:w-fit min-[1780px]:absolute">
				<Button variant="ghost" className="mr-4" asChild>
					<Link href="/">
						Вернуться на главную
						<Icons.logotype className="ml-1.5 w-6 h-6" />
					</Link>
				</Button>

				<ModeToggle />
			</Card>

			<Card className="relative flex p-4 w-full lg:w-fit">
				<Tabs defaultValue="signin" className="w-full md:max-w-[25rem]">
					<TabsList className="grid grid-cols-2">
						<TabsTrigger value="signin">Вход</TabsTrigger>
						<TabsTrigger value="signup">Регистрация</TabsTrigger>
					</TabsList>
					<TabsContent value="signin">
						<Card className="h-[37rem]">
							<CardHeader>
								<CardTitle className="text-3xl font-bold">Вход в Eien</CardTitle>
								<CardDescription>
									Добро пожаловать обратно! Готов продолжить свой книжный путь?
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
								<div className="space-y-1">
									<Label htmlFor="username">Логин</Label>
									<Input id="username" />
								</div>
								<div className="space-y-1">
									<Label htmlFor="password">Пароль</Label>
									<Input id="password" type="password" />
								</div>

								<div className="flex space-x-2 space-y-2">
									<Checkbox id="saveme" className="mt-2" />
									<div className="grid gap-1.5 leading-none">
										<label
											htmlFor="saveme"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Запомнить меня на этом устройстве
										</label>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Button className="w-full">Вход</Button>
							</CardFooter>
						</Card>

						<Icons.logotype className="absolute bottom-10 left-10 w-28 h-28" />
					</TabsContent>
					<TabsContent value="signup">
						<Card>
							<CardHeader>
								<CardTitle className="text-3xl font-bold">Регистрация</CardTitle>
								<CardDescription>Создай аккаунт и получай награды за чтение!</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2 z-2">
								<div className="space-y-1">
									<Label htmlFor="email">Электронная почта</Label>
									<Input id="email" type="email" />
								</div>
								<div className="space-y-1">
									<Label htmlFor="username">Логин</Label>
									<Input id="username" />
								</div>
								<div className="space-y-1">
									<Label htmlFor="password">Пароль</Label>
									<Input id="password" type="password" />
								</div>
								<div className="space-y-1">
									<Label htmlFor="confirm-password">Подтверждение пароля</Label>
									<Input id="confirm-password" type="password" />
								</div>

								<div className="flex space-x-2 space-y-2">
									<Checkbox id="terms1" className="mt-2" />
									<div className="grid gap-1.5 leading-none">
										<label
											htmlFor="terms1"
											className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
										>
											Принять правила и условия
										</label>
										<p className="text-sm text-muted-foreground">
											Вы соглашаетесь с нашими Условиями предоставления услуг и Политикой
											конфиденциальности.
										</p>
									</div>
								</div>
							</CardContent>
							<CardFooter>
								<Button className="w-full">Регистрация</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>

				<Card className="hidden w-[40rem] ml-5 md:block">
					<Shapes.coil />
				</Card>
			</Card>

			<Shapes.wave className="absolute object-cover top-0 left-0 z-[-1] w-full h-full scale-125" />
		</div>
	);
}
