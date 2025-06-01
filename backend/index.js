import express from "express";
import connectDb from "./utils/connectDb.js";
import userRoute from "./router/user.route.js"
const app = express();
app.use(express.json());

app.use("/api/user",userRoute)

app.listen(5000, () => {
  connectDb();
  console.log("server is listiong port number 5000");
});
