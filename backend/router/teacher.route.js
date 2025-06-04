import express from "express";
import { addTeacher } from "../controller/Teacher.controller.js";

const router = express.Router();

router.route("/addTeacher").post(addTeacher);


export default router;
