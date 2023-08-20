// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcryptjs';
import { db } from '@/database';
import { jwt } from '@/utils';
import  User  from '@/model/User';


type Data =
	| { message: string }
	| {
			token: string;
			user: {
				Email: string;
				Firstname: string;
				role: string;
			};
	  };

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	switch (req.method) {
		case 'POST':
			return loginUser(req, res);

		default:
			res.status(400).json({
				message: 'bad request',
			});
	}
}

const loginUser= async(req: NextApiRequest, res: NextApiResponse<Data>)=> {
	const { Email = '', Password = '' } = req.body;

	await db.connect();
	const user = await User.findOne({ Email }).lean();
	await db.disconnect();
      
    if (!user) {
		return res.status(404).json({ message: 'Usuario no encontrado' });
	}


	if (!bcrypt.compareSync(Password, user.Password!)) {
		return res.status(404).json({ message: 'Correo o contraceña no valido -Password' });
	}
    
	const {role,Firstname,_id}=user;

    const token = jwt.signToken(_id,Email) 


	return res.status(200).json({
		token,
		user:{
		   Email,role,Firstname
		   }

})

}
