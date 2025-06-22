import express from "express";
import { allExam, deleteExam, getExam, newExam, updateExam } from "../controller/Exam.controller.js";

const router = express.Router();

router.post("/create", newExam);
router.get("/class", allExam);
router.get("/:id", getExam);
// router.put("/:id", updateExamm);
// router.delete("/:id", deleteExamxam);
export default router;
