import express from "express";
import {  getAllClass, newClass } from "../controller/class.controller.js";

const router = express.Router();
router.route("/addClass").post(newClass);
router.route("/allClass").get(getAllClass)


export default router;
