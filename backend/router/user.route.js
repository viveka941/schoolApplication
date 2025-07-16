import express from "express";
import {
  addUser,
  getUserDataById,
  logout,
  userLogin,
} from "../controller/user.controller.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
//http:localhost:5000/api/user
router.route("/addUser").post(addUser);
router.route("/userLogin").post(userLogin);
router.route("/logout").get(logout);
router.route("/getUserData/:id").get(verifyToken, getUserDataById);
// router.route("/getUserData/:id").get(verifyToken, getUserDataById); // verify jwt and workable

export default router;
