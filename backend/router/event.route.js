import express from "express";
import { addEvent } from "../controller/event.controller.js";
;

const router = express.Router();

router.route("/addEvent").post(addEvent);


export default router;
