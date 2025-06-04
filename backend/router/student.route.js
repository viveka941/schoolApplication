import express from "express";
import { addStudent } from "../controller/student.controller.js";

const router = express.Router();

router.route("/addStudnet").post(addStudent);

export default router;
