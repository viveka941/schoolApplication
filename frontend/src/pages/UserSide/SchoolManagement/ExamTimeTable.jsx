import axios from "axios";
import React, { useEffect, useState } from "react";

function ExamTimeTable() {
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);

  useEffect(() => {
    async function allExam() {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_USER_URL}/api/exam/class`);
        setExams(res.data.exams);
        // Select first exam by default
        if (res.data.exams.length > 0) {
          setSelectedExam(res.data.exams[0]);
        }
      } catch (error) {
        console.log("Exams not found", error);
      }
    }
    allExam();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const getDuration = (start, end) => {
    const startTime = new Date(`2000-01-01T${start}:00`);
    const endTime = new Date(`2000-01-01T${end}:00`);
    const diff = (endTime - startTime) / 60000;
    const hours = Math.floor(diff / 60);
    const minutes = diff % 60;
    return `${hours} hr ${minutes} min`;
  };

  const handleExamChange = (e) => {
    const examId = e.target.value;
    const exam = exams.find((exam) => exam._id === examId);
    setSelectedExam(exam);
  };

  if (exams.length === 0) {
    return <div className="text-center p-8">Loading exams...</div>;
  }

  if (!selectedExam) {
    return <div className="text-center p-8">No exam selected</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Exam Selection Dropdown */}
      <button
        onClick={() => window.history.back()}
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md active:scale-95"
      >
        ← Go Back
      </button>

      <div className="mb-6">
        <label
          htmlFor="exam-select"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select Exam:
        </label>
        <select
          id="exam-select"
          onChange={handleExamChange}
          value={selectedExam._id}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {exams.map((exam) => (
            <option key={exam._id} value={exam._id}>
              {exam.name} - {exam.className}
            </option>
          ))}
        </select>
      </div>

      {/* Exam Details */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {selectedExam.name}
        </h1>
        <div className="flex justify-center items-center gap-4 text-gray-600">
          <p className="bg-blue-100 px-3 py-1 rounded-full text-sm">
            Class: {selectedExam.className}
          </p>
          <p className="bg-green-100 px-3 py-1 rounded-full text-sm">
            Exam ID: {selectedExam._id}
          </p>
        </div>
      </div>

      {/* Timetable */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-3 px-4 text-left border-b">Subject</th>
              <th className="py-3 px-4 text-left border-b">Date</th>
              <th className="py-3 px-4 text-left border-b">Time</th>
              <th className="py-3 px-4 text-left border-b">Duration</th>
            </tr>
          </thead>
          <tbody>
            {selectedExam.subjects.map((subject, index) => (
              <tr
                key={subject._id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-3 px-4 border-b">
                  <div className="font-medium">{subject.subject}</div>
                </td>
                <td className="py-3 px-4 border-b">
                  {formatDate(subject.date)}
                </td>
                <td className="py-3 px-4 border-b">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 px-2 py-1 rounded text-sm">
                      {subject.startTime}
                    </span>
                    <span>→</span>
                    <span className="bg-red-100 px-2 py-1 rounded text-sm">
                      {subject.endTime}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4 border-b">
                  <span className="bg-purple-100 px-2 py-1 rounded text-sm">
                    {getDuration(subject.startTime, subject.endTime)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <div className="text-sm text-gray-500">
          <p>Created: {new Date(selectedExam.createdAt).toLocaleString()}</p>
          <p>
            Last Updated: {new Date(selectedExam.updatedAt).toLocaleString()}
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Print Timetable
          </button>
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExamTimeTable;
