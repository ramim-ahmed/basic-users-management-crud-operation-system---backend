import { HydratedDocument, Model } from "mongoose";

export interface IUser {
  id: string;
  role: "student";
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  gender: "male" | "female" | "other";
  email?: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAdress: string;
  permanentAdress: string;
}
export interface IUserMethods {}

export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAllAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
