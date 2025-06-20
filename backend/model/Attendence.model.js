import mongoose from "mongoose";

const attendenceSchema = mongoose.Schema(
  {
    classId: {
      type: mongoose.Schema.ObjectId,
      ref: "Class",
      required: true,
    },
    allStudentList: [
      {
        studentId: {
          type: mongoose.Schema.ObjectId,
          ref: "Student",
          required: true,
        },
        status: {
          type: String,
          enum: ["Present", "Absent"],
          required: true,
        },
      },
    ],
    date: {
      type: Date,
      required: true,
    },
  },
    { timestamps: true }
);

export const Attendence = mongoose.model("Attendence", attendenceSchema);
