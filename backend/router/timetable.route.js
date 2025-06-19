import express from "express";
import { showTimeTable, timetable } from "../controller/timetable.controller.js";
 ///api/timetable

const router = express.Router();

router.route("/addTimeTable").post(timetable);
router.route("/allTimeTable").get(showTimeTable);



export default router;
