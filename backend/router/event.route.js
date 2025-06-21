import express from "express";
import { addEvent, allEvent } from "../controller/event.controller.js";
;

const router = express.Router();
// http://localhost:5000/api/event/
router.route("/addEvent").post(addEvent);
router.route("/allEvent").get(allEvent)

export default router;
