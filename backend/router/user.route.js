import express from "express";
import { addUser, getUserDataById, userLogin } from "../controller/user.controller.js";

const router = express.Router();
//http:localhost:5000/api/user
router.route("/addUser").post(addUser);
router.route("/userLogin").post(userLogin);
router.route("/getUserData/:id").get(getUserDataById);

export default router;
