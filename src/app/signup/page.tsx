"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";


export default function SignupPage() {
    const [user, setUser] = React.useState({
        Cedula: "",
        Email: "",
        Password: "",
        Firstname: "",
        Lastname: "",
        Address: "",
        Sector: "",
        
    })

    const onSignup = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center 
        min-h-screen py-2">
            <h1>Registrase</h1>
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
            focus:border-gray-600">Registrase</button>
            <Link href="/login">Ingresa</Link>
        </div>
    )
}