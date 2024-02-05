import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

export const createNewUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;
    const user = await UserService.createNewUser(newUser);
    res.status(200).json({
      status: 200,
      success: true,
      message: "New User Created Successfully",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      success: false,
      message: "New User Created failed!!",
      error: error,
    });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUser();
    res.status(200).json({
      status: 200,
      message: "success",
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      success: false,
      message: "get all users failed!",
      error: error,
    });
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await UserService.getUser(id);
    res.status(200).json({
      status: 200,
      success: true,
      message: "user get successfully!!!",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      status: 400,
      success: false,
      message: "user get failed",
      error,
    });
  }
};

const updatedUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await UserService.updateUser(id, data);
    res.status(200).json({
      success: true,
      status: 200,
      message: "User updated successfully!!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "User updated failed!!!",
      error,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await UserService.deleteUser(id);
    res.status(200).json({
      success: true,
      status: 200,
      message: "User deleted successfully!!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "User deleted failed!!!",
      error,
    });
  }
};

const getAllAdminUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getAdminUsers();
    res.status(200).json({
      success: true,
      status: 200,
      message: "All admins users fetech successfully!!!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      status: 400,
      message: "admins users fetech failed!!!",
      error,
    });
  }
};

export const UserController = {
  createNewUser,
  getAllUsers,
  getUser,
  updatedUser,
  deleteUser,
  getAllAdminUsers,
};
