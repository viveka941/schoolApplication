import { Teacher } from "../model/Teacher.model.js";

export const addTeacher = async (req, res) => {
  try {
    const { userId, subject, phone, classId, salary } = req.body;
    if (!userId || !subject || !classId || !phone || !salary) {
      return res.status(403).json({
        message: "required fields is missing",
        success: false,
      });
    }
    const existingTeacher = await Teacher.findOne({ userId });

    if (existingTeacher) {
      return res.status(203).json({
        message: "Teacher is already exist",
        success: false,
      });
    }
    const currentDate = new Date();
    const newTeacher = await Teacher.create({
      userId,
      subject,
      phone,
      classId,
      salary,
      hireDate: currentDate,
    });
    return res.status(200).json({
      message: "successfull added teacher",
      success: true,
      Teacher: newTeacher,
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

export const loginTeacher = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // 1. Validate inputs
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Required fields are missing",
        success: false,
      });
    }

    // 2. Find teacher by email
    const existingTeacher = await Teacher.findOne({ email });
    if (!existingTeacher) {
      return res.status(404).json({
        message: "Teacher not found",
        success: false,
      });
    }

    // 3. Compare password
    const isMatch = await bcrypt.compare(password, existingTeacher.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
        success: false,
      });
    }

    // 4. Check role match (case-sensitive or normalize both sides)
    if (existingTeacher.role !== role) {
      return res.status(403).json({
        message: "Role mismatch",
        success: false,
      });
    }

    // 5. Success
    return res.status(200).json({
      message: "Successful login",
      success: true,
      teacher: existingTeacher,
    });
  } catch (error) {
    console.log("Server error:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

export const getAllTeacher = async (req, res) => {
  try {
    const allTeacher = await Teacher.find().populate(
      "userId",
      "name email phone"
    ) .populate("classId", "name"); 

    return res.status(200).json({
      message: "successfull fetch all Teacher list",
      success: true,
      list: allTeacher,
    });
  } catch (error) {
    console.log("Server error:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
