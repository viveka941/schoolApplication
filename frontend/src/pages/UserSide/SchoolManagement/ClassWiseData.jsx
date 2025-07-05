import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ClassWiseData() {
  const navigate =useNavigate()
  const [classData, setAllStData] = useState({});
  const [selectedClass, setSelectedClass] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function AllStudentData() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URL}/api/student/allStudent`
        );
        const students = res.data.list;
       

        

        // Grouping students by class name
        const grouped = students.reduce((acc, student) => {
          const className = student.classId.name;

          if (!acc[className]) {
            acc[className] = [];
          }

          acc[className].push({
            id: student._id,
            name: student.userId.name,
            email: student.userId.email,
            phone: student.phone,
            roll: student.userId._id, // Temporary roll
            attendance: `${Math.floor(Math.random() * 100)}%`, // Temporary data
          });

          return acc;
        }, {});

        setAllStData(grouped);
      } catch (error) {
        console.log("Server is not responding: " + error);
      }
    }

    AllStudentData();
  }, []);

  // Set the default selected class when data is loaded
  useEffect(() => {
    const classes = Object.keys(classData);
    if (classes.length > 0 && !selectedClass) {
      setSelectedClass(classes[0]);
    }
  }, [classData]);

  const filteredStudents =
    classData[selectedClass]?.filter(
      (student) =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.roll.toString().includes(searchTerm) ||
        student.phone.includes(searchTerm)
    ) || [];


  return (
    <div className="p-4 sm:p-6">
      <button
        onClick={() => window.history.back()}
        className="w-full sm:w-auto mb-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-md active:scale-95"
      >
        ← Go Back
      </button>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-800">
          Class-wise Student Data
        </h1>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <select
            className="w-full sm:w-44 px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {Object.keys(classData).map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase">
                Roll No.
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase">
                Name
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase">
                Contact
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase">
                Email
              </th>
              <th className="px-4 py-3 text-left font-medium text-gray-600 uppercase">
                Attendance
              </th>
              <th className="px-4 py-3 text-right font-medium text-gray-600 uppercase">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate(`/studentProfile/${student.roll}`)}
                >
                  <td className="px-4 py-3 whitespace-nowrap">
                    {student.roll}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full border-2 border-dashed" />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {student.name}
                        </div>
                        <div className="text-gray-500 text-xs">
                          {selectedClass}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{student.phone}</td>
                  <td className="px-4 py-3 text-blue-600 underline">
                    <a href={`mailto:${student.email}`}>{student.email}</a>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="w-24 h-2.5 bg-gray-200 rounded-full mr-2">
                        <div
                          className="h-2.5 bg-green-600 rounded-full"
                          style={{ width: student.attendance }}
                        />
                      </div>
                      <span className="text-gray-700">
                        {student.attendance}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <button className="text-blue-600 hover:text-blue-800 mr-2">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-6 text-center text-gray-500">
                  No students found matching your search
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-500">
          Showing {filteredStudents.length} of{" "}
          {classData[selectedClass]?.length || 0} students in {selectedClass}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => navigate("/cashier")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm"
          >
            Home
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 text-sm">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassWiseData;
