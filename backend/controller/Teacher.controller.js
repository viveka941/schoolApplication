import { Teacher } from "../model/Teacher.model.js";

export const addTeacher = async (req, res) => {
  try {
    const { userId, subject, classId, salary } = req.body;
    if (!userId || !subject || !classId || !salary) {
      return res.status(403).json({
        message: "required fields is missing",
        success: false,
      });
    }
    const existingTeacher = await Teacher.findOne({ userId });

    if (existingTeacher) {
      return res.status(203).json({
        message: "Teacher is already exist",
        success: false,
      });
    }
    const currentDate = new Date()
    const newTeacher = await Teacher.create({
      userId,
      subject,
      classId,
      salary,
      hireDate : currentDate,
    });
    return res.status(200).json({
      message: "successfull added teacher",
      success: true,
      Teacher: newTeacher,
    });
  } catch (error) {}
};
