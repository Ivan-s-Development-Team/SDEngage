import React, { useState } from 'react';
import AuthLayout from '@/components/layout/AuthLayout';
import Link from 'next/link';
import Sidepic from '@/public/assets/login.png';
import Image from 'next/image';
import { signIn, getSession, getProviders } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { validation } from '@/utils';
import Preloader from '@/components/preloader/Preloader';
import { GetServerSideProps } from 'next';

type FormData = {
	Email: string;
	Password: string;
};

const LoginPage = () => {
	const [user, setUser] = useState({
		Email: '',
		Password: '',
	});

	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(''); // State for error message

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onLoginUser = async ({ Email, Password }: FormData) => {
		//setShowError(false)

		signIn('credentials', { Email, Password });
	};

	return (
		<AuthLayout title={'login'}>
			<Preloader />
			<section className="flex flex-col md:flex-row h-screen items-center">
				<div className="h-screen flex justify-center items-center md:w-1/2 xl:w-2/3">
					<div className="flex justify-center items-center absolute">
						
					</div>
					<Image
						src={Sidepic}
						alt="imagen Faro de Colon"
						className="obw-full h-full object-cover"
					/>
				</div>

				<div className=" md:flex md:w-1/3 bg-white h-screen items-center justify-center w-full px-6 lg:px-16 xl:px-12">
					<div className="w-full h-100">
						<h2 className="text-xl md:text-2xl font-bold leading-tight mt-12 text-center text-gray-700">
							<span className="block text-2xl font-semibold text-gray-700">
								SDE Online
							</span>
							{loading ? 'Procesando' : 'Inicia sesión en tu cuenta'}
						</h2>

						<form onSubmit={handleSubmit(onLoginUser)} noValidate className="mt-6">
							<div>
								<label
									className="block text-black font-semibold"
									style={{ color: '#14532d' }}
								>
									Correo Electrónico
								</label>
								<div className="text-red-500">{errorMessage}</div>
								<input
									type="email"
									id="email"
									placeholder="Ingresa Correo Electrónico"
									className="w-full bg-gray-200 text-black rounded-lg px-4 py-3 mt-2 border border-gray-300 focus:border-[#14A647] focus:outline-none focus:ring-[#14A647]"
									{...register('Email', {
										required: 'Este campo es requerido',
										validate: validation.isEmail,
									})}
									autoComplete="email"
									autoFocus
								/>
								{errors.Email && (
									<p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>
								)}
							</div>

							<div className="mt-4">
								<label
									className="block text-black font-semibold"
									style={{ color: '#14532d' }}
								>
									Contraseña
								</label>
								<input
									type="password"
									id="password"
									minLength={6}
									placeholder="Ingresa tu contraseña"
									className="w-full bg-gray-200 text-black rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
									{...register('Password', {
										required: 'Este campo es requerido',
										minLength: { value: 6, message: 'Mínimo 6 caracteres' },
									})}
									autoComplete="current-password"
								/>
								{errors.Password && (
									<p className="text-red-500 text-sm mt-1">{errors.Password.message}</p>
								)}
							</div>
							<div className="text-right mt-2">
								<Link
									href="/forgot-password"
									type="submit"
									className="text-sm font-semibold text-gray-500 hover:text-[#14A647] focus:text-blue-700 focus:outline-none"
								>
									¿Olvidaste la contraseña?
								</Link>
							</div>

							<button
								type="submit"
								className="w-full block bg-[#14A647]  hover:bg-[#0A732F] px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none"
							>
								{buttonDisabled
									? 'Por favor complete la información necesaria'
									: 'Iniciar Session'}
							</button>
							<div className="text-center">
								<p className="mt-8 text-gray-500">
									¿Necesitas una cuenta?
									<Link
										href="/auth/register"
										className="text-[#14A647] hover:text-[#0A732F] font-semibold"
									>
										{' '}
										Crear una cuenta
									</Link>
								</p>
							</div>
							<div className="text-center">
								<p className="text-sm text-gray-500 mt-12">
									&copy; 2023 SDE Online inicio de sesión
								</p>
							</div>
						</form>
					</div>
				</div>
			</section>
		</AuthLayout>
	);
};

LoginPage.getLayout = (page: React.ReactNode) => null;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
	const session = await getSession({ req });
	console.log({ session });
	const { p = '/' } = query;

	if (session) {
		return {
			redirect: {
				destination: p.toString(),
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};

export default LoginPage;
