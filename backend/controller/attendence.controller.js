import { Attendence } from "../model/Attendence.model.js";

export const addAttendence = async (req, res) => {
  try {
    const { classId, studentId, status } = req.body;

    if (!classId || !studentId || !status) {
      return res.status(403).json({
        message: "required fields is missing",
        success: false,
      });
    }

    const newAtt = await Attendence.create({
      classId,
      studentId,
      status,
    });

    return res.status(403).json({
      message: "successfull added attendence",
      success: true,
      Attendence: newAtt
    });
  } catch (error) {}
};
