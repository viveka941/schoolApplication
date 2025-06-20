import { Class } from "../model/Class.model.js";

// Add a new class
export const newClass = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(403).json({
        message: "Class name is required",
        success: false,
      });
    }

    const existingClass = await Class.findOne({ name });
    if (existingClass) {
      return res.status(400).json({
        message: "Class name already exists",
        success: false,
      });
    }

    const createdClass = await Class.create({ name });

    return res.status(200).json({
      message: "Class added successfully",
      success: true,
      classData: createdClass,
    });
  } catch (error) {
    console.error("Error creating class:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// Get all classes
export const getAllClass = async (req, res) => {
  try {
    const allClasses = await Class.find({}).populate("student", "name"); // optional populate
    return res.status(200).json({
      message: "All classes fetched successfully",
      success: true,
      allClass: allClasses,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
      error: error.message,
    });
  }
};

// Add a student to a class
