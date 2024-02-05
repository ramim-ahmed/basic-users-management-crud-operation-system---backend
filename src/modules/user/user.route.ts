import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router.get("/", UserController.getAllUsers);
router.post("/create-user", UserController.createNewUser);
router.get("/admins", UserController.getAllAdminUsers);
router.get("/:id", UserController.getUser);
router.patch("/:id", UserController.updatedUser);
router.delete("/:id", UserController.deleteUser);
export const UserRoutes = router;
