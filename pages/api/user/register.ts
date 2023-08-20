import bcrypt from 'bcryptjs';
import { db } from '@/database';
import type { NextApiRequest, NextApiResponse } from 'next';
import { jwt, validation } from '@/utils';
import { User } from '@/model';

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
			return registerUser(req, res);

		default:
			res.status(400).json({
				message: 'bad request',
			});
	}
}
const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { Cedula, Email, Password, Firstname, Lastname, Address, Sector } = req.body as {
		Cedula: number;
		Email: string;
		Password: string;
		Firstname: string;
		Lastname: string;
		Address: string;
		Sector: string;
	};

    if (Password.length > 6) {
		return res.status(400).json({
			message: 'la contraseña debe ser de 6 caracteres',
		});
	}

    if (Firstname.length < 2) {
		return res.status(400).json({
			message: 'debe tener mayor a 2 caracteres',
		});
	}

    //Todo: validar email
	if(!validation.isValidEmail(Email)){
		return res.status(400).json({
			message: 'Correo no valido',
		});
	}

    await db.connect();
  const user = await User.findOne({ Email }).lean();
	
  if (user) {
    return res.status(404).json({ message: 'No puede usar ese correo ' });
}

	const newUser = new User({
		Cedula,
		Email: Email.toLocaleLowerCase(),
		Password: bcrypt.hashSync(Password),
		role: 'client',
		Firstname,
        Lastname,
        Address,
        Sector,
	});

    try {
		await newUser.save({ validateBeforeSave: true });
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			message: 'Revisar lo del servidor',
		});
	}

    const { _id, role } = newUser;

	const token = jwt.signToken(_id, Email);

    return res.status(200).json({
		token,
		user: {
			Email,
			role,
			Firstname,
		},
	});

};
