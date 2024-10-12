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
import { useSignInMutation } from '@/lib/api/api';
import { useToast } from '@/hooks/use-toast';
import { useAppDispatch } from '@/hooks/hooks';
import { setToken } from '@/lib/features/userSlice';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
	username: z.string().min(6, {
		message: 'Логин должен содержать минимум 6 символов.'
	}),
	password: z.string().min(6, {
		message: 'Пароль слишком легкий.'
	}),
	saveme: z.boolean()
});

const SignInForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: '',
			password: '',
			saveme: true
		}
	});

	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword);
	};

	const router = useRouter();

	const [signIn] = useSignInMutation();
	const dispatch = useAppDispatch();

	const { toast } = useToast();

	async function onSubmit(values: z.infer<typeof formSchema>) {
		try {
			const response = await signIn(values).unwrap();
			dispatch(setToken(response));
			router.push('/');
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
										autoComplete="password"
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
					name="saveme"
					render={({ field }) => (
						<FormItem className="flex space-x-2 space-y-2">
							<FormControl>
								<Checkbox checked={field.value} onCheckedChange={field.onChange} className="mt-2" />
							</FormControl>
							<div className="grid gap-1.5 leading-none">
								<FormLabel>Запомнить меня на этом устройстве</FormLabel>
							</div>
						</FormItem>
					)}
				/>
				<div>
					<Button className="w-full mt-4" type="submit">
						Вход
					</Button>
				</div>
			</form>
		</Form>
	);
};

export { SignInForm };
