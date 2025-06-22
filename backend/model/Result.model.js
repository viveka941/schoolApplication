import mongoose from "mongoose";

const resultSchema = mongoose.Schema(
  {
    exam: {
      type: mongoose.Types.ObjectId,
      ref: "Exam",
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    results: [
      {
        studentId: {
          type: mongoose.Types.ObjectId,
          ref: "Student",
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
        vivaMark: {
          type: Number,
          required: true,
        },
        writtenMark: {
          type: Number,
          required: true,
        },
        totalObtained: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Result = mongoose.model("Result", resultSchema);
