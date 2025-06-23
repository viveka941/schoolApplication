import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function Attendence() {
  const [allList, setAllList] = useState([]);
  const [classId ,setClassId] = useState()
  const [message,setMessage] = useState('')
  const navigate = useNavigate()
 
  const {className}= useParams();
 
  useEffect(() => {
    async function AllStudent() {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_BACKEND_USER_URL
          }/api/class/allStudent/${className}`
        );
        setClassId(res.data.classId)
        setAllList(res.data.list);
      
      
      } catch (error) {
        setMessage(res.data.message || "Error fetching student list");
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
       `${import.meta.env.VITE_BACKEND_USER_URL}/api/attendence/addAttendence`,
        formattedData
      );
      alert("Attendence mark done");
      console.log("Saved:", res.data);
      if (res.data.success) {
        alert(res.data.message);
       
        
      }
      reset();
    } catch (error) {
      setMessage(res.data.message || "Error saving attendance:");
      console.log("Error saving attendance:", error);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => window.history.back()}
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md active:scale-95"
      >
        ← Go Back
      </button>

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
