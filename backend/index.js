import express from "express";
import connectDb from "./utils/connectDb.js";

const app = express();
app.use(express.json());

app.listen(5000, () => {
  connectDb();
  console.log("server is listiong port number 5000");
});
