'use client';

import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const formSchema = z
	.object({
		email: z.string().email({
			message: 'Неверный адрес электронной почты.'
		}),
		username: z.string().min(6, {
			message: 'Логин должен содержать минимум 6 символов.'
		}),
		password: z.string().min(6, {
			message: 'Пароль слишком легкий.'
		}),
		confirmPassword: z.string().min(6, {
			message: 'Пароль слишком легкий.'
		}),
		terms: z.boolean().refine((val) => val === true, {
			message: 'Вы должны принять эти условия.'
		})
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Пароли не совпадают.',
		path: ['confirmPassword']
	});

const SignUpForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			username: '',
			password: '',
			confirmPassword: '',
			terms: false
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values);
		// implementation to do
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>Электронная почта</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>Логин</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<Input {...field} type="password" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="confirmPassword"
					render={({ field }) => (
						<FormItem className="space-y-1">
							<FormLabel>Подтверждение пароля</FormLabel>
							<FormControl>
								<Input {...field} type="password" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="terms"
					render={({ field }) => (
						<FormItem className="flex space-x-2 space-y-2">
							<FormControl>
								<Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-2" />
							</FormControl>
							<div className="grid gap-1.5 leading-none">
								<FormLabel>Принять правила и условия</FormLabel>
								<p className="text-sm text-muted-foreground">
									Вы соглашаетесь с нашими Условиями предоставления услуг и Политикой
									конфиденциальности.
								</p>
							</div>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<Button className="w-full mt-4" type="submit">
						Регистрация
					</Button>
				</div>
			</form>
		</Form>
	);
};

export { SignUpForm };
