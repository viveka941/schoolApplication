import express from "express";
import { newClass } from "../controller/class.controller.js";

const router = express.Router();
router.route("/addClass").post(newClass);


export default router;
