import express from "express";
import { newExam } from "../controller/Exam.controller.js";

const router = express.Router();

router.route("/addExam").post(newExam);


export default router;
