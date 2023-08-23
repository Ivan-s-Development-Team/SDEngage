import React, { useContext, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

import AuthLayout from '@/components/layout/AuthLayout';
import Preloader from '@/components/preloader/Preloader';
import { getSession, signIn } from 'next-auth/react';
import { AuthContext } from '@/context/auth';
import Link from 'next/link';
import Image from 'next/image';
import Backpic from '/src/public/images/img2.png';
import { useRouter } from 'next/navigation';

import { useForm } from 'react-hook-form';
import { validation } from '@/utils';
type FormData = {
	Cedula: number;
	Email: string;
	Password: string;
	Firstname: string;
	Lastname: string;
	Address: string;
	Sector: string;
};

const RegisterPage = ({}) => {
	const [user, setUser] = React.useState({
		Cedula: '',
		Email: '',
		Password: '',
		Firstname: '',
		Lastname: '',
		Address: '',
		Sector: '',
	});

	const [fieldStates, setFieldStates] = useState({
		Password: { touched: false, error: false },
	});

	const [confirmPassword, setConfirmPassword] = useState('');
	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [loading, setLoading] = useState(false);

	/* register comienzo 💎*/
	const { registerUser } = useContext(AuthContext);

	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const [showError, setShowError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const onRegisterForm = async ({
		Cedula,
		Email,
		Password,
		Firstname,
		Lastname,
		Address,
		Sector,
	}: FormData) => {
		setShowError(false);

		const { hasError, message } = await registerUser(
			Cedula,
			Email,
			Password,
			Firstname,
			Lastname,
			Address,
			Sector,
		);

		if (hasError) {
			setShowError(false);
			setErrorMessage(message!);
			setTimeout(() => {
				setShowError(true);
			}, 3000);
			return;
		}

		//TODO: navegar a pantalla que el usuario estaba
		// const destination =router.query.p?.toString() || "/";
		//router.replace(destination)

		/*
          try {
            setShowError(false)
            const {data}=await tesloApi.post("/user/register",{name,email,password})
        
            const {token,user}=data;
            console.log({token,user})
            
            } catch (error) {
            setTimeout(() => {setShowError(true)}, 3000);
          }
          */

		signIn('credentials', { Email, Password });
	}; // end of function

	return (
		<AuthLayout title={'register'}>
			<Preloader />
			<div className="flex h-screen relative">
				<div className="absolute inset-0 flex flex-col justify-center items-center z-10">
					{/* Registration Form */}
					<div className="w-full max-w-fit p-3 bg-white shadow-md rounded-lg overflow-hidden">
						<div className="p-4">
							<h2 className="text-2xl font-semibold mb-4 text-center text-[#16a34a] ">
								{loading ? 'Procesando' : 'Registrase'}
							</h2>
							<form onSubmit={handleSubmit(onRegisterForm)} noValidate>
								<div className="grid grid-cols-2 gap-3">
									{/*cedula */}
									<div className="mb-4">
										<label
											htmlFor="Cedula"
											className="block mb-2 text-sm font-medium"
											style={{ color: '#14532d' }}
										>
											Cedula
										</label>
										<input
											type="number"
											id="Cedula"
											className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white text-black"
											required
                      {...register('Cedula', {
                        required: 'Este campo es requerido',
                        minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                      })}
										/>
										{errors.Cedula && (
											<p className="text-red-500 text-sm mt-1">{errors.Cedula.message}</p>
										)}
									</div>
									{/*nombre */}
									<div className="mb-4">
										<label
											htmlFor="Firstname"
											className="block mb-2 text-sm font-medium"
											style={{ color: '#14532d' }}
										>
											Primer Nombre
										</label>
										<input
											type="text"
											id="Firstname"
											className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white text-black"
											required
											{...register('Firstname', {
												required: 'Este campo es requerido',
												minLength: { value: 2, message: 'Mínimo 2 caracteres' },
											})}
										/>
										{errors.Firstname && (
											<p className="text-red-500 text-sm mt-1">
												{errors.Firstname.message}
											</p>
										)}
									</div>
									{/*apellido */}

									<div className="mb-4">
										<label
											htmlFor="Lastname"
											className="block mb-2 text-sm font-medium"
											style={{ color: '#14532d' }}
										>
											Apellido
										</label>
										<input
											type="text"
											id="Lastname"
											className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white text-black"
											required
											{...register('Lastname', {
												required: 'Este campo es requerido',
												minLength: { value: 2, message: 'Mínimo 2 caracteres' },
											})}
										/>
										{errors.Lastname && (
											<p className="text-red-500 text-sm mt-1">
												{errors.Lastname.message}
											</p>
										)}
									</div>

									{/*sector*/}

									<div className="mb-4">
										<label
											htmlFor="Sector"
											className="block mb-2 text-sm font-medium"
											style={{ color: '#14532d' }}
										>
											Sector
										</label>
										<select
											id="Sector"
											className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
											required
											{...register('Sector', {
												required: 'Este campo es requerido',
												minLength: { value: 2, message: 'Mínimo 2 caracteres' },
											})}
											style={{ color: 'black' }}
										>
											<option value="--Sector--">--Sector--</option>
											<option value="Alma Rosa II">Alma Rosa II</option>
											<option value="Ana Teresa Balaguer">Ana Teresa Balaguer</option>
											<option value="Arismar">Arismar</option>
											<option value="Barrio Ámbar">Barrio Ámbar</option>
											<option value="Barrio La Isla">Barrio La Isla</option>
											<option value="Brisas del Este">Brisas del Este</option>
											<option value="Brisas del Edén">Brisas del Edén</option>
											<option value="Cansino Adentro">Cansino Adentro</option>
											<option value="Corales del Este">Corales del Este</option>
										</select>
										{errors.Sector && (
											<p className="text-red-500 text-sm mt-1">{errors.Sector.message}</p>
										)}
									</div>
									{/*dirrecion*/}
									<div className="mb-4">
										<label
											htmlFor="Address"
											className="block mb-2 text-sm font-medium"
											style={{ color: '#14532d' }}
										>
											Direccion
										</label>
										<input
											type="text"
											id="Address"
											className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white text-black"
											required
											{...register('Address', {
												required: 'Este campo es requerido',
												minLength: { value: 2, message: 'Mínimo 2 caracteres' },
											})}
										/>
										{errors.Address && (
											<p className="text-red-500 text-sm mt-1">
												{errors.Address.message}
											</p>
										)}
									</div>

									{/*correo*/}
									<div className="mb-4">
										<label
											htmlFor="Email"
											className="block mb-2 text-sm font-medium"
											style={{ color: '#14532d' }}
										>
											Email
										</label>
										<input
											type="text"
											id="Email"
											className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white text-black"
											required
											{...register('Email', {
                        required: 'este campo es requerido',
                        validate: validation.isEmail,
                      })}
										/>
										{errors.Email && (
											<p className="text-red-500 text-sm mt-1">{errors.Email.message}</p>
										)}
									</div>
									{/*contraseña*/}
									<div className="mb-4">
										<label
											htmlFor="Password"
											className="block mb-2 text-sm font-medium"
											style={{ color: '#14532d' }}
										>
											Contrasena
										</label>
										<input
											type="password"
											id="Password"
											className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white text-black"
											required
											{...register('Password', {
                        required: 'Este campo es requerido',
                        minLength: { value: 6, message: 'Mínimo 6 caracteres' },
                      })}
											//onChange={(e) => setUser({ ...user, Password: e.target.value })}
										/>
										{errors.Password && (
											<p className="text-red-500 text-sm mt-1">
												{errors.Password.message}
											</p>
										)}
									</div>
									{/*confirmar contraseña*/}
									{/*<div className="mb-4">
  <label htmlFor="ConfirmPassword" className="block mb-2 text-sm font-medium" style={{ color: '#14532d' }}>
    Confirmar contraseña
  </label>
  <input
    type="password"
    id="ConfirmPassword"
    name="ConfirmPassword"
    className={`w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white ${
      confirmPassword !== user.Password ? 'border-red-500' : ''
    } text-black`}
    required
    value={confirmPassword}
    onBlur={() =>
      setFieldStates({
        ...fieldStates,
        Password: { ...fieldStates.Password, touched: true },
      })
    }
    onChange={(e) => {
      setConfirmPassword(e.target.value);
      setFieldStates({
        ...fieldStates,
        Password: { ...fieldStates.Password, touched: true },
      });
    }}
  />
  {confirmPassword !== user.Password && confirmPassword !== '' && (
    <p className="text-red-500 text-sm mt-1">
      Las contraseñas no coinciden
    </p>
  )}
</div>}
{/* Add registro */}
									<div className="col-span-2">
										<button
											//onClick={onSignup}
											type="submit"
											className="w-full block bg-[#14A647] hover:bg-[#0A732F] px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none"
										>
											{buttonDisabled
												? 'Por favor complete la información necesaria'
												: 'Registrarse'}
										</button>
										<p className="mt-8 text-center text-black">
											¿Ya tienes una cuenta?
											<Link
												href="/auth/login"
												className="text-[#14A647] hover:text-[#0A732F] font-semibold"
											>
												{' '}
												Inicia sesión{' '}
											</Link>
										</p>
									</div>
									{/* end boton de registro */}
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
};

//RegisterPage.getLayout = (page: React.ReactNode) => null;

export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
	const session = await getSession({ req });
	console.log(session);

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

export default RegisterPage;
