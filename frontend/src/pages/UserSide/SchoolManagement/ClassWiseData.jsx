import React, { useState } from "react";

function ClassWiseData() {
  // Sample data for multiple classes
  const classData = {
    "Class 5": [
      {
        id: 1,
        name: "Ram Sharma",
        roll: 15,
        phone: "9876543210",
        email: "ram.sharma@school.edu",
        attendance: "95%",
      },
      {
        id: 2,
        name: "Priya Patel",
        roll: 22,
        phone: "9876543211",
        email: "priya.patel@school.edu",
        attendance: "92%",
      },
      {
        id: 3,
        name: "Vikram Singh",
        roll: 8,
        phone: "9876543212",
        email: "vikram.singh@school.edu",
        attendance: "89%",
      },
      {
        id: 4,
        name: "Sunita Reddy",
        roll: 30,
        phone: "9876543213",
        email: "sunita.reddy@school.edu",
        attendance: "97%",
      },
    ],
    "Class 6": [
      {
        id: 1,
        name: "Amit Kumar",
        roll: 12,
        phone: "9876543220",
        email: "amit.kumar@school.edu",
        attendance: "91%",
      },
      {
        id: 2,
        name: "Neha Gupta",
        roll: 5,
        phone: "9876543221",
        email: "neha.gupta@school.edu",
        attendance: "94%",
      },
    ],
    "Class 7": [
      {
        id: 1,
        name: "Raj Mehta",
        roll: 18,
        phone: "9876543230",
        email: "raj.mehta@school.edu",
        attendance: "90%",
      },
      {
        id: 2,
        name: "Sonia Verma",
        roll: 7,
        phone: "9876543231",
        email: "sonia.verma@school.edu",
        attendance: "93%",
      },
      {
        id: 3,
        name: "Arjun Malhotra",
        roll: 25,
        phone: "9876543232",
        email: "arjun.malhotra@school.edu",
        attendance: "88%",
      },
    ],
  };

  const [selectedClass, setSelectedClass] = useState("Class 5");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter students based on search term
  const filteredStudents = classData[selectedClass].filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.roll.toString().includes(searchTerm) ||
      student.phone.includes(searchTerm)
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Class-wise Student Data
        </h1>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
            className="px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Roll No.
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Student Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Contact
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Attendance
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {student.roll}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {student.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {selectedClass}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {student.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:underline">
                    <a href={`mailto:${student.email}`}>{student.email}</a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-24 bg-gray-200 rounded-full h-2.5 mr-2">
                        <div
                          className="bg-green-600 h-2.5 rounded-full"
                          style={{ width: student.attendance }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {student.attendance}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Edit
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No students found matching your search
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-500">
          Showing {filteredStudents.length} of {classData[selectedClass].length}{" "}
          students in {selectedClass}
        </div>

        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
            Previous
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClassWiseData;
