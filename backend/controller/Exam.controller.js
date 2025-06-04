import { Exam } from "../model/Exam.model.js";

export const newExam = async (req, res) => {
  try {
    const { name, classId, date, subject } = req.body;

    if (!name || !classId || !date || !subject) {
      return res.status(403).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    const exam = new Exam({
      name,
      classId,
      date: new Date(date), // Ensure it's in Date format
      subject,
    });

    await exam.save();

    return res.status(201).json({
      message: "Exam created successfully",
      success: true,
      data: exam,
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
