export interface IUser {
    Cedula: number;
    Email: string;
    Password: string;
    Firstname: string;
    Lastname: string;
    Address: string;
    Sector: string;
    isVerfied: boolean;
    isAdmin: boolean;
    forgotPasswordToken?: string;
    forgotPasswordTokenExpiry?: Date;
    verifyToken?: string;
    verifyTokenExpiry?: Date;

    //Todo:saber cuando se creo y cuando se actualizo gracias a timestamps: true
    createdAt?: string;
    updatedAt?: string;
}