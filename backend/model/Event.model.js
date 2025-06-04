import mongoose from "mongoose";

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
