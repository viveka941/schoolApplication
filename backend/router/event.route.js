import express from "express";
import { addEvent } from "../controller/event.controller.js";
;

const router = express.Router();
// http://localhost:5000/api/event/addEvent
router.route("/addEvent").post(addEvent);


export default router;
