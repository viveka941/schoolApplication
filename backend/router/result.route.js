import express from "express";
import { addResult } from "../controller/result.controller.js";

const router = express.Router();

router.route("/addResult").post(addResult);


export default router;
