import { useAllData } from "@/AllData/AllData";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function TeacherProfile() {
  // Sample teacher data
  const teacher = {
    id: 1,
    name: "Amandeep Singh",
    subject: "Mathematics",
    gradeLevels: ["Grade 10", "Grade 11"],
    contact: "amandeep@school.edu",
    phone: "9876543321",
    address: "123 Education Lane, Academic City",
    bio: "Dedicated mathematics teacher with 8 years of experience specializing in calculus and algebra. Passionate about making complex concepts accessible to all students.",
    qualifications: [
      "M.Sc. in Mathematics",
      "B.Ed. in Secondary Education",
      "Certified Advanced Mathematics Instructor",
    ],

    stats: {
      yearsExperience: 8,
      studentsTaught: 420,
      avgRating: 4.8,
      attendance: "97%",
    },
  };

  const location = useLocation();
  const { id } = useParams();

  const navigate = useNavigate();
  const [allteacherData, setallTeacherData] = useState([]);

  useEffect(() => {
    const allData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_USER_URL}/api/user/getUserData/${id}`
        );
        setallTeacherData({ ...res.data.user, ...res.data.allData });
      } catch (error) {
        console.log(error);
      }
    };
    allData();
  }, []);

  const teacherData = location.state?.allData || allteacherData;
  console.log(allteacherData);
  const { allTimeTable } = useAllData();

  const matchedSlots = [];

  allTimeTable.forEach((timeTable) => {
    timeTable.slots.forEach((slot) => {
      if (slot?.teacher?.userId?.name === teacherData.name) {
        matchedSlots.push({
          ...slot,
          day: timeTable.day,
          classId: timeTable.classId?.name || "Unknown Class",
        });
      }
    });
  });

  const groupedByDay = {};

  matchedSlots.forEach((slot) => {
    if (!groupedByDay[slot.day]) {
      groupedByDay[slot.day] = [];
    }
    groupedByDay[slot.day].push(slot);
  });

  const dayWiseArray = Object.entries(groupedByDay).map(([day, slots]) => ({
    day,
    classes: slots.map(
      (s) => `${s.classId} - ${s.subject} (${s.startTime} - ${s.endTime})`
    ),
  }));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button
        onClick={() => window.history.back()}
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md active:scale-95"
      >
        ← Go Back
      </button>

      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 p-8 flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-full w-48 h-48" />
            </div>
            <div className="p-8 flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-3xl font-bold text-gray-800">
                    {allteacherData?.name}
                  </div>
                  <div className="mt-2 text-xl text-blue-600 font-medium">
                    Subject-Teacher : {allteacherData?.subject}
                  </div>
                  <div className="mt-2 text-xl text-blue-600 font-medium">
                    Class-Teacher : {allteacherData?.classId?.name}
                  </div>

                  <div className="mt-1 text-gray-600">
                    Teaching {teacher?.gradeLevels.join(" and ")}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Contact Information
                  </h3>
                  <div className="mt-2">
                    <div className="flex items-center mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a
                        href={`mailto:${allteacherData?.email}`}
                        className="text-blue-600 hover:underline"
                      >
                        {allteacherData?.email}
                      </a>
                    </div>
                    <div className="flex items-center mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {allteacherData?.phone}
                    </div>
                    <div className="flex items-start mt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500 mr-2 mt-0.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{allteacherData?.address}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Qualifications
                  </h3>
                  <ul className="mt-2 space-y-1">
                    {allteacherData.qualification?.map(
                      (qualification, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {qualification}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats and Bio Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Teacher Stats */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Teaching Statistics
            </h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">
                    Years of Experience
                  </span>
                  <span className="text-sm font-bold">
                    {teacher.stats.yearsExperience} years
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{
                      width: `${(teacher.stats.yearsExperience / 10) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">
                    Students Taught
                  </span>
                  <span className="text-sm font-bold">
                    {teacher.stats.studentsTaught}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{
                      width: `${Math.min(
                        100,
                        teacher.stats.studentsTaught / 5
                      )}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">
                    Average Rating
                  </span>
                  <span className="text-sm font-bold">
                    {teacher.stats.avgRating}/5.0
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-yellow-500 h-2.5 rounded-full"
                    style={{ width: `${(teacher.stats.avgRating / 5) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">
                    Attendance
                  </span>
                  <span className="text-sm font-bold">
                    {teacher.stats.attendance}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: teacher.stats.attendance }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Teacher Bio */}
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-700 leading-relaxed">{teacher.bio}</p>

            <h3 className="mt-6 text-lg font-semibold text-gray-800 mb-3">
              Teaching Philosophy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I believe that every student has the potential to excel in
              mathematics when given the right tools and encouragement. My
              approach focuses on building strong foundational skills while
              making learning engaging through real-world applications. I
              emphasize critical thinking and problem-solving strategies that
              students can apply beyond the classroom.
            </p>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Weekly Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {dayWiseArray.map((daySchedule, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-3">
                  {daySchedule.day}
                </h3>
                <ul className="space-y-2">
                  {daySchedule.classes.map((cls, clsIndex) => (
                    <li
                      key={clsIndex}
                      className="bg-blue-50 p-2 rounded-md text-sm"
                    >
                      {cls}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3
            onClick={() =>
              navigate(`/attendence/${allteacherData?.classId?.name}`)
            }
            className="text-xl font-semibold text-blue-700 cursor-pointer hover:underline"
          >
            📋 Take Attendance for{" "}
            <span className="font-bold text-blue-900">
              {allteacherData?.classId?.name || "Class"}
            </span>
          </h3>
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3
            onClick={() => navigate(`/eventFrom/${allteacherData?.name}`)}
            className="text-xl font-semibold text-blue-700 cursor-pointer hover:underline"
          >
            Create Event{" "}
            <span className="font-bold text-blue-900">
              {allteacherData?.classId?.name || "Class"}
            </span>
          </h3>
        </div>
        <div className="mt-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3
            onClick={() => navigate(`/showExamTable`)}
            className="text-xl font-semibold text-blue-700 cursor-pointer hover:underline"
          >
            All Exam Time table
          </h3>
        </div>

        <div className="mt-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
          <h3
            onClick={() => navigate(`/resultData`)}
            className="text-xl font-semibold text-blue-700 cursor-pointer hover:underline"
          >
            Update Exam Mark <span className="font-bold text-blue-900"></span>
          </h3>
        </div>

        {/* Recent Activity */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <div className="text-sm text-gray-500">Today, 10:30 AM</div>
              <p>
                Posted new assignment:{" "}
                <span className="font-medium">
                  Calculus Chapter 5 Exercises
                </span>
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <div className="text-sm text-gray-500">Yesterday, 3:45 PM</div>
              <p>
                Graded{" "}
                <span className="font-medium">Algebra Midterm Exams</span>
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <div className="text-sm text-gray-500">May 15, 2:00 PM</div>
              <p>
                Attended{" "}
                <span className="font-medium">
                  Mathematics Curriculum Planning Meeting
                </span>
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4 py-2">
              <div className="text-sm text-gray-500">May 14, 4:30 PM</div>
              <p>
                Updated student records for{" "}
                <span className="font-medium">Grade 10 Mathematics</span>
              </p>
            </div>
          </div>
        </div>
      </div>
     
      <br />
      <div className="flex space-x-2">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Edit Profile
        </button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
          Export
        </button>
      </div>
    </div>
  );
}

export default TeacherProfile;
