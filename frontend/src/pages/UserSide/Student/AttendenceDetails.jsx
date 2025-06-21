import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaChartPie,
} from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";

function AttendenceDetails() {
  const {id} = useParams(); // User ID of Aman
const location = useLocation()
const data = location.state?.stAttendence||[]
console.log(data)
 

  const studentAttendance = data.attendenceList
    .map((entry) => {
      const student = entry.allStudentList.find(
        (st) => st.studentId?.userId?._id === id
      );
      return student
        ? {
            date: new Date(entry.date),
            status: student.status,
          }
        : null;
    })
    .filter(Boolean);

  // Format date as "Jun 20, 2025"
  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Format day of week
  const formatDay = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Attendance Details
          </h1>
          <div className="flex items-center justify-center">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-800">Aman</h2>
              <p className="text-gray-600">Student ID: STU-{id}</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <FaCalendarAlt className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">
                  Days Present
                </h3>
                <p className="text-3xl font-bold mt-1 text-gray-900">
                  {data.studentPresentDays}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <FaChartPie className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-gray-500 text-sm font-medium">
                  Attendance Percentage
                </h3>
                <p className="text-3xl font-bold mt-1 text-gray-900">
                  {data.attendancePercentage}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Attendance History
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Day
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentAttendance.map((record, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {formatDate(record.date)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-600">
                        {formatDay(record.date)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          record.status === "Present"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {record.status === "Present" ? (
                          <FaCheckCircle className="mr-1.5 h-4 w-4" />
                        ) : (
                          <FaTimesCircle className="mr-1.5 h-4 w-4" />
                        )}
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {studentAttendance.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-4" />
              <p className="text-gray-500">No attendance records found</p>
            </div>
          )}
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          Showing {studentAttendance.length} of {studentAttendance.length}{" "}
          records
        </div>
      </div>
    </div>
  );
}

export default AttendenceDetails;
