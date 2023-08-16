'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Axios from 'axios';

export default function SignupPage() {
	const router = useRouter();
	const [user, setUser] = useState({
		Cedula: '',
		Email: '',
		Password: '',
		Firstname: '',
		Lastname: '',
		Address: '',
		Sector: '',
	});

	const [fieldStates, setFieldStates] = useState({
		Cedula: { touched: false, error: false },
		Email: { touched: false, error: false },
		Password: { touched: false, error: false },
		Firstname: { touched: false, error: false },
		Lastname: { touched: false, error: false },
		Address: { touched: false, error: false },
		Sector: { touched: false, error: false },
	});

	const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [loading, setLoading] = React.useState(false);

	const onSignup = async () => {
		try {
			setLoading(true);
			const response = await Axios.post('/api/users/signup', user);
			console.log('Signup success', response.data);
			router.push('/login');
		} catch (error: any) {
			console.log('Signup failed', error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		if (
			user.Email.length > 0 &&
			user.Password.length > 0 &&
			user.Cedula.length > 0 &&
			user.Sector.length > 0 &&
			user.Firstname.length > 0 &&
			user.Lastname.length > 0 &&
			user.Address.length > 0 
		) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	});

	return (
		<div
			className="flex h-screen bg-cover"
			style={{
				backgroundImage: `url(/images/img2.png)`, // Replace with your combined image URL
			}}
		>
			<div className="flex-1 flex justify-center items-center">
				{/* Registration Form */}
				<div className="w-full max-w-fit p-6 bg-white shadow-md rounded-lg overflow-hidden">
					<div className="p-6">
						<h2 className="text-2xl font-semibold mb-4">
							{loading ? 'Procesando' : 'Registrase'}
						</h2>
						<div className="grid grid-cols-2 gap-3">
							<div className="mb-4">
								<label htmlFor="Cedula" className="block mb-2 text-sm font-medium">
									Cedula
								</label>
								<input
									type="number"
									id="Cedula"
									name="Cedula"
									className={`w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white ${
										fieldStates.Cedula.error ||
										(fieldStates.Cedula.touched && user.Cedula.trim() === '')
											? 'border-red-500'
											: ''
									}`}
									required
									value={user.Cedula}
									onBlur={() =>
										setFieldStates({
											...fieldStates,
											Cedula: { ...fieldStates.Cedula, touched: true },
										})
									}
									onChange={(e) => {
										setUser({ ...user, Cedula: e.target.value });
										setFieldStates({
											...fieldStates,
											Cedula: { ...fieldStates.Cedula, touched: true },
										});
									}}
								/>
								{fieldStates.Cedula.touched && user.Cedula.trim() === '' && (
									<p className="text-red-500 text-sm mt-1">
										Por favor completa la cedula
									</p>
								)}
							</div>
							<div className="mb-4">
								<label htmlFor="Firstname" className="block mb-2 text-sm font-medium">
									Primer Nombre
								</label>
								<input
									type="text"
									id="Firstname"
									name="Firstname"
									className={`w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white ${
										fieldStates.Firstname.error ||
										(fieldStates.Firstname.touched && user.Firstname.trim() === '')
											? 'border-red-500'
											: ''
									}`}
									required
									value={user.Firstname}
                  onBlur={() =>
										setFieldStates({
											...fieldStates,
											Firstname: { ...fieldStates.Firstname, touched: true },
										})
									}
									onChange={(e) => {
										setUser({ ...user, Firstname: e.target.value });
										setFieldStates({
											...fieldStates,
											Firstname: { ...fieldStates.Firstname, touched: true },
										});
									}}
								/>
                {fieldStates.Firstname.touched && user.Firstname.trim() === '' && (
									<p className="text-red-500 text-sm mt-1">
										Por favor completa el primer nombre
									</p>
								)}
							</div>
							<div className="mb-4">
								<label htmlFor="Lastname" className="block mb-2 text-sm font-medium">
									Apellido
								</label>
								<input
									type="text"
									id="Lastname"
									name="Lastname"
									className={`w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white ${
										fieldStates.Lastname.error ||
										(fieldStates.Lastname.touched && user.Lastname.trim() === '')
											? 'border-red-500'
											: ''
									}`}
									required
									value={user.Lastname}
                  onBlur={() =>
										setFieldStates({
											...fieldStates,
											Lastname: { ...fieldStates.Lastname, touched: true },
										})
									}
									onChange={(e) => {
										setUser({ ...user, Lastname: e.target.value });
										setFieldStates({
											...fieldStates,
											Lastname: { ...fieldStates.Lastname, touched: true },
										});
									}}
								/>
                {fieldStates.Lastname.touched && user.Lastname.trim() === '' && (
									<p className="text-red-500 text-sm mt-1">
										Por favor completa el apellido
									</p>
								)}
							</div>
							<div className="mb-4">
								<label htmlFor="Sector" className="block mb-2 text-sm font-medium">
									Sector
								</label>
								<select
									id="Sector"
									name="Sector"
                  className={`w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white ${
										fieldStates.Sector.error ||
										(fieldStates.Sector.touched && user.Sector.trim() === '')
											? 'border-red-500'
											: ''
									}`}
									required
									value={user.Sector}
									onBlur={() =>
										setFieldStates({
											...fieldStates,
											Sector: { ...fieldStates.Sector, touched: true },
										})
									}
									onChange={(e) => {
										setUser({ ...user, Sector: e.target.value });
										setFieldStates({
											...fieldStates,
											Sector: { ...fieldStates.Sector, touched: true },
										});
									}}
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
							</div>
							<div className="mb-4">
								<label htmlFor="Address" className="block mb-2 text-sm font-medium">
									Direccion
								</label>
								<input
									type="text"
									id="Address"
									name="Address"
                  className={`w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white ${
										fieldStates.Address.error ||
										(fieldStates.Address.touched && user.Sector.trim() === '')
											? 'border-red-500'
											: ''
									}`}										required
									value={user.Address}
									onBlur={() =>
										setFieldStates({
											...fieldStates,
											Address: { ...fieldStates.Address, touched: true },
										})
									}
									onChange={(e) => {
										setUser({ ...user, Address: e.target.value });
										setFieldStates({
											...fieldStates,
											Address: { ...fieldStates.Address, touched: true },
										});
									}}
								/>
                 {fieldStates.Address.touched && user.Address.trim() === '' && (
									<p className="text-red-500 text-sm mt-1">
										Por favor completa el correo electronico
									</p>
								)}
							</div>
							<div className="mb-4">
								<label htmlFor="Email" className="block mb-2 text-sm font-medium">
									Correro Electronico
								</label>
								<input
									type="text"
									id="Email"
									name="Email"
                  className={`w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white ${
										fieldStates.Email.error ||
										(fieldStates.Email.touched && user.Sector.trim() === '')
											? 'border-red-500'
											: ''
									}`}									required
									value={user.Email}
                  onBlur={() =>
										setFieldStates({
											...fieldStates,
											Email: { ...fieldStates.Email, touched: true },
										})
									}
									onChange={(e) => {
										setUser({ ...user, Email: e.target.value });
										setFieldStates({
											...fieldStates,
											Email: { ...fieldStates.Email, touched: true },
										});
									}}
								/>
                
							</div>
              {fieldStates.Email.touched && user.Email.trim() === '' && (
									<p className="text-red-500 text-sm mt-1">
										Por favor completa el correo electronico
									</p>
								)}

						<div className="mb-4">
  <label htmlFor="Password" className="block mb-2 text-sm font-medium">
    Contraseña
  </label>
  <input
    type="password"
    id="Password"
    name="Password"
    className={`w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white ${
      fieldStates.Password.error ||
      (fieldStates.Password.touched && user.Password.trim() === '')
        ? 'border-red-500'
        : ''
    }`}
    required
    value={user.Password}
    onBlur={() =>
      setFieldStates({
        ...fieldStates,
        Password: { ...fieldStates.Password, touched: true },
      })
    }
    onChange={(e) => {
      setPassword(e.target.value);
      setFieldStates({
        ...fieldStates,
        Password: { ...fieldStates.Password, touched: true },
      });
    }}
  />
  {fieldStates.Password.touched && user.Password.trim() === '' && (
    <p className="text-red-500 text-sm mt-1">Por favor completa la contraseña</p>
  )}
</div>
                {/*Confirmar contraseña */}

    <div className="mb-4">
  <label htmlFor="ConfirmPassword" className="block mb-2 text-sm font-medium">
    Confirmar contraseña
  </label>
  <input
    type="password"
    id="ConfirmPassword"
    name="ConfirmPassword"
    className={`w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white ${
      confirmPassword !== user.Password ? 'border-red-500' : ''
    }`}
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
  {confirmPassword !== password && confirmPassword !== '' && (
    <p className="text-red-500 text-sm mt-1">Las contraseñas no coinciden</p>
  )}
</div>

							{/* Add more form fields here */}
							<div className=" col-span-2">
								<button
									onClick={onSignup}
									type="submit"
									className="w-full block bg-[#14A647]  hover:bg-[#0A732F] px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none"
								>
									{buttonDisabled
										? 'Por favor complete la información necesaria'
										: 'Registrarse'}
								</button>
								<p className="mt-8">
									¿Ya tienes una cuenta?
									<a
										href="/login"
										className="text-[#14A647] hover:text-[#0A732F] font-semibold"
									>
										{' '}
										Inicia sesión{' '}
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
