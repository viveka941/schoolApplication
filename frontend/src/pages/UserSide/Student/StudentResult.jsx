import React from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

function StudentResult() {
  const location = useLocation();
  const studentResults = location?.state?.StudentResultData || [];
  const studentName = studentResults[0]?.student?.name || "Student";

  // If no results found
  if (studentResults.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">📭</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No Results Found
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't find any exam results for {studentName}.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Exam Results for {studentName}
          </h1>
          <p className="text-gray-600">
            Viewing performance across all examinations
          </p>
        </div>

        {/* Results Table */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Exam
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Class
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Viva
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Written
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Percentage
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {studentResults.map((result, index) => {
                  const totalPossible = 100; // Assuming max marks is 100
                  const percentage = (
                    (result.student.totalObtained / totalPossible) *
                    100
                  ).toFixed(1);

                  return (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-medium text-gray-900">
                          {result.exam.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-gray-900 font-medium">
                          {result.subject}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {result.class}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                        {format(new Date(result.date), "dd MMM yyyy")}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-blue-600 font-medium">
                        {result.student.vivaMark}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center text-green-600 font-medium">
                        {result.student.writtenMark}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center font-bold">
                        {result.student.totalObtained}/100
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            percentage >= 80
                              ? "bg-green-100 text-green-800"
                              : percentage >= 60
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {percentage}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Summary Card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Best Subject
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {
                studentResults.reduce(
                  (best, current) =>
                    current.student.totalObtained > best.total ? current : best,
                  { subject: "", total: 0 }
                ).subject
              }
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Highest Score
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {Math.max(...studentResults.map((r) => r.student.totalObtained))}
              /100
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              Average Percentage
            </h3>
            <p className="text-2xl font-bold text-gray-900">
              {(
                (studentResults.reduce(
                  (sum, result) => sum + result.student.totalObtained / 100,
                  0
                ) /
                  studentResults.length) *
                100
              ).toFixed(1)}
              %
            </p>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="mt-10 bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Performance Trend
          </h3>
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-500">Performance chart visualization</p>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <span className="inline-flex items-center mr-4">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-1"></span>{" "}
              Viva Marks
            </span>
            <span className="inline-flex items-center mr-4">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>{" "}
              Written Marks
            </span>
            <span className="inline-flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-1"></span>{" "}
              Total Marks
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentResult;
