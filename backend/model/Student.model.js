import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  classId: {
    type: mongoose.Types.ObjectId,
    ref:"Class",
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
},{timestamps:true});

export const Student = mongoose.model("Student", studentSchema);
