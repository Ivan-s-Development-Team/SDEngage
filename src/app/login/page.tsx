"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import  Axios  from "axios";


export default function LoginPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        Email: "",
        Password: "",
        
    })

    const [buttonDisabled, setButtonDisabled] = React.
    useState(false);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await Axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            router.push("./index");
        } catch (error:any) {
            console.log("Login failed", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() =>{
        if(user.Email.length > 0 && user.Password.length > 0) {
            setButtonDisabled(false);
        } else{
            setButtonDisabled(true);
        }
    })
    return (

        <section className='flex flex-col md:flex-row h-screen items-center'>

        <div className='h-screen flex justify-center items-center md:w-1/2 xl:w-2/3'>
  
        <div className='flex justify-center items-center absolute'>
            <h3 className=' text-[10px] font-light text-center text-white md:leading-[55px] sm:leading-[55px] sm:text-5xl'>SOMOS EL RENACER DE LA ESPERANZA DEL<br /> PUEBLO. LA EXPRESIÓN DE LA VOLUNTAD<br /> CIUDADANA POR LA RENOVACIÓN DE LA<br /> DEMOCRACIA EN LA REPÚBLICA DOMINICANA.</h3>
        </div>
          <img src="/images/image.png" className='w-full h-full object-cover' alt='imagen Faro de Colon' />
         
        </div>
  
        <div className='bg-white items-center justify-center flex md-mx-auto lg:max-w-md md:max-w-md md:w-1/2 xl:w-1/3 px-6 lg:px-16 xl:px-12'>
          <div className='w-full h-100'>
            <h1 className='text-2xl  font-semibold '> SDEngage</h1>
            <h2 className='text-xl md:text-2xl font-bold leading-tight mt-12'>Inicia sesión en tu cuenta</h2>
  
            <form action='#' method='POST' className='mt-6'>
              <div>
                <label className='block text-gray-700'>Correo Electrónico</label>
                <input type='email' id='email' placeholder='Ingresa Correo Electrónico' className='w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white'  value={user.Email}
                onChange={(e) => setUser({...user, Email: e.target.value})} autoComplete='email' autoFocus required /> 
              </div>
  
              <div className='mt-4'>
                <label className='block text-gray-700'>Contraseña</label>
                <input type='password' id='password' minLength={6} placeholder='Ingresa tu contraseña' className='w-full bg-gray-200 rounded-lg px-4 py-3 mt-2 border focus:border-[#14A647] focus:outline-none focus:bg-white' value={user.Password}
                onChange={(e) => setUser({...user, Password: e.target.value})} autoComplete='current-password' autoFocus required /> 
              </div>
              
              <div className='text-right mt-2'>
                <a href='#' type='submit' className='text-sm font-semibold text-gray-700 hover:text-[#14A647] focus:text-blue-700 focus:outline-none'>¿Olvidaste la contraseña?</a>
              </div>
  
              <button type='submit' className='w-full block bg-[#14A647]  hover:bg-[#0A732F] px-4 py-3 mt-6 rounded-lg font-semibold text-white focus:bg-blue-400 focus:outline-none'  onClick={onLogin}>Iniciar sesión</button>
  
              <p className='mt-8'>
                ¿Necesitas una cuenta?
                <a href='/signup' className='text-[#14A647] hover:text-[#0A732F] font-semibold'> Crear una cuenta</a>
              </p>
  
              <p className='text-sm text-gray-500 mt-12'>
                &copy; 2023 SDEngage inicio de sesión
              </p>
  
            </form>
  
          </div>
        </div>
  
      </section>
    )
}