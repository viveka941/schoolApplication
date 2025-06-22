import { useAllData } from "@/AllData/AllData";
import axios from "axios";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

function ExamForm() {
  const { allClass } = useAllData();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "", // Changed from examName to match backend
      classId: "",
      subjects: [{ subject: "", date: "", startTime: "", endTime: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "subjects",
  });

  const onSubmit = async (data) => {
    console.log("Exam Timetable Data:", data);
    try {
      // Format subjects with proper date objects
      const formattedData = {
        ...data,
        subjects: data.subjects.map((subject) => ({
          ...subject,
          date: new Date(subject.date).toISOString(),
        })),
      };

      const res = await axios.post(
        "http://localhost:5000/api/exam/create",
        formattedData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(res.data.message);
      reset();
    } catch (error) {
      console.error("Error creating exam:", error);
      alert(error.response?.data?.message || "Failed to create exam timetable");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">
        Create Exam Timetable
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Exam Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Exam Name *
          </label>
          <input
            type="text"
            className={`w-full px-3 py-2 border rounded-md ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            {...register("name", {
              // Changed from examName to name
              required: "Exam name is required",
              minLength: {
                value: 3,
                message: "Exam name must be at least 3 characters",
              },
            })}
            placeholder="e.g., Final Exams, Mid-Terms"
          />
          {errors.name && ( // Changed from examName to name
            <p className="mt-1 text-sm text-red-600">
              {errors.name.message} {/* Changed from examName to name */}
            </p>
          )}
        </div>

        {/* Class */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Class *
          </label>
          <select
            {...register("classId", {
              required: "Class selection is required",
            })}
            className={`mt-1 block w-full border rounded-md px-3 py-2 shadow-sm ${
              errors.classId ? "border-red-500" : "border-gray-300"
            }`}
          >
            <option value="">Select class</option>
            {allClass.map((data) => (
              <option key={data._id} value={data._id}>
                {data.name}
              </option>
            ))}
          </select>
          {errors.classId && (
            <p className="text-red-500 text-sm mt-1">
              {errors.classId.message}
            </p>
          )}
        </div>

        {/* Subjects Section */}
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Subjects Schedule</h2>
            <button
              type="button"
              className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600"
              onClick={() =>
                append({ subject: "", date: "", startTime: "", endTime: "" })
              }
            >
              + Add Subject
            </button>
          </div>

          {fields.map((field, index) => (
            <div
              key={field.id}
              className="mb-6 p-4 border rounded-lg bg-gray-50"
            >
              <div className="flex justify-between mb-3">
                <h3 className="font-medium">Subject #{index + 1}</h3>
                {fields.length > 1 && (
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700 text-sm"
                    onClick={() => remove(index)}
                  >
                    Remove
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Subject Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject Name *
                  </label>
                  <select
                    {...register(`subjects.${index}.subject`, {
                      // Fixed: moved inside subjects array
                      required: "Subject selection is required",
                    })}
                    className={`mt-1 block w-full border rounded-md px-3 py-2 shadow-sm ${
                      errors.subjects?.[index]?.subject
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select subject</option>
                    <option value="Math">Math</option>
                    <option value="History">History</option>{" "}
                    {/* Fixed spelling */}
                    <option value="Science">Science</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Art">Art</option>
                    <option value="P.T">P.T</option>
                  </select>
                  {errors.subjects?.[index]?.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subjects[index].subject.message}
                    </p>
                  )}
                </div>

                {/* Exam Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Exam Date *
                  </label>
                  <input
                    type="date"
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.subjects?.[index]?.date
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...register(`subjects.${index}.date`, {
                      required: "Exam date is required",
                    })}
                  />
                  {errors.subjects?.[index]?.date && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subjects[index].date.message}
                    </p>
                  )}
                </div>

                {/* Start Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Time *
                  </label>
                  <input
                    type="time"
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.subjects?.[index]?.startTime
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...register(`subjects.${index}.startTime`, {
                      required: "Start time is required",
                    })}
                  />
                  {errors.subjects?.[index]?.startTime && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subjects[index].startTime.message}
                    </p>
                  )}
                </div>

                {/* End Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Time *
                  </label>
                  <input
                    type="time"
                    className={`w-full px-3 py-2 border rounded-md ${
                      errors.subjects?.[index]?.endTime
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...register(`subjects.${index}.endTime`, {
                      required: "End time is required",
                      validate: (value, formValues) => {
                        const startTime = formValues.subjects[index].startTime;
                        return (
                          value > startTime ||
                          "End time must be after start time"
                        );
                      },
                    })}
                  />
                  {errors.subjects?.[index]?.endTime && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subjects[index].endTime.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form Actions */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            onClick={() => reset()}
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Timetable
          </button>
        </div>
      </form>
    </div>
  );
}

export default ExamForm;
