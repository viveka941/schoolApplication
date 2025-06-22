import { useAllData } from "@/AllData/AllData";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const Cashier = memo(() => {
  const navigate = useNavigate();
  const { allClass, allTeacher, allStudent } = useAllData();

  // Calculate financial data
  const financials = {
    totalFees: 125400,
    collected: 98450,
    pending: 26950,
    overdue: 8450,
    collectionRate: Math.round((98450 / 125400) * 100),
  };

  // Calculate staff data
  const staffData = {
    total: allTeacher.length,
    byDepartment: [
      { department: "Administration", count: 6 },
      { department: "Maintenance", count: 8 },
      { department: "Security", count: 5 },
      { department: "Cafeteria", count: 4 },
      { department: "Transport", count: 5 },
    ],
  };

  // Teacher distribution by subject
  const teacherSubjects = [
    { subject: "Mathematics", count: 8, color: "bg-indigo-500" },
    { subject: "Science", count: 7, color: "bg-teal-500" },
    { subject: "Languages", count: 9, color: "bg-amber-500" },
    { subject: "Arts", count: 6, color: "bg-rose-500" },
    { subject: "Physical Education", count: 5, color: "bg-emerald-500" },
  ];

  // Quick actions data
  const quickActions = [
    {
      label: "Exam Timetable",
      icon: "📅",
      action: () => navigate("/showExamTable"),
      color: "bg-purple-500 hover:bg-purple-600",
    },
    {
      label: "Create Exam",
      icon: "✏️",
      action: () => navigate("/examFrom"),
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      label: "Create Class",
      icon: "🏫",
      action: () => navigate("/addClass"),
      color: "bg-emerald-500 hover:bg-emerald-600",
    },
    {
      label: "Make Time Table",
      icon: "⏱️",
      action: () => navigate("/addTimeTable"),
      color: "bg-cyan-500 hover:bg-cyan-600",
    },
    {
      label: "Show Time Table",
      icon: "📋",
      action: () => navigate("/showtimeTable"),
      color: "bg-sky-500 hover:bg-sky-600",
    },
    {
      label: "Record Payment",
      icon: "💰",
      action: () => {},
      color: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      label: "Generate Invoice",
      icon: "🧾",
      action: () => {},
      color: "bg-teal-500 hover:bg-teal-600",
    },
    {
      label: "View Transactions",
      icon: "📊",
      action: () => {},
      color: "bg-amber-500 hover:bg-amber-600",
    },
    {
      label: "Print Reports",
      icon: "🖨️",
      action: () => {},
      color: "bg-rose-500 hover:bg-rose-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            School Finance Dashboard
          </h1>
          <p className="text-gray-600 mt-1">Cashier Portal</p>
        </div>
        <div className="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md">
          Today:{" "}
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>

      {/* Financial Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <FinancialCard
          title="Total Fees"
          value={financials.totalFees}
          icon="💰"
          color="bg-blue-100 text-blue-800 border-blue-500"
        />
        <FinancialCard
          title="Collected"
          value={financials.collected}
          icon="✅"
          color="bg-green-100 text-green-800 border-green-500"
          subtitle={`${financials.collectionRate}% collection rate`}
        />
        <FinancialCard
          title="Pending"
          value={financials.pending}
          icon="⏳"
          color="bg-amber-100 text-amber-800 border-amber-500"
          subtitle={`${Math.round(
            (financials.pending / financials.totalFees) * 100
          )}% of total`}
        />
        <FinancialCard
          title="Overdue"
          value={financials.overdue}
          icon="⚠️"
          color="bg-red-100 text-red-800 border-red-500"
          subtitle={`${Math.round(
            (financials.overdue / financials.totalFees) * 100
          )}% of total`}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Teachers Card */}
        <SectionCard
          title="Teachers"
          total={allTeacher.length}
          color="text-indigo-600"
          items={teacherSubjects.map((ts) => ({ name: ts.subject }))}
          onViewAll={() => navigate("/allTeacher")}
          onAddNew={() => navigate("/addUser")}
          icon="👨‍🏫"
        />

        {/* Students Card */}
        <SectionCard
          title="Students"
          total={allStudent.length}
          color="text-emerald-600"
          items={allClass?.map((cls) => ({
            name: cls.name,
            count: cls.student?.length || 0,
          }))}
          onViewAll={() => navigate("/ClassWiseData")}
          onAddNew={() => navigate("/addUser")}
          icon="👨‍🎓"
        />

        {/* Staff Card */}
        <SectionCard
          title="Staff"
          total={staffData.total}
          color="text-purple-600"
          items={staffData.byDepartment}
          onViewAll={() => navigate("/login")}
          onAddNew={() => navigate("/addUser")}
          icon="👨‍💼"
        />
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="bg-indigo-100 text-indigo-800 p-2 rounded-lg">
            ⚡
          </span>
          Quick Actions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={action.action}
              className={`${action.color} text-white py-3 px-4 rounded-xl transition-all shadow-md hover:shadow-lg flex flex-col items-center justify-center h-full`}
            >
              <span className="text-2xl mb-2">{action.icon}</span>
              <span className="text-sm font-medium text-center">
                {action.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
});

// Financial Card Component
const FinancialCard = ({ title, value, icon, color, subtitle }) => (
  <div
    className={`bg-white p-5 rounded-2xl shadow-sm border-l-4 ${color} flex items-start`}
  >
    <div className="text-3xl mr-4">{icon}</div>
    <div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1">₹{value.toLocaleString()}</p>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </div>
  </div>
);

// Reusable section card component
const SectionCard = ({
  title,
  total,
  color,
  items,
  onViewAll,
  onAddNew,
  icon,
}) => (
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <h2 className={`text-xl font-bold ${color}`}>{title}</h2>
      </div>
      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
        Total: {total}
      </span>
    </div>

    <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
      {items?.map((item, index) => (
        <div
          key={index}
          className="flex items-center hover:bg-gray-50 p-3 rounded-lg transition cursor-pointer border-b border-gray-100"
          onClick={onViewAll}
        >
          <div className="w-3/5">
            <p className="text-gray-700 font-medium truncate">{item.name}</p>
          </div>
          <div className="w-2/5 flex items-center">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{
                  width: `${(item.count / total) * 100}%`,
                }}
              ></div>
            </div>
            <span className="ml-2 text-gray-600 text-sm font-medium min-w-[30px] text-right">
              {item.count}
            </span>
          </div>
        </div>
      ))}
    </div>

    <div className="flex gap-3 mt-6">
      <button
        onClick={onViewAll}
        className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition text-sm font-medium"
      >
        View All
      </button>
      <button
        onClick={onAddNew}
        className="flex-1 py-2.5 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 rounded-lg transition text-sm font-medium"
      >
        Add New
      </button>
    </div>
  </div>
);

export default Cashier;
