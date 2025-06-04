// Controller function
import { TimeTable } from "../model/TimeTable.model.js";

export const timetable = async (req, res) => {
  try {
    const { classId, day, slots } = req.body;

    if (!classId || !day || !slots) {
      return res.status(403).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    const newTimetable = await TimeTable.create({ classId, day, slots });

    return res.status(200).json({
      message: "Successfully created timetable",
      success: true,
      timetable: newTimetable,
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
