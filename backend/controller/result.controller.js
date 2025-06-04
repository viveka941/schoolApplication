import { Result } from "../model/Result.model.js";

export const addResult = async (req, res) => {
  try {
    const { student, examId, mark } = req.body;

    // Check for missing fields
    if (
      !student ||
      !examId ||
      !mark ||
      !Array.isArray(mark) ||
      mark.length === 0
    ) {
      return res.status(403).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    const newResult = await Result.create({ student, examId, mark });

    return res.status(200).json({
      message: "Result added successfully",
      success: true,
      result: newResult,
    });
  } catch (error) {
    console.log("Server error: " + error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};
