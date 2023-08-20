
import { dbUsers } from "@/database";
import NextAuth,{NextAuthOptions} from "next-auth"
import Credentials from "next-auth/providers/credentials";


declare module 'next-auth' {
  interface Session {
    accessToken?: string;
  }
}


export const authOptions:NextAuthOptions= {
  // Configure one or more authentication providers
 
  providers: [
    // ...add more providers here

    Credentials({
     name: 'Custom Login',
     credentials: {
       Email: { label: 'Correo:', type: 'email', placeholder: 'correo@google.com'  },
       Password: { label: 'Contraseña:', type: 'password', placeholder: 'Contraseña'  },
     },
    
     async authorize(credentials) {
       const user = await dbUsers.checkUserEmailPassword(credentials!.Email, credentials!.Password);
       if (user) {
         return { ...user, id: user._id };
       }
       return null;
     },
   }),

 ],

      
}

export default NextAuth(authOptions)