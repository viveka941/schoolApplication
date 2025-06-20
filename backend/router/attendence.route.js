import express from "express";
import { addAttendence } from "../controller/attendence.controller.js";

const router = express.Router();
// http:localhost:5000/api/attendence
router.route("/addAttendence").post(addAttendence);


export default router;
