import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {NextRequest, NextResponse} from "next/server";
import bcryptjs from "bcryptjs";

connect()

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json()
        const {Cedula, Email, Password, Firstname, Lastname, Address, Sector} = reqBody

        console.log(reqBody);
        
       const user = await User.findOne({Cedula})

       if(user){
        return NextResponse.json({error: "User already exists"}, {status: 400})
       }

       const salt = await bcryptjs.genSalt(10)
       const hashedPassword = await bcryptjs.hash
       (Password, salt)

       const newUser = new User({
        Cedula, 
        Email, 
        Firstname, 
        Lastname, 
        Address, 
        Sector,
        Password: hashedPassword,
       })

       const savedUser = await newUser.save()
       console.log(savedUser);

       return NextResponse.json({
        message: "User created successfully",
        success: true,
        savedUser
    })

    } catch (error: any) {
        return NextResponse.json({error: error.message},
        {status: 500})
    }
}