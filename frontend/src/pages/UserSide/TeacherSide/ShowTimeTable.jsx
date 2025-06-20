import React from "react";
import { useAllData } from "@/AllData/AllData";

// Define consistent weekday order
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function ShowTimeTable() {
  const { allTimeTable, loading } = useAllData();

  if (loading) {
    return (
      <div className="text-center py-10 text-lg font-medium">
        Loading timetable...
      </div>
    );
  }

  // Organize data by class
  const classesTimetable = {};
  allTimeTable.forEach((entry) => {
    const className = entry.classId?.name || "N/A";

    if (!classesTimetable[className]) {
      classesTimetable[className] = {};
    }

    classesTimetable[className][entry.day] = entry.slots;
  });

  // Get unique time slots across all classes
  const allTimeSlots = new Set();
  allTimeTable.forEach((entry) => {
    entry.slots.forEach((slot) => {
      const timeKey = `${slot.startTime}-${slot.endTime}`;
      allTimeSlots.add(timeKey);
    });
  });

  // Convert to array and sort chronologically
  const sortedTimeSlots = Array.from(allTimeSlots).sort((a, b) => {
    const [aStart] = a.split("-");
    const [bStart] = b.split("-");
    return aStart.localeCompare(bStart);
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-800">
        Class Timetables
      </h1>

      {Object.keys(classesTimetable).length === 0 ? (
        <p className="text-center text-gray-600 py-10">
          No timetable data available.
        </p>
      ) : (
        Object.entries(classesTimetable).map(([className, daysData]) => (
          <div
            key={className}
            className="mb-10 bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="bg-indigo-700 p-4">
              <h2 className="text-xl font-bold text-white">
                Class: {className} Timetable
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-3 text-left border">Time Slot</th>
                    {WEEK_DAYS.map((day) => (
                      <th
                        key={day}
                        className="p-3 text-center border border-gray-200 min-w-[120px]"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedTimeSlots.map((timeSlot) => {
                    const [start, end] = timeSlot.split("-");
                    return (
                      <tr key={timeSlot} className="hover:bg-gray-50">
                        <td className="p-3 font-medium border">
                          {start} - {end}
                        </td>

                        {WEEK_DAYS.map((day) => {
                          const slot = daysData[day]?.find(
                            (s) => `${s.startTime}-${s.endTime}` === timeSlot
                          );

                          return (
                            <td
                              key={`${day}-${timeSlot}`}
                              className="p-3 border text-center"
                            >
                              {slot ? (
                                <div className="flex flex-col items-center">
                                  <span className="font-medium text-indigo-700">
                                    {slot.subject}
                                  </span>
                                  <span className="text-sm text-gray-600 mt-1">
                                    {slot.teacher?.userId?.name || "N/A"}
                                  </span>
                                </div>
                              ) : (
                                <span className="text-gray-400">-</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ShowTimeTable;
