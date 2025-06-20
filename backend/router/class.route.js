import express from "express";
import {  getAllClass, getAllStudent, newClass } from "../controller/class.controller.js";


// http://localhost:5000/api/class
const router = express.Router();
router.route("/addClass").post(newClass);
router.route("/allClass").get(getAllClass)
router.route("/allStudent/:className").get(getAllStudent);


export default router;
