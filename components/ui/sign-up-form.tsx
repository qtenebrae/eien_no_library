'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';
import { Input } from './input';
import { Button } from './button';
import { Checkbox } from './checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { EyeNoneIcon, EyeOpenIcon } from '../icons';
import { useSignUpMutation } from '@/lib/api/api';
import { useToast } from '@/hooks/use-toast';

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

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	const [signUp] = useSignUpMutation();

	const { toast } = useToast();

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			await signUp(values).unwrap();
			toast({
				title: 'Аккаунт успешно создан!'
			});
		} catch (error) {
			toast({
				title: 'Ой! Что-то пошло не так..',
				// @ts-ignore
				description: `${error.data.message}`
			});
		}
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
								<Input {...field} autoComplete="email" />
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
								<Input {...field} autoComplete="username" />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem className="relative space-y-1">
							<FormLabel>Пароль</FormLabel>
							<FormControl>
								<div className="relative">
									<Input
										{...field}
										type={showPassword ? 'text' : 'password'}
										autoComplete="new-password"
									/>
									<Button
										className="absolute bottom-0 right-0"
										onClick={togglePasswordVisibility}
										size="icon"
										variant="default"
										type="button"
									>
										{showPassword && <EyeNoneIcon />}
										{!showPassword && <EyeOpenIcon />}
									</Button>
								</div>
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
								<div className="relative">
									<Input
										{...field}
										type={showPassword ? 'text' : 'password'}
										autoComplete="new-password"
									/>
									<Button
										className="absolute bottom-0 right-0"
										onClick={togglePasswordVisibility}
										size="icon"
										variant="default"
										type="button"
									>
										{showPassword && <EyeNoneIcon />}
										{!showPassword && <EyeOpenIcon />}
									</Button>
								</div>
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
