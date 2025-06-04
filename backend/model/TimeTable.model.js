import mongoose from "mongoose";

const timeTableSchema = mongoose.Schema(
  {
    classId: {
      type: mongoose.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    slots: [
      {
        startTime: {
          type: String,
          required: true,
        },
        endTime: {
          type: String,
          required: true,
        },
        subject: {
          type: String,
          required: true,
        },
        teacher: {
          type: mongoose.Types.ObjectId,
          ref: "Teacher",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export const TimeTable = mongoose.model("TimeTable", timeTableSchema);
