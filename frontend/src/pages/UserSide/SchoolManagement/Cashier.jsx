import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const Cashier = memo(() => {
  // Sample data - in a real app this would come from API/state
  const navigate = useNavigate()
  const schoolData = {
    financials: {
      totalFees: 125400,
      collected: 98450,
      pending: 26950,
      overdue: 8450,
    },
    teachers: {
      total: 42,
      bySubject: [
        { subject: "Mathematics", count: 8 },
        { subject: "Science", count: 7 },
        { subject: "Languages", count: 9 },
        { subject: "Arts", count: 6 },
        { subject: "Physical Education", count: 5 },
        { subject: "Others", count: 7 },
      ],
    },
    students: {
      total: 1260,
      byGrade: [
        { grade: "Grade 1", count: 120 },
        { grade: "Grade 2", count: 135 },
        { grade: "Grade 3", count: 142 },
        { grade: "Grade 4", count: 138 },
        { grade: "Grade 5", count: 150 },
        { grade: "Grade 6", count: 145 },
        { grade: "Grade 7", count: 130 },
        { grade: "Grade 8", count: 140 },
        { grade: "Grade 9", count: 100 },
        { grade: "Grade 10", count: 60 },
      ],
    },
    staff: {
      total: 28,
      byDepartment: [
        { department: "Administration", count: 6 },
        { department: "Maintenance", count: 8 },
        { department: "Security", count: 5 },
        { department: "Cafeteria", count: 4 },
        { department: "Transport", count: 5 },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        School Management Dashboard
      </h1>
      <p className="text-gray-600 mb-6">Cashier Portal</p>

      {/* Financial Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-gray-500 text-sm font-medium">Total Fees</h3>
          <p className="text-2xl font-bold mt-2">
            ₹{schoolData.financials.totalFees.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <h3 className="text-gray-500 text-sm font-medium">Collected</h3>
          <p className="text-2xl font-bold mt-2">
            ₹{schoolData.financials.collected.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
          <h3 className="text-gray-500 text-sm font-medium">Pending</h3>
          <p className="text-2xl font-bold mt-2">
            ₹{schoolData.financials.pending.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <h3 className="text-gray-500 text-sm font-medium">Overdue</h3>
          <p className="text-2xl font-bold mt-2">
            ₹{schoolData.financials.overdue.toLocaleString()}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Teachers Section */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Teachers</h2>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Total: {schoolData.teachers.total}
            </span>
          </div>

          <div className="space-y-4">
            {schoolData.teachers.bySubject.map((item, index) => (
              <div
                onClick={() => navigate("/allTeacher")}
                key={index}
                className="flex items-center hover:text-2xl"
              >
                <div className="w-3/5">
                  <p className="text-gray-700">{item.subject}</p>
                </div>
                <div className="w-2/5 flex items-center ">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width: `${
                          (item.count / schoolData.teachers.total) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            All Teacher
          </button>
          <button
            onClick={() => navigate("/addUser")}
            className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            Add Teacher
          </button>
        </div>

        {/* Students Section */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Students</h2>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
              Total: {schoolData.students.total}
            </span>
          </div>

          <div className="space-y-4">
            {schoolData.students.byGrade.map((item, index) => (
              <div
                onClick={() => navigate("/ClassWiseData")}
                key={index}
                className="flex items-center hover:text-2xl"
              >
                <div className="w-3/5">
                  <p className="text-gray-700">{item.grade}</p>
                </div>
                <div className="w-2/5 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-green-600 h-2.5 rounded-full"
                      style={{
                        width: `${
                          (item.count / schoolData.students.total) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition">
            All Student
          </button>
          <button
            onClick={() => navigate("/addUser")}
            className="mt-6 w-full py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition"
          >
            Add Student
          </button>
        </div>

        {/* Staff Section */}
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-800">Staff</h2>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
              Total: {schoolData.staff.total}
            </span>
          </div>

          <div className="space-y-4">
            {schoolData.staff.byDepartment.map((item, index) => (
              <div
                onClick={() => navigate("/login")}
                key={index}
                className="flex items-center hover:text-2xl"
              >
                <div className="w-3/5">
                  <p className="text-gray-700">{item.department}</p>
                </div>
                <div className="w-2/5 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{
                        width: `${
                          (item.count / schoolData.staff.total) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">
                    {item.count}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate("/addUser")}
            className="mt-6 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
          >
            Add Staff
          </button>
          <button className="mt-6 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition">
            All Staff
          </button>
        </div>
      </div>

      {/* Cashier Actions */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-4 rounded-lg transition shadow-md">
          Record Payment
        </button>
        <button className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg transition shadow-md">
          Generate Invoice
        </button>
        <button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg transition shadow-md">
          View Transactions
        </button>
        <button className="bg-rose-600 hover:bg-rose-700 text-white py-3 px-4 rounded-lg transition shadow-md">
          Print Reports
        </button>
      </div>
    </div>
  );
});

export default Cashier;
