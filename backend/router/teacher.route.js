import express from "express";
import { addTeacher, getAllTeacher, loginTeacher } from "../controller/Teacher.controller.js";

const router = express.Router();

router.route("/addTeacher").post(addTeacher);
router.route("/loginTeacher").post(loginTeacher);
router.route("/allTeacher").get(getAllTeacher)


export default router;
