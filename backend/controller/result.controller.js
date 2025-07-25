import { Result } from "../model/Result.model.js";

export const addResult = async (req, res) => {
  try {
    const { exam, class: className, subject, date, results } = req.body;

    // Validate required fields
    if (
      !exam ||
      !className ||
      !subject ||
      !date ||
      !Array.isArray(results) ||
      results.length === 0
    ) {
      return res.status(400).json({
        message: "Required fields are missing or invalid",
        success: false,
      });
    }

    // Validate each student result
    for (const studentResult of results) {
      const { studentId, name, vivaMark, writtenMark, totalObtained } =
        studentResult;

      if (
        !studentId ||
        !name ||
        vivaMark === undefined ||
        writtenMark === undefined ||
        totalObtained === undefined
      ) {
        return res.status(400).json({
          message:
            "Each result must include studentId, name, vivaMark, writtenMark, totalObtained",
          success: false,
        });
      }
    }

    const newResult = await Result.create({
      exam,
      class: className,
      subject,
      date,
      results,
    });

    return res.status(201).json({
      message: "Subject-wise result added successfully",
      success: true,
      data: newResult,
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

export const StData = async (req, res) => {
  try {
    const { name, className } = req.body;

    if (!name || !className) {
      return res.status(400).json({
        message: "Required fields are missing or invalid",
        success: false,
      });
    }

    // Find the result document where the class and results.name match
    const resultDocs = await Result.find({
      class: className,
      "results.name": name,
    }).populate("exam","name")
    ;

    if (!resultDocs || resultDocs.length === 0) {
      return res.status(404).json({
        message: "No result data found",
        success: false,
      });
    }

    // Flatten only the matched student results
    const studentOnlyResults = [];

    for (const doc of resultDocs) {
      const matchedStudent = doc.results.find((r) => r.name === name);

      if (matchedStudent) {
        studentOnlyResults.push({
          exam: doc.exam,
          class: doc.class,
          subject: doc.subject,
          date: doc.date,
          student: matchedStudent,
        });
      }
    }

    return res.status(200).json({
      message: "Student result data fetched successfully",
      success: true,
      list: studentOnlyResults,
    });
  } catch (error) {
    console.error("Error fetching student result:", error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

