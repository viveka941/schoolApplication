import express from "express";
import { addTeacher, getAllTeacher, getDataById, loginTeacher } from "../controller/Teacher.controller.js";

const router = express.Router();
// http://localhost:5000/api/teacher/
router.route("/addTeacher").post(addTeacher);
router.route("/loginTeacher").post(loginTeacher);
router.route("/allTeacher").get(getAllTeacher)
router.route("/teacherData/:id").get(getDataById)


export default router;
