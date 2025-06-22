import express from "express";
import { addStudent, allStudent, loginStudent } from "../controller/student.controller.js";

const router = express.Router();
// http://localhost:5000/api/student
router.route("/addStudnet").post(addStudent);
router.route("/allStudent").get(allStudent)
router.route("/Student/:id").post(loginStudent);

export default router;
