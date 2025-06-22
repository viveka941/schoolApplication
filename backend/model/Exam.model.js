import mongoose from "mongoose";

const examSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Exam name is required"],
    },
    classId: {
      type: mongoose.Types.ObjectId,
      ref: "Class",
      required: [true, "Class reference is required"],
    },
    subjects: [
      {
        subject: {
          type: String,
          required: [true, "Subject name is required"],
        },
        date: {
          type: Date,
          required: [true, "Exam date is required"],
        },
        startTime: {
          type: String,
          required: [true, "Start time is required"],
        },
        endTime: {
          type: String,
          required: [true, "End time is required"],
          validate: {
            validator: function (value) {
              return value > this.startTime;
            },
            message: "End time must be after start time",
          },
        },
      },
    ],
  },
  { timestamps: true }
);

export const Exam = mongoose.model("Exam", examSchema);
