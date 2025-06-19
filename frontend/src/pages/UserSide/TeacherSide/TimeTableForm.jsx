
import { useAllData } from "@/AllData/AllData";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

function TimeTableForm() {
  const { allClass, allTeacher } = useAllData();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [slots, setSlots] = useState([
    { startTime: "", endTime: "", subject: "", teacher: "" },
  ]);
  const [slotErrors, setSlotErrors] = useState([]);

  // Add new slot
  const addSlot = () => {
    setSlots([
      ...slots,
      { startTime: "", endTime: "", subject: "", teacher: "" },
    ]);
    setSlotErrors([...slotErrors, ""]);
  };

  // Remove slot
  const removeSlot = (index) => {
    if (slots.length > 1) {
      const updatedSlots = [...slots];
      updatedSlots.splice(index, 1);
      setSlots(updatedSlots);
      
      const updatedErrors = [...slotErrors];
      updatedErrors.splice(index, 1);
      setSlotErrors(updatedErrors);
    }
  };

  // Update slot data
  const handleSlotChange = (index, field, value) => {
    const updatedSlots = [...slots];
    updatedSlots[index][field] = value;
    setSlots(updatedSlots);

    // Validate time
    if ((field === 'startTime' || field === 'endTime') && 
        updatedSlots[index].startTime && 
        updatedSlots[index].endTime) {
      const newErrors = [...slotErrors];
      if (updatedSlots[index].startTime >= updatedSlots[index].endTime) {
        newErrors[index] = "End time must be after start time";
      } else {
        newErrors[index] = "";
      }
      setSlotErrors(newErrors);
    }
  };

  // Submit form
  const onSubmit = async (data) => {
    // Check for time errors
    const hasErrors = slotErrors.some(error => error !== "");
    if (hasErrors) {
      alert("Please fix time slot errors before submitting");
      return;
    }

    const formattedData = {
      classId: data.class,
      day: data.day,
      slots,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/api/timetable/addTimeTable",
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", res.data);
      reset();
      setSlots([{ startTime: "", endTime: "", subject: "", teacher: "" }]);
      setSlotErrors([]);
      alert("Timetable created successfully!");
    } catch (error) {
      console.error("Submission failed:", error.message);
      alert("Submission failed: " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-4 md:p-6">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 md:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">
            Create Class Schedule
          </h1>
          <p className="text-gray-600 mt-2">
            Fill in class details and time slots
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Class */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Class
              </label>
              <select
                {...register("class", { required: "Class is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              >
                <option value="">Select Class</option>
                {allClass.map((data) => (
                  <option key={data._id} value={data._id}>
                    {data.name}
                  </option>
                ))}
              </select>
              {errors.class && (
                <p className="mt-1 text-sm text-red-600">{errors.class.message}</p>
              )}
            </div>

            {/* Day */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Day
              </label>
              <select
                {...register("day", { required: "Day is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              >
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
              </select>
              {errors.day && (
                <p className="mt-1 text-sm text-red-600">{errors.day.message}</p>
              )}
            </div>
          </div>

          {/* Dynamic Slots */}
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Time Slots</h2>
              <button
                type="button"
                onClick={addSlot}
                className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                Add Slot
              </button>
            </div>

            {slots.map((slot, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-5 bg-gray-50 shadow-sm relative">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Slot {index + 1}
                  </h3>
                  {slots.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSlot(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Start Time */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Start Time</label>
                    <input
                      type="time"
                      value={slot.startTime}
                      onChange={(e) =>
                        handleSlotChange(index, "startTime", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  {/* End Time */}
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">End Time</label>
                    <input
                      type="time"
                      value={slot.endTime}
                      onChange={(e) =>
                        handleSlotChange(index, "endTime", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                    {slotErrors[index] && (
                      <p className="mt-1 text-sm text-red-600">{slotErrors[index]}</p>
                    )}
                  </div>

                  {/* Subject */}
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 mb-1">Subject</label>
                    <input
                      type="text"
                      value={slot.subject}
                      onChange={(e) =>
                        handleSlotChange(index, "subject", e.target.value)
                      }
                      placeholder="Enter subject name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    />
                  </div>

                  {/* Teacher */}
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-600 mb-1">Teacher</label>
                    <select
                      value={slot.teacher}
                      onChange={(e) =>
                        handleSlotChange(index, "teacher", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select Teacher</option>
                      {allTeacher.map((teacher) => (
                        <option key={teacher._id} value={teacher._id}>
                          {teacher.userId?.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition duration-300"
          >
            Create Timetable
          </button>
        </form>
      </div>
    </div>
  );
}

export default TimeTableForm;