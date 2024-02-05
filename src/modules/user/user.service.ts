import { IUser } from "./user.interface";
import { User } from "./user.model";

const createNewUser = async (payload: IUser[]): Promise<IUser[]> => {
  const user = await User.create([...payload]);
  return user;
};

const getAllUser = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

const getUser = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, contactNo: 1 });
  return user;
};

const updateUser = async (payload: string, updatedContent: IUser) => {
  const result = await User.updateOne({ id: payload }, updatedContent);
  return result;
};

const deleteUser = async (payload: string) => {
  const result = await User.deleteOne({ id: payload });
  return result;
};
const getAdminUsers = async () => {
  const result = await User.getAllAdminUsers();
  return result;
};
export const UserService = {
  createNewUser,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  getAdminUsers,
};
