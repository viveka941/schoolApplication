import { Event } from "../model/Event.model.js";

export const addEvent = async (req, res) => {
  try {
    const { title, description, date, teacher } = req.body;

    if (!title || !description || !date || !teacher) {
      return res.status(403).json({
        message: "required fields is missing",
        success: false,
      });
    }
    const newEvent = await Event.create({
      title,
      description,
      date,
      teacher,
    });
    return res.status(200).json({
      message: "Successfull created user",
      success: true,
      event: newEvent,
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
