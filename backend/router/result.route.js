import express from "express";
import { addResult } from "../controller/result.controller.js";

const router = express.Router();
// http://localhost:5000/api/result/addResult
router.route("/addResult").post(addResult);


export default router;
