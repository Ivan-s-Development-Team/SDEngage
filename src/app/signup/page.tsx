"use client";
import Link from "next/link";
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
        if(user.Email.length > 0 && user.Password.length > 0 && user.Cedula.length > 0 && user.Sector.length > 0 && user.Firstname.length > 0 && user.Lastname.length > 0 && user.Address.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true)
        }
    })

   

        
    
    return (
        <div className=" wallpaper flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Procesando" : "Registrase"}</h1>
            <hr/>
            <label htmlFor="Cedula">Cedula</label>
            <input 
            className="p-2 border border-grau-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="Cedula"
                type="number"
                value={user.Cedula}
                onChange={(e) => setUser({...user, Cedula: e.target.value})}
                placeholder="123-456-789-12"
                />
            <label htmlFor="Primer Nombre">Firstname</label>
            <input 
            className="p-2 border border-grau-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="Firstname"
                type="text"
                value={user.Firstname}
                onChange={(e) => setUser({...user, Firstname: e.target.value})}
                />
            <label htmlFor="Apellido">Lastname</label>
            <input 
            className="p-2 border border-grau-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="Lastname"
                type="text"
                value={user.Lastname}
                onChange={(e) => setUser({...user, Lastname: e.target.value})}
                />
            <label htmlFor="Sector">Sector</label>
            <select 
            className="p-2 border border-grau-300 rounded-lg mb-4 focus:outline-none flex w-fit focus:border-gray-600 text-black"
            id="Sector"
            value={user.Sector}
            onChange={(e) => setUser({...user, Sector: e.target.value})}
            > <option value="a">Sector</option>
            <option value="b">b</option>
            <option value="c">c</option>
            <option value="d">d</option>
          </select>
            <label htmlFor="Direccion">Address</label>
            <input 
            className="p-2 border border-grau-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="Address"
                type="text"
                value={user.Address}
                onChange={(e) => setUser({...user, Address: e.target.value})}
                />
            <label htmlFor="Correro Electronico">Email</label>
            <input 
            className="p-2 border border-grau-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="Email"
                type="text"
                value={user.Email}
                onChange={(e) => setUser({...user, Email: e.target.value})}
                />
            <label htmlFor="Contrasena">Password</label>
            <input 
            className="p-2 border border-grau-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="Password"
                type="password"
                value={user.Password}
                onChange={(e) => setUser({...user, Password: e.target.value})}
                />
            <button 
            onClick={onSignup}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
            focus:border-gray-600">{buttonDisabled ? "Por favor complete la información necesaria" : "Registrarse"}</button>
            <Link href="/login">Ingresa</Link>
        </div>
    )
}