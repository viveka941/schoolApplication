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
// import authenticateToken from "./middleware/auth.js";
import cors from "cors";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

dotenv.config()

const app = express();
app.use(cookieParser());
app.use(express.json());

const corsOptions = {
  origin: [process.env.FRONTEND_URL],
  credentials: true,
};
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
  res.send({site : "this is backend server is running"})
})

app.use("/api/user", userRoute);
app.use("/api/student" ,studentRoute);
app.use("/api/teacher", teacherRoute);
app.use("/api/class", classRoute);
app.use("/api/exam", examRoute);
app.use("/api/attendence",attendenceRoute);
app.use("/api/result", resultRoute);
app.use("/api/timetable", timetableRoute);
app.use("/api/event", eventRoute);

app.listen(5000, () => {
  connectDb();
  console.log("server is listiong port number 5000");
});
