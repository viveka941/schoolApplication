import mongoose from "mongoose";

const classSchema = mongoose.Schema(
  {
    name: {
      type: String, // 10-A
      unique:true,
      required: true,
    },
   
    student:[ {
      type: mongoose.Types.ObjectId,
      ref:"Student",
      required: true,
    }],
  },
  { timestamps: true }
);

export const Class = mongoose.model("Class", classSchema);
