import { useAllData } from "@/AllData/AllData";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function NewClass() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [apiError, setApiError] = useState("");
  const [apiSuccess, setApiSuccess] = useState("");
  const navigate = useNavigate();

  const {allClass} = useAllData()
  console.log(allClass)

  const onSubmit = async (data) => {
    setApiError("");
    setApiSuccess("");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_USER_URL}/api/class/addClass`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res.data.success) {
        setApiSuccess(res.data.message);
        reset();
        navigate("/cashier");
      } else {
        setApiError(res.data.message || "Something went wrong");
      }
    } catch (error) {
      const message =
        error.response?.data?.message || "Server error. Try again later.";
      setApiError(message);
    }
  };



  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8 mt-10">
        <button
          onClick={() => window.history.back()}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md active:scale-95"
        >
          ← Go Back
        </button>

        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Add New Class
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Class Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter class name"
              className={`mt-1 block w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring focus:ring-blue-200`}
              {...register("name", {
                required: "Class name is required",
                minLength: {
                  value: 1,
                  message: "Must be at least 1 character",
                },
                pattern: {
                  value: /^Class-\d+[A-Z]?$/,
                  message:
                    "Class name must be in format like Class-1 or Class-1B",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
          >
            Add Class
          </button>
        </form>

        {/* Success Message */}
        {apiSuccess && (
          <p className="mt-4 text-green-600 font-medium text-sm text-center">
            {apiSuccess}
          </p>
        )}

        {/* Error Message */}
        {apiError && (
          <p className="mt-4 text-red-600 font-medium text-sm text-center">
            {apiError}
          </p>
        )}
      </div>
      <div className="overflow-x-auto mt-8">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="py-3 px-6 text-left">Class Name</th>
              <th className="py-3 px-6 text-left">Total Students</th>
            </tr>
          </thead>
          <tbody>
            {allClass.map((data, index) => (
              <tr
                key={data._id || index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-3 px-6">{data.name}</td>
                <td className="py-3 px-6">{data.student?.length || 0}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default NewClass;
