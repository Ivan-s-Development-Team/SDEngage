"use client";

import Link from "next/link";
import Image from "next/image";
import Backpic from "/src/public/images/img2.png"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import  Axios  from "axios";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        Cedula: "",
        Email: "",
        Password: "",
        Firstname: "",
        Lastname: "",
        Address: "",
        Sector: "",

        
    })

	
const [fieldStates, setFieldStates] = React.useState({

	Password: { touched: false, error: false },
	
  });

	const [confirmPassword, setConfirmPassword] = React.useState('');

    const [buttonDisabled, setButtonDisabled] = React.
    useState(false);

    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {
        try {
          setLoading(true);
          const response = await Axios.post("/api/users/signup", user);
          console.log("Signup success", response.data);
          router.push('/login');
        } catch (error:any) {
            console.log("Signup failed", error.message)
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.Email.length > 0 && user.Password.length > 0 && user.Cedula.length > 0 && user.Sector.length > 0 && user.Firstname.length > 0 && user.Lastname.length > 0 && user.Address.length > 0 && confirmPassword == user.Password ) {
            setButtonDisabled(false);
        } else if (confirmPassword !== user.Password) {
			setButtonDisabled(true);}
			else {
            setButtonDisabled(true)
        }
    })

   

        
    
    return (
      <div className="flex h-screen relative">
      <Image
        src={Backpic} // Adjust the path to your image
        alt="Background Image"
        layout="fill"
        quality={100}
        objectFit="cover"
        className="z-0"
      />
      
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
          {/* Registration Form */}
          <div className="w-full max-w-fit p-3 bg-white shadow-md rounded-lg overflow-hidden">
           <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4 text-center ">{loading ? "Procesando" : "Registrase"}</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="mb-4">
                <label htmlFor="Cedula" className="block mb-2 text-sm font-medium">
                  Cedula
                </label>
                <input
                  type="number"
                  id="Cedula"
                  name="Cedula"
                  className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
                  required
                  value={user.Cedula}
                  onChange={(e) => setUser({...user, Cedula: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Firstname" className="block mb-2 text-sm font-medium">
                Primer Nombre
                </label>
                <input
                  type="text"
                  id="Firstname"
                  name="Firstname"
                  className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
                  required
                  value={user.Firstname}
                  onChange={(e) => setUser({...user, Firstname: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Lastname" className="block mb-2 text-sm font-medium">
                Apellido
                </label>
                <input
                  type="text"
                  id="Lastname"
                  name="Lastname"
                  className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
                  required
                  value={user.Lastname}
                  onChange={(e) => setUser({...user, Lastname: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Sector" className="block mb-2 text-sm font-medium">
                Sector
                </label>
                <select
                  id="Sector"
                  name="Sector"
                  className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
                  required
                  value={user.Sector}
                  onChange={(e) => setUser({...user, Sector: e.target.value})}
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
                  className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
                  required
                  value={user.Address}
                  onChange={(e) => setUser({...user, Address: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Email" className="block mb-2 text-sm font-medium">
                Correro Electronico
                </label>
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
                  required
                  value={user.Email}
                  onChange={(e) => setUser({...user, Email: e.target.value})}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="Password" className="block mb-2 text-sm font-medium">
                Contrasena
                </label>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  className="w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white"
                  required
                  value={user.Password}
                  onChange={(e) => setUser({...user, Password: e.target.value})}
                />
              </div>
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
  {confirmPassword !== user.Password && confirmPassword !== '' && (
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
                  {buttonDisabled ? "Por favor complete la información necesaria" : "Registrarse"}
                </button>     
                <p className='mt-8 text-center'>
                  ¿Ya tienes una cuenta?
                  <Link href='/login' className='text-[#14A647] hover:text-[#0A732F] font-semibold'> Inicia sesión </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };