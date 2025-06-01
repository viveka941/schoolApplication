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
      return res.status(403).json({
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

    return res.status(403).json({
      message: "successfull login user",
      success: true,
      user: existingUser,
    });
  } catch (error) {
    console.log("server is not responding" + error);
  }
};


// export const logout = async(req,res)=>{
//   try {
//     const { email, password, role } = req.body;
    
//   } catch (error) {
//     console.log("server is not responding" + error);
//   }
// }