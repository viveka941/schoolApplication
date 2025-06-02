import { Class } from "../model/Class.model.js";

export const newClass = async (req, res) => {
  try {
    const { name, student } = req.body;
    if (!name || !student) {
      return res.status(403).json({
        message: "required fields is missing",
        success: false,
      });
    }

    const existingClass = await Class.findOne({ name });
    if (existingClass) {
      return res.status(403).json({
        message: "class name already exist",
        success: false,
      });
    }

    const newClass = await Class.create({
      name,
      student,
    });

    return res.status(403).json({
      message: "successfull added class",
      success: true,
      Class: newClass,
    });
  } catch (error) {
    console.log("server is not responding" + error);
  }
};
