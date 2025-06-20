import { Student } from "../model/Student.model.js";
import { Teacher } from "../model/Teacher.model.js";
import { User } from "../model/User.model.js";
import bcrypt from "bcrypt";
export const addUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(403).json({
        message: "required fields is missing",
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(401).json({
        message: "User is already exist",
        success: false,
      });
    }

    const hash = await bcrypt.hash(password, 10);
    const newUser = await User.create({ name, email, password: hash, role });
    return res.status(200).json({
      message: "Successfull created user",
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.log("server is not responding" + error);
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(403).json({
        message: "required fields is missing",
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({
        message: "user is not existing",
        success: false,
      });
    }
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch || role !== existingUser.role) {
      return res.status(401).json({
        message: "Invalid credentials or role mismatch",
        success: false,
      });
    }

    return res.status(200).json({
      message: "successfull login user",
      success: true,
      user: existingUser,
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


// export const logout = async(req,res)=>{
//   try {
//     const { email, password, role } = req.body;
    
//   } catch (error) {
//     console.log("server is not responding" + error);
//   }
// }


export const getUserDataById = async (req, res) => {
  try {
    const { id } = req.params;

    const userData = await User.findById(id);

    if (!userData) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    let allData = null;

    if (userData.role === "Teacher") {
      const teacherData = await Teacher.findOne({ userId: id });
      allData = teacherData;
    } else if (userData.role === "Student") {
      const studentData = await Student.findOne({ userId: id })
      .populate("classId","name")
      allData = studentData;
    }

    return res.status(200).json({
      message: "Successfully fetched data",
      success: true,
      user: userData,
      allData,
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
      error: error.message,
    });
  }
};
