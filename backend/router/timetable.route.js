import express from "express";
import { timetable } from "../controller/timetable.controller.js";


const router = express.Router();

router.route("/addTimeTable").post(timetable);


export default router;
