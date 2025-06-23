import express from "express";
import { addResult, StData } from "../controller/result.controller.js";

const router = express.Router();
// http://localhost:5000/api/result/addResult
router.route("/addResult").post(addResult);
router.route("/stData").post(StData)

export default router;
