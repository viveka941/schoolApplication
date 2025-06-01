import mongoose from "mongoose";

const connectDb = () =>
  mongoose
    .connect("mongodb://127.0.0.1:27017/schoolApplication")
    .then(() => {
      console.log("db is connected");
    })
    .catch((err) => {
      console.log("DB is not responding" + err);
    });

export default connectDb;
