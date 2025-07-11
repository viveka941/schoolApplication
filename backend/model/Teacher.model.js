import mongoose from "mongoose";

const teacherSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    classId: {
      type: mongoose.Types.ObjectId,
      ref: "Class",
    },
    address: {
      type: String,
      required: true,
    },
    qualification: [
      {
        type: String,
        required: true,
      },
    ],
    salary: {
      type: Number,
      required: true,
    },
    hireDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export const Teacher = mongoose.model("Teacher", teacherSchema);
