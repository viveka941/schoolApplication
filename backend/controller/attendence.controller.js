import { Attendence } from "../model/Attendence.model.js";
// Example: req.body = { classId, allStudentList: [{ studentId, status }, ...] }

export const addAttendence = async (req, res) => {
  try {
    const { classId, allStudentList } = req.body;

    if (
      !classId ||
      !Array.isArray(allStudentList) ||
      allStudentList.length === 0
    ) {
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

export const allAttendence = async (req, res) => {
  try {
    const { classId } = req.params;
    const { userId } = req.body;

    if (!classId || !userId) {
      return res.status(403).json({
        message: "Class ID and User ID are required",
        success: false,
      });
    }

    const allList = await Attendence.find({ classId })
     .populate("classId","name")
      .populate({
        path: "allStudentList.studentId",
        populate: {
          path: "userId",
          select: "name",
        },
      });

    const totalDays = allList.length;
    let studentPresentDays = 0;

    allList.forEach((record) => {
      record.allStudentList.forEach((entry) => {
        if (
          entry.studentId?.userId?._id?.toString() === userId.toString() &&
          entry.status === "Present"
        ) {
          studentPresentDays++;
        }
      });
    });

    const attendancePercentage =
      totalDays > 0
        ? ((studentPresentDays / totalDays) * 100).toFixed(2)
        : "0.00";

    return res.status(200).json({
      message: "Successfully fetched attendance list",
      success: true,
      attendenceList: allList,
      studentPresentDays,
      attendancePercentage: `${attendancePercentage}%`,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

