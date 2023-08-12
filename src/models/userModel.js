import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Cedula: {
        type: Number,
        required: [true, "Please provide a Cedula"],
        unique: true,
    },
        Email: {
            type: String,
            required: [true,"Please provide a email"],
            unique: true,
        },
        Password: {
            type: String,
            required: [true,"Please provide a password"],   
        },
        Firstname: {
            type: String,
            required: [true,"Please provide a First Name"],
        },
        Lastname: {
            type: String,
            required: [true,"Please provide a Last Name"],
        },
        Address: {
            type: String,
            required: [true, "Please provide a Address"]
        },
        Sector: {
            type: String,
            required: [true, "Please provide a Sector"]
        },
        isVerfied: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
        verifyToken: String,
        verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model
("users", userSchema);

export default User;