import { useAllData } from "@/AllData/AllData";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function StudentDashboard() {
  // Sample data
  const student = {
    name: "Raj Sharma",
    grade: "Grade 10",
    studentId: "STU-2023-105",
    attendance: "95%",
    overallGrade: "A-",
    nextClass: "Mathematics",
    nextClassTime: "10:00 AM",
    upcomingExam: "Chemistry Midterm",
    examDate: "June 15, 2023",
  };

  const upcomingClasses = [
    {
      id: 1,
      subject: "Mathematics",
      time: "10:00 - 11:30",
      room: "Room 302",
      teacher: "Mr. Singh",
    },
    {
      id: 2,
      subject: "Physics",
      time: "12:00 - 1:30",
      room: "Lab 4",
      teacher: "Ms. Sharma",
    },
    {
      id: 3,
      subject: "Computer Science",
      time: "2:00 - 3:30",
      room: "Computer Lab",
      teacher: "Mr. Mehta",
    },
  ];

  const announcements = [
    {
      id: 1,
      title: "School Science Fair",
      date: "June 20, 2023",
      content:
        "All students are invited to participate in the annual science fair. Register by June 10.",
    },
    {
      id: 2,
      title: "Library Renovation",
      date: "June 5-15, 2023",
      content:
        "The school library will be closed for renovation during this period.",
    },
    {
      id: 3,
      title: "Sports Day",
      date: "July 1, 2023",
      content:
        "Annual sports day competitions. Sign up with your sports teacher.",
    },
  ];

  const { allEvent } = useAllData();
  const assignments = [
    {
      id: 1,
      subject: "Mathematics",
      title: "Calculus Problems",
      dueDate: "Tomorrow",
      status: "Pending",
    },
    {
      id: 2,
      subject: "English",
      title: "Essay: Modern Literature",
      dueDate: "3 days",
      status: "In Progress",
    },
    {
      id: 3,
      subject: "Chemistry",
      title: "Lab Report: Chemical Reactions",
      dueDate: "1 week",
      status: "Pending",
    },
  ];

  const performanceData = [
    { subject: "Mathematics", grade: "A", progress: 92 },
    { subject: "Physics", grade: "B+", progress: 85 },
    { subject: "Chemistry", grade: "A-", progress: 89 },
    { subject: "English", grade: "B", progress: 82 },
    { subject: "Computer Science", grade: "A", progress: 94 },
  ];

  const recentActivities = [
    { id: 1, action: "Submitted Math Assignment", time: "2 hours ago" },
    { id: 2, action: "Viewed Chemistry Notes", time: "5 hours ago" },
    { id: 3, action: "Joined Study Group", time: "Yesterday" },
    { id: 4, action: "Downloaded Physics Material", time: "2 days ago" },
  ];

  const [allStDetails, setAllStDetails] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(allStDetails);

  useEffect(() => {
    async function Student() {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/user/getUserData/${id}`
        );

        setAllStDetails({ ...res.data.user, ...res.data.allData });
      } catch (error) {}
    }
    Student();
  }, []);

  const { allTimeTable } = useAllData();
  console.log(allTimeTable);

  const filterTimeTable = allTimeTable.filter(
    (data) => data.classId?.name === allStDetails.classId?.name
  );

  console.log(filterTimeTable);

  const classId = allStDetails.classId?._id;
  const className = allStDetails.classId?.name;
  const userId = id;
  const [attendanceData, setAttendence] = useState();
  console.log(attendanceData?.attendancePercentage);
  useEffect(() => {
    async function attendance(userId, classId) {
      try {
        const res = await axios.post(
          `http://localhost:5000/api/attendence/list/${classId}`,
          { userId },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res.data);
        setAttendence(res.data);
      } catch (error) {
        console.error("Attendance fetch error:", error);
      }
    }

    if (userId && classId) {
      attendance(userId, classId);
    }
  }, [userId, classId]);

  const [timeTable, setTimeTable] = useState([]);
  const [errmsg, seterrmsg] = useState("");
  console.log(timeTable);

  useEffect(() => {
    if (!className) return;

    async function getExamTimeTable() {
      try {
        seterrmsg(""); // clear previous error
        setTimeTable([]); // reset previous data

        const res = await axios.get(
          `http://localhost:5000/api/exam/getName/${className}`
        );

        if (res.data.success) {
          setTimeTable(res.data.exam); // set valid exam data
          console.log("Exam Data:", res.data.exam);
        } else {
          seterrmsg(res.data.message || "Something went wrong.");
        }
      } catch (error) {
        console.error("Timetable fetch error:", error);
        seterrmsg(
          error.response?.data?.message ||
            "Failed to fetch timetable. Please try again later."
        );
      }
    }

    getExamTimeTable();
  }, [className]);
  const getDuration = (start, end) => {
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);

    let startMinutes = startH * 60 + startM;
    let endMinutes = endH * 60 + endM;

    let diff = endMinutes - startMinutes;
    if (diff < 0) diff += 24 * 60; // Handle overnight exams

    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;

    return `${hours > 0 ? hours + " hr " : ""}${minutes} min`;
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        {allStDetails && (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Student Dashboard
              </h1>
              <p className="text-gray-600">Welcome back, {allStDetails.name}</p>
            </div>

            <div className="mt-4 md:mt-0 bg-white rounded-lg shadow-sm p-4 flex items-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16" />
              <div className="ml-4">
                <div className="font-medium">{allStDetails.name}</div>
                <div className="text-sm text-gray-600">
                  {className || "N/A"} | {allStDetails._id?.slice(-4)}
                </div>
                <div className="text-sm text-gray-600">
                  {allStDetails.gender} | {allStDetails.phone}
                </div>
                <div className="text-sm text-gray-600">
                  {allStDetails.email}
                </div>
                <div className="text-sm text-gray-600">
                  Dob: {allStDetails.dob?.split("T")[0]}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div
            onClick={() =>
              navigate(`/attendenceDetails/${id}`, {
                state: { stAttendence: attendanceData },
              })
            }
            className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
          >
            <h3 className="text-gray-500 text-sm font-medium">Attendance</h3>
            <p className="text-2xl font-bold mt-2">
              {attendanceData?.attendancePercentage}
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <h3 className="text-gray-500 text-sm font-medium">Overall Grade</h3>
            <p className="text-2xl font-bold mt-2">{student.overallGrade}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500">
            <h3 className="text-gray-500 text-sm font-medium">Next Class</h3>
            <p className="text-xl font-bold mt-2">{student.nextClass}</p>
            <p className="text-gray-600">{student.nextClassTime}</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
            <h3 className="text-gray-500 text-sm font-medium">Upcoming Exam</h3>
            <p className="text-xl font-bold mt-2">{student.upcomingExam}</p>
            <p className="text-gray-600">{student.examDate}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Classes */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Upcoming Classes
              </h2>
              <button className="text-blue-600 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {upcomingClasses?.map((classItem) => (
                <div
                  key={classItem.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-blue-50 transition"
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        {classItem.subject}
                      </h3>
                      <p className="text-gray-600">{classItem.teacher}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{classItem.time}</p>
                      <p className="text-sm text-gray-600">{classItem.room}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Materials
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assignments */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Assignments</h2>
              <button className="text-blue-600 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {assignments?.map((assignment) => (
                <div
                  key={assignment.id}
                  className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition"
                >
                  <div className="flex justify-between">
                    <div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          assignment.status === "Pending"
                            ? "bg-red-100 text-red-800"
                            : assignment.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {assignment.status}
                      </span>
                      <h3 className="font-bold text-lg text-gray-800 mt-2">
                        {assignment.title}
                      </h3>
                      <p className="text-gray-600">{assignment.subject}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Due in</p>
                      <p className="font-medium">{assignment.dueDate}</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm">
                      Start Assignment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Performance */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Performance</h2>
              <button className="text-blue-600 text-sm font-medium">
                View Report
              </button>
            </div>

            <div className="space-y-4">
              {performanceData?.map((subject, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{subject.subject}</span>
                    <span className="font-bold">
                      {subject.grade} ({subject.progress}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${
                        subject.progress >= 90
                          ? "bg-green-600"
                          : subject.progress >= 80
                          ? "bg-blue-600"
                          : subject.progress >= 70
                          ? "bg-yellow-500"
                          : "bg-red-600"
                      }`}
                      style={{ width: `${subject.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="font-bold text-lg text-gray-800 mb-4">
                Recent Activities
              </h3>
              <div className="space-y-3">
                {recentActivities?.map((activity) => (
                  <div key={activity.id} className="flex items-start">
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-8 h-8 mt-1" />
                    <div className="ml-3">
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Announcements & Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Announcements */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                School Announcements
              </h2>
              <button className="text-blue-600 text-sm font-medium">
                View All
              </button>
            </div>

            <div className="space-y-6">
              {allEvent?.map((event) => (
                <div
                  key={event._id}
                  className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50 p-3 rounded"
                >
                  <div className="flex justify-between">
                    <h3 className="font-bold text-lg text-gray-800">
                      {event.title}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600">{event.description}</p>
                  {event.createdBy && (
                    <p className="mt-1 text-sm text-gray-500">
                      Created by:{" "}
                      {typeof event.createdBy === "string"
                        ? event.createdBy
                        : event.createdBy.name}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Weekly Schedule
              </h2>
              <button className="text-blue-600 text-sm font-medium">
                Download
              </button>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-md p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {filterTimeTable?.map((daySchedule, index) => (
                  <div key={index} className="border rounded-lg p-4 mb-4">
                    <h3 className="font-bold text-lg text-gray-800 mb-3">
                      {daySchedule.day}
                    </h3>
                    <ul className="space-y-2">
                      {daySchedule?.slots?.map((slot, slotIndex) => (
                        <li
                          key={slotIndex}
                          className="bg-blue-50 p-2 rounded-md text-sm flex justify-between"
                        >
                          <span className="font-medium">{slot.subject}</span>
                          <span>
                            {slot.startTime} - {slot.endTime}
                          </span>
                          <span className="text-gray-600">
                            {slot.teacher?.userId?.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:col-span-1 bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Exam Schedule</h2>
              <button className="text-blue-600 text-sm font-medium">
                Download
              </button>
            </div>

            <div>
              <div className="overflow-x-auto mt-6 shadow-md rounded-lg border">
                {timeTable?.subjects?.length > 0 ? (
                  <table className="min-w-full text-sm text-left text-gray-700">
                    <thead className="bg-blue-100 text-blue-900 uppercase text-xs font-semibold tracking-wider">
                      <tr>
                        <th className="px-6 py-3 border-b">Subject</th>
                        <th className="px-6 py-3 border-b">Date</th>
                        <th className="px-6 py-3 border-b">Time</th>
                        <th className="px-6 py-3 border-b">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {timeTable.subjects.map((subject, index) => (
                        <tr
                          key={subject._id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="px-6 py-4 border-b font-medium">
                            {subject.subject}
                          </td>
                          <td className="px-6 py-4 border-b">
                            {formatDate(subject.date)}
                          </td>
                          <td className="px-6 py-4 border-b">
                            <div className="flex items-center gap-2">
                              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                                {subject.startTime}
                              </span>
                              <span className="text-gray-500">→</span>
                              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-semibold">
                                {subject.endTime}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 border-b">
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs font-semibold">
                              {getDuration(subject.startTime, subject.endTime)}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="text-center text-gray-500 py-10">
                    No exam timetable available.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="#"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-gray-50 transition"
          >
            <div className="bg-blue-100 p-3 rounded-full inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div className="mt-2 font-medium">Study Materials</div>
          </a>
          <a
            href="#"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-gray-50 transition"
          >
            <div className="bg-green-100 p-3 rounded-full inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="mt-2 font-medium">Assignments</div>
          </a>
          <a
            href="#"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-gray-50 transition"
          >
            <div className="bg-yellow-100 p-3 rounded-full inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="mt-2 font-medium">Calendar</div>
          </a>
          <a
            href="#"
            className="bg-white p-4 rounded-lg shadow-md text-center hover:bg-gray-50 transition"
          >
            <div className="bg-purple-100 p-3 rounded-full inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <div className="mt-2 font-medium">Profile</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
