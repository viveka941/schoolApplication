import { Event } from "../model/Event.model.js";

export const addEvent = async (req, res) => {
  try {
    const { title, description, date, createdBy } = req.body;

    if (!title || !description || !date || !createdBy) {
      return res.status(403).json({
        message: "required fields is missing",
        success: false,
      });
    }
    const newEvent = await Event.create({
      title,
      description,
      date,
      createdBy,
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


export const allEvent = async (req, res) => {
  try {
    const eventList = await Event.find()
      .populate("createdBy", "name") // Populates only the name field of the teacher
      .sort({ date: 1 }); // Optional: Sort events by upcoming date

    return res.status(200).json({
      message: "Successfully fetched events",
      success: true,
      list: eventList,
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};
