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
            router.push("/profile");
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
        <div className="flex flex-col items-center justify-center 
        min-h-screen py-2">
            <h1>{loading ?"Procesando" : "Ingresa"}</h1>
            <hr/>
            
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
            onClick={onLogin}
            className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none
            focus:border-gray-600">{buttonDisabled ? "Por favor complete la información necesaria" : "Ingresa"}</button>
            <Link href="/signup">Registrase</Link>
        </div>
    )
}