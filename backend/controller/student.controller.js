import { Student } from "../model/Student.model.js";
import { Class } from "../model/Class.model.js";
import mongoose from "mongoose";

// ✅ Add New Student
export const addStudent = async (req, res) => {
  try {
    const {
      userId,
      dob,
      classId,
      phone,
      gender,
      fatherName,
      motherName,
      address,
    } = req.body;

    // Validation
    if (
      !userId ||
      !dob ||
      !classId ||
      !phone ||
      !gender ||
      !fatherName ||
      !motherName ||
      !address
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    // Check if user already exists in student collection
    const existingSt = await Student.findOne({ userId });
    if (existingSt) {
      return res.status(409).json({
        message: "Student already exists for this user",
        success: false,
      });
    }

    // Create student entry
    const newStudent = await Student.create({
      userId,
      dob,
      classId,
      phone,
      gender,
      fatherName,
      motherName,
      address,
    });

    // Fetch class by _id (not by classId as field)
    const classData = await Class.findById(classId);
    if (!classData) {
      return res.status(404).json({
        message: "Class not found",
        success: false,
      });
    }

    // Check if student already exists in class
    const alreadyExists = classData.student.includes(newStudent._id);
    if (alreadyExists) {
      return res.status(400).json({
        message: "Student already exists in this class",
        success: false,
      });
    }

    // Add student to class
    classData.student.push(newStudent._id);
    await classData.save();

    return res.status(201).json({
      message: "Student successfully added",
      success: true,
      student: newStudent,
    });
  } catch (error) {
    console.error("Add Student Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// ✅ Get All Students
export const allStudent = async (req, res) => {
  try {
    const allStudent = await Student.find()
      .populate("userId", "name email")
      .populate("classId", "name");

    return res.status(200).json({
      message: "Successfully fetched all students",
      success: true,
      list: allStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// ✅ Login/Get Student by ID
export const loginStudent = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "Student ID is required",
        success: false,
      });
    }

    const existingSt = await Student.findById(id)
      .populate("userId", "name email")
      .populate("classId", "name");

    if (!existingSt) {
      return res.status(404).json({
        message: "Student not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Student fetched successfully",
      success: true,
      StData: existingSt,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};
