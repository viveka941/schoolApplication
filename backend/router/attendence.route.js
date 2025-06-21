import express from "express";
import { addAttendence, allAttendence } from "../controller/attendence.controller.js";

const router = express.Router();
// http://localhost:5000/api/attendence
router.route("/addAttendence").post(addAttendence);
router.route("/list/:classId").post(allAttendence)

export default router;
