import express from "express";
import { getAllClass, newClass } from "../controller/class.controller.js";

const router = express.Router();
router.route("/addClass").post(newClass);
router.route("/allClass").post(getAllClass)


export default router;
