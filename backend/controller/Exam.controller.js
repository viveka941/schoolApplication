import { Exam } from "../model/Exam.model.js";

export const newExam = async (req, res) => {
  try {
    const { name, classId, subjects } = req.body;

    // Validate required fields
    if (
      !name ||
      !classId ||
      !subjects ||
      !Array.isArray(subjects) ||
      subjects.length === 0
    ) {
      return res.status(400).json({
        message: "Required fields are missing or subjects array is invalid",
        success: false,
      });
    }

    // Validate each subject
    for (const subject of subjects) {
      if (
        !subject.subject ||
        !subject.date ||
        !subject.startTime ||
        !subject.endTime
      ) {
        return res.status(400).json({
          message:
            "Each subject must have subject name, date, startTime, and endTime",
          success: false,
        });
      }

      // Validate date format
      if (isNaN(new Date(subject.date).getTime())) {
        return res.status(400).json({
          message: "Invalid date format in subjects",
          success: false,
        });
      }

      // Validate time format
      const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      if (
        !timeRegex.test(subject.startTime) ||
        !timeRegex.test(subject.endTime)
      ) {
        return res.status(400).json({
          message: "Time format must be HH:mm (24-hour format)",
          success: false,
        });
      }

      // Validate end time is after start time
      if (subject.startTime >= subject.endTime) {
        return res.status(400).json({
          message: "End time must be after start time for all subjects",
          success: false,
        });
      }
    }

    // Format subjects with proper date objects
    const formattedSubjects = subjects.map((sub) => ({
      subject: sub.subject,
      date: new Date(sub.date),
      startTime: sub.startTime,
      endTime: sub.endTime,
    }));

    // Create exam document
    const exam = new Exam({
      name,
      classId,
      subjects: formattedSubjects,
    });

    await exam.save();

    return res.status(201).json({
      message: "Exam timetable created successfully",
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

export const allExam = async (req, res) => {
  try {
 //   const { classId } = req.params;

    // Find exams and populate class details
    const exams = await Exam.find()
      .populate("classId", "name")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Exam timetables fetched successfully",
      success: true,
      exams: exams,
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

// Get single exam by ID
export const getExam = async (req, res) => {
  try {
    const { id } = req.params;

    const exam = await Exam.findById(id).populate("classId", "name");

    if (!exam) {
      return res.status(404).json({
        message: "Exam timetable not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Exam fetched successfully",
      success: true,
      exam: exam,
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

// Update exam timetable
export const updateExam = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, subjects } = req.body;

    // Validate inputs
    if (
      !name ||
      !subjects ||
      !Array.isArray(subjects) ||
      subjects.length === 0
    ) {
      return res.status(400).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    // Format subjects
    const formattedSubjects = subjects.map((sub) => ({
      subject: sub.subject,
      date: new Date(sub.date),
      startTime: sub.startTime,
      endTime: sub.endTime,
    }));

    const updatedExam = await Exam.findByIdAndUpdate(
      id,
      {
        name,
        subjects: formattedSubjects,
      },
      { new: true, runValidators: true }
    );

    if (!updatedExam) {
      return res.status(404).json({
        message: "Exam timetable not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Exam timetable updated successfully",
      success: true,
      exam: updatedExam,
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

// Delete exam timetable
export const deleteExam = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExam = await Exam.findByIdAndDelete(id);

    if (!deletedExam) {
      return res.status(404).json({
        message: "Exam timetable not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Exam timetable deleted successfully",
      success: true,
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
