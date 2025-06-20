import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function Attendence() {
  const [allList, setAllList] = useState([]);
  const [classId ,setClassId] = useState()
 
  const {className}= useParams();
 
  useEffect(() => {
    async function AllStudent() {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/class/allStudent/${className}`
        );
        setClassId(res.data.classId)
        setAllList(res.data.list);
      } catch (error) {
        console.log("Error fetching student list:", error);
      }
    }
    AllStudent();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const formattedData = {
      classId: classId, 
      date: new Date(),
      allStudentList: allList.map((student) => ({
        studentId: student._id,
        status: data[`status_${student._id}`], 
      })),
    };

    console.log("Submit Payload:", formattedData);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/attendence/addAttendence",
        formattedData
      );
      console.log("Saved:", res.data);
      reset();
    } catch (error) {
      console.log("Error saving attendance:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        {className} - All Student Attendance List
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <table className="w-full border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Roll No.</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {allList.map((student, idx) => (
              <tr key={student._id}>
                <td className="border px-4 py-2">{idx + 1}</td>
                <td className="border px-4 py-2">{student.name}</td>
                <td className="border px-4 py-2">
                  <select
                    {...register(`status_${student._id}`, { required: true })}
                    className="border p-1"
                  >
                    <option value="Present">Present</option>
                    <option value="Absent">Absent</option>
                  </select>
                  {errors[`status_${student._id}`] && (
                    <p className="text-red-500 text-sm">Required</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
        >
          Submit Attendance
        </button>
      </form>
    </div>
  );
}

export default Attendence;
