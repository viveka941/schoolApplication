import express from "express";
import { addAttendence } from "../controller/attendence.controller.js";

const router = express.Router();

router.route("/addAttendence").post(addAttendence);


export default router;
