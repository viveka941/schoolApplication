import { useAllData } from "@/AllData/AllData";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function ResultData() {
  const { allExam, allClass } = useAllData();
  const [allList, setAllList] = useState([]);
  const [selectedExam, setSelectedExam] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  // Fetch students when class changes
  useEffect(() => {
    if (selectedClass) {
      fetchStudents(selectedClass);
    } else {
      setAllList([]);
    }
  }, [selectedClass]);

  async function fetchStudents(className) {
    setIsLoading(true);
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_USER_URL
        }/api/class/allStudent/${className}`
      );
      setAllList(res.data.list || []);
    } catch (error) {
      console.error("Error fetching students:", error);
      setAllList([]);

    } finally {
      setIsLoading(false);
    }
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    reset,
    setValue,
  } = useForm();

  // Watch all form fields to calculate totals in real-time
  const formValues = watch();

  // Initialize form values when students change
  useEffect(() => {
    const defaultValues = {};
    allList.forEach((student) => {
      defaultValues[`vivaMark-${student._id}`] = student.vivaMark || "";
      defaultValues[`writtenMark-${student._id}`] = student.writtenMark || "";
    });
    reset(defaultValues);
  }, [allList, reset]);

  const onSubmit =async (data) => {
    const results = allList.map((student) => {
      const vivaMark = parseInt(data[`vivaMark-${student._id}`] || 0);
      const writtenMark = parseInt(data[`writtenMark-${student._id}`] || 0);

      return {
        studentId: student._id,
        name: student.name,
        vivaMark,
        writtenMark,
        totalObtained: vivaMark + writtenMark,
      };
    });

    const payload =  {
      exam: selectedExam,
      class: selectedClass,
      subject: selectedSubject,
      date,
      results,
    };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_USER_URL}/api/result/addResult`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(res.data.success){
        alert(res.data.message)
      }
    } catch (error) {
       alert(res.data.message || " server is not responding")
    }
   
  };

  const validateMark = (value, min, max) => {
    if (value === "") return "Mark is required";

    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "Must be a valid number";
    if (numValue < min) return `Must be at least ${min}`;
    if (numValue > max) return `Cannot exceed ${max}`;
    return true;
  };

  // Calculate total obtained marks for a student
  const calculateTotal = (studentId) => {
    const viva = parseFloat(formValues[`vivaMark-${studentId}`] || 0);
    const written = parseFloat(formValues[`writtenMark-${studentId}`] || 0);
    return (viva + written).toFixed(1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={() => window.history.back()}
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md active:scale-95"
      >
        ← Go Back
      </button>

      <div className="text-center mb-8 bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Exam Results Entry</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Select Exam</label>
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="">Select Exam</option>
              {allExam?.map((data, idx) => (
                <option key={idx} value={data._id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Select Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="">Select Class</option>
              {allClass?.map((data, idx) => (
                <option key={idx} value={data.name}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Subject</label>
            <input
              type="text"
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              placeholder="Enter subject"
              className="p-2 border rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border rounded-md"
            />
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          <p className="mt-4 text-lg">Loading students...</p>
        </div>
      ) : allList.length > 0 ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="overflow-x-auto shadow-md rounded-lg mb-6">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-3 px-4 text-left">ID</th>
                  <th className="py-3 px-4 text-left">Student Name</th>
                  <th className="py-3 px-4 text-center">Roll No</th>
                  <th className="py-3 px-4 text-center">
                    Obtain Viva Mark (20-50)
                  </th>
                  <th className="py-3 px-4 text-center">
                    Obtain Written Mark (20-50)
                  </th>
                  <th className="py-3 px-4 text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                {allList.map((student, idx) => (
                  <tr key={student._id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{idx + 1}</td>
                    <td className="py-3 px-4">{student.name}</td>
                    <td className="py-3 px-4 text-center">
                      {student.roll || "-"}
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <input
                          type="number"
                          className={`w-full p-2 border rounded ${
                            errors[`vivaMark-${student._id}`]
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          {...register(`vivaMark-${student._id}`, {
                            required: "Viva mark is required",
                            validate: (value) => validateMark(value, 20, 50),
                          })}
                          min={20}
                          max={50}
                          step="0.5"
                          placeholder="20-50"
                        />
                        {errors[`vivaMark-${student._id}`] && (
                          <span className="text-red-500 text-xs mt-1">
                            {errors[`vivaMark-${student._id}`].message}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex flex-col">
                        <input
                          type="number"
                          className={`w-full p-2 border rounded ${
                            errors[`writtenMark-${student._id}`]
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          {...register(`writtenMark-${student._id}`, {
                            required: "Written mark is required",
                            validate: (value) => validateMark(value, 20, 50),
                          })}
                          min={20}
                          max={50}
                          step="0.5"
                          placeholder="20-50"
                        />
                        {errors[`writtenMark-${student._id}`] && (
                          <span className="text-red-500 text-xs mt-1">
                            {errors[`writtenMark-${student._id}`].message}
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="py-3 px-4 text-center font-semibold text-lg">
                      {calculateTotal(student._id)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
              disabled={!isDirty}
            >
              Reset Form
            </button>
            <button
              type="submit"
              className="px-8 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
              disabled={
                Object.keys(errors).length > 0 ||
                !isDirty ||
                !selectedExam ||
                !selectedClass ||
                !selectedSubject
              }
            >
              Save Results
            </button>
          </div>
        </form>
      ) : selectedClass ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-medium">
            {isLoading
              ? "Loading students..."
              : "No students found for this class"}
          </h3>
          <p className="text-gray-600 mt-2">
            Please select a different class or add students to this class
          </p>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-medium">
            Select a class to view students
          </h3>
          <p className="text-gray-600 mt-2">
            Choose a class from the dropdown above to load the student list
          </p>
        </div>
      )}
    </div>
  );
}

export default ResultData;
