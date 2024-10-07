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
import { Checkbox } from '@/components/ui/checkbox';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { SignUpForm } from '@/components/ui/sign-up-form';
import { CoilShape, LogoIcon } from '@/components/icons';
import Link from 'next/link';

export default function Sign() {
	return (
		<div className="relative flex flex-col justify-start items-center p-4 w-[100vw] min-h-[100vh] md:justify-center">
			<Card className="static top-10 left-10 flex justify-center items-center p-4 mb-4 w-full h-14 sm:w-fit min-[1780px]:absolute">
				<Button variant="ghost" className="mr-4" asChild>
					<Link href="/">
						Вернуться на главную
						<LogoIcon className="ml-1.5 w-6 h-6" />
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

						<LogoIcon className="absolute bottom-10 left-10 w-28 h-28" />
					</TabsContent>
					<TabsContent value="signup">
						<Card>
							<CardHeader>
								<CardTitle className="text-3xl font-bold">Регистрация</CardTitle>
								<CardDescription>Создай аккаунт и получай награды за чтение!</CardDescription>
							</CardHeader>
							<CardContent>
								<SignUpForm />
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>

				<Card className="hidden w-[40rem] ml-5 md:block">
					<CoilShape />
				</Card>
			</Card>
		</div>
	);
}
