import { Student } from "../model/Student.model.js";

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
      return res.status(404).json({
        message: "required fields is missing",
        success: false,
      });
    }
    const existingSt = await Student.findById(userId);

    if (existingSt) {
      return res.status(203).json({
        message: "user is already exist",
        success: false,
      });
    }

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

    return res.status(200).json({
      message: "successfully added student",
      success: true,
      student: newStudent,
    });
  } catch (error) {
    console.log("server is not responding" + error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

export const allStudent = async (req, res) => {
  try {
    const allStudent = await Student.find()
      .populate("userId", "name email")
      .populate("classId", "name");
    return res.status(200).json({
      message: "successfull all student data fetch",
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

export const loginStudent = async (req, res) => {
  try {
    const id = req.Params;
    if (id) {
      return res.status(404).json({
        message: "required fields is missing",
        success: false,
      });
    }

    const existingSt = await Student.findById(id);
    if (!existingSt) {
      return res.status(203).json({
        message: "user is not exist",
        success: false,
      });
    }
  return res.status(200).json({
    message:"user is not responding",
    success:true,
    StData : existingSt
  })
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};
