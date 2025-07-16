import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // ✅ Correct key
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Student", "Teacher", "Staff", "Counsellor"],
    required: true,
  },
});

export const User = mongoose.model("User",userSchema)