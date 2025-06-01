import express from "express";
import { addUser, userLogin } from "../controller/user.controller.js";

const router = express.Router();

router.route("/addUser").post(addUser);
router.route("/userLogin").post(userLogin);

export default router;
