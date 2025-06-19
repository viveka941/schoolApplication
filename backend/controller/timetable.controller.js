// Controller function
import { TimeTable } from "../model/TimeTable.model.js";

export const timetable = async (req, res) => {
  try {
    const { classId, day, slots } = req.body;

    if (!classId || !day || !Array.isArray(slots) || slots.length==0) {
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

export const showTimeTable = async(req,res)=>{
  try {
    const getTimeTable = await TimeTable.find({})
      .populate("classId", "name")
      .populate({
        path: "slots.teacher",
        populate: {
          path: "userId",
          select: "name", 
        },
      });

    return res.status(200).json({
      message:"successfull data festch ",
      success : true,
      timetable: getTimeTable
    })
  } catch (error) {
    console.log("server is not responding")
    return res.status(500).json({
      message:"intrnal server is not working"
    })
    
  }
}
