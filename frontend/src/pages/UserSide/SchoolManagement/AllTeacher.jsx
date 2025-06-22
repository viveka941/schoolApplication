import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AllTeachers() {
  const navigate = useNavigate();
  const [teachers, setTeacher] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function allTeacherList() {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URL}/api/teacher/allTeacher`
        );
        setTeacher(res.data.list);
      } catch (error) {
        console.log("server is not responding " + error);
      }
    }
    allTeacherList();
  }, []);

  // Get unique subjects for filter dropdown
  const subjects = [...new Set(teachers.map((t) => t.subject))];

  // Filter teachers based on search term and selected subject
  const filteredTeachers = teachers.filter((teacher) => {
    const nameMatch = teacher.userId?.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const phoneMatch =
      teacher.phone != null
        ? teacher.phone.toString().includes(searchTerm)
        : false;

    const idMatch = teacher._id.toString().includes(searchTerm);

    const matchesSearch = nameMatch || phoneMatch || idMatch;
    const matchesSubject =
      selectedSubject === "All Subjects" || teacher.subject === selectedSubject;

    return matchesSearch && matchesSubject;
  });

  
  return (
    <div className="p-6">
      {/* Header + Search + Filter */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">All Teachers</h1>

        <div className="flex items-center space-x-4">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, ID, or phone..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
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

          {/* Subject Filter */}
          <select
            className="px-4 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="All Subjects">All Subjects</option>
            {subjects.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>

          {/* Add Teacher Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
            Add Teacher
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "ID",
                "Name",
                "Subject",
                "Class",
                "Phone",
                "Email",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTeachers.length > 0 ? (
              filteredTeachers.map((teacher) => (
                <tr
                  key={teacher._id}
                  onClick={() => navigate(`/teacherProfile/${teacher.userId._id}`)}
                  className="hover:bg-gray-50"
                >
                  {/* ID */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {teacher._id.toString().slice(-4)}
                  </td>

                  {/* Name */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {teacher.userId?.name || "N/A"}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Subject */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {teacher.subject}
                    </span>
                  </td>

                  {/* Class */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {teacher.classId?.name || "N/A"}
                  </td>

                  {/* Phone */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {teacher.phone != null ? teacher.phone : "N/A"}
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:underline">
                    <a href={`mailto:${teacher.userId?.email || ""}`}>
                      {teacher.userId?.email || "N/A"}
                    </a>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      {/* Edit */}
                      <button className="text-blue-600 hover:text-blue-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                      {/* Delete */}
                      <button className="text-red-600 hover:text-red-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  No teachers found matching your search criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing {filteredTeachers.length} of {teachers.length} teachers
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => navigate("/cashier")}
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Home
          </button>
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
