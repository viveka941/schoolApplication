import express from "express";
import connectDb from "./utils/connectDb.js";
import userRoute from "./router/user.route.js";
import studentRoute from "./router/student.route.js";
import teacherRoute from "./router/teacher.route.js";
import classRoute from "./router/class.route.js";
import attendenceRoute from "./router/attendence.route.js";
import examRoute from "./router/exam.route.js";
import resultRoute from "./router/result.route.js";
import timetableRoute from "./router/timetable.route.js";
import eventRoute from "./router/event.route.js";
import cors from "cors";
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/student", studentRoute);
app.use("/api/teacher", teacherRoute);
app.use("/api/class", classRoute);
app.use("/api/exam", examRoute);
app.use("/api/attendence", attendenceRoute);
app.use("/api/result", resultRoute);
app.use("/api/timetable", timetableRoute);
app.use("/api/event", eventRoute);

app.listen(5000, () => {
  connectDb();
  console.log("server is listiong port number 5000");
});
