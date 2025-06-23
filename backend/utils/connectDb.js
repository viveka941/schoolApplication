import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const connectDb = () =>
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => {
      console.log("db is connected");
    })
    .catch((err) => {
      console.log("DB is not responding" + err);
    });

export default connectDb;
