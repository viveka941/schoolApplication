import { Student } from "../model/Student.model.js";

export const addStudent = async (req, res) => {
  try {
    const {
      userId,
      dob,
      classId,
      phone,
      gender,
      fatherName,
      motherName,
      address,
    } = req.body;

    if(!userId||
      !dob||
      !classId||
      !phone||
      !gender||
      !fatherName||
      !motherName||
      !address){
        return res.status(403).json({
          message: "required fields is missing",
          success: false,
        });
      }
    const existingSt = await Student.findById({userId})

    if(existingSt){
      return res.status(203).json({
        message: "user is already exist",
        success: false,
      });
    }

    const newStudent = await Student.create({userId,
      dob,
      classId,
      phone,
      gender,
      fatherName,
      motherName,address
    })

    return res.status(200).json({
      message: "successfully added student",
      success: true,
      student: newStudent
    })

  } catch (error) {
    console.log("server is not responding" + error);
    return res.status(500).json({
      message: "server is not responding",
      success: false,
    });
  }
};
