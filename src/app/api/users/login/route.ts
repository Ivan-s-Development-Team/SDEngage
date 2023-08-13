import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest){
    try {
        
        const reqBody = await request.json()
        const {Email,Password} = reqBody;
        console.log(reqBody);

        const user = await User.findOne({Email})
        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        const validPassword = await bcryptjs.compare (Password, user.Password)
        if(!validPassword){
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }

<<<<<<< HEAD
        interface TokenDataExample {
            id: string;
            email: string;
        }

=======
>>>>>>> a2f3c1740cf43f783aa90fcaf0f23592d64549f0
        const tokenData = {
            id: user._id,
            email: user.Email,
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({
            message: "Login Successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;

    } catch (error:any) {
        return NextResponse.json({error: error.message},
        {status:500})
    }
}