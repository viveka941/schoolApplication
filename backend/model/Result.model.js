import mongoose from "mongoose";

const resultSchema = mongoose.Schema(
  {
    student: {
      type: mongoose.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    examId: {
      type: mongoose.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    mark: [
      {
        subject: {
          type: String,
          required: true,
        },
        score: {
          type: Number,
          required: true,
        },
        total: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Result = mongoose.model("Result", resultSchema);
