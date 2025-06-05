import express from "express";
import { addTeacher, loginTeacher } from "../controller/Teacher.controller.js";

const router = express.Router();

router.route("/addTeacher").post(addTeacher);
router.route("/loginTeacher").post(loginTeacher);


export default router;
