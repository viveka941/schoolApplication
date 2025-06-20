import { Attendence } from "../model/Attendence.model.js";
// Example: req.body = { classId, allStudentList: [{ studentId, status }, ...] }

export const addAttendence = async (req, res) => {
  try {
    const { classId, allStudentList } = req.body;

    if (!classId || !Array.isArray(allStudentList) || allStudentList.length === 0) {
      return res.status(400).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    const newAttendance = await Attendence.create({
      classId,
      allStudentList,
      date: new Date(),
    });

    return res.status(200).json({
      message: "Successfully added attendance",
      success: true,
      data: newAttendance,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};



