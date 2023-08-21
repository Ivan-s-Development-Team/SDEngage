import { IUser } from '@/interfaces';
import { createContext } from 'react';


interface ContextProps {
 isLoggedIn: boolean;
 user?:IUser;
 loginUser: (Email: string, Password: string) => Promise<boolean>;
 registerUser: (Firstname: string, Email: string, Password: string) => Promise<{ hasError: boolean;message?: string;}>
 
 logout: () => void;
}


export const AuthContext = createContext({} as ContextProps );