import express from "express";
import { updateUserController,
    getAllUsersController,
    deleteUserController, } from "../controllers/userController.js";
import userAuth from "../middelwares/authMiddleware.js";

//router object
const router = express.Router();

//routes
// GET USERS || GET
router.get("/get-users", userAuth, getAllUsersController);

// UPDATE USER || PUT
router.put("/update-user", userAuth, updateUserController);

//DELETE USER
router.delete("/delete-user/:id", userAuth, deleteUserController);

export default router;