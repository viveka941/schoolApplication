import { useAllData } from "@/AllData/AllData";
import axios from "axios";
import React, { useEffect, useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

function AddTeacher() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { allClass } = useAllData();

  const onSubmit = async (data) => {
   
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_USER_URL}/api/teacher/addTeacher`,
        { ...data, userId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("succesfull add new Teacher");
      navigate("/allTeacher");
    } catch (error) {
      console.log("Server is not responding " + error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md mb-4">
        <button
          onClick={() => window.history.back()}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md active:scale-95"
        >
          ← Go Back
        </button>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add Teacher Details
        </h2>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="text"
            {...register("phone", {
              required: "Student phone number is required",
              minLength: {
                value: 10,
                message: "minimum 10 digit number",
              },
              maxLength: {
                value: 10,
                message: "minimum 10 digit number",
              },
            })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            subject
          </label>
          <select
            {...register("subject", {
              required: "Teaching subject is required",
            })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          >
            <option value="">Select subject</option>
            <option value="Math">Math</option>
            <option value="Hisotry">Hisotry</option>
            <option value="Science">Science</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Art">Art</option>
            <option value="P.T">P.T</option>
          </select>
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            class
          </label>
          <select
            {...register("classId", {
              required: "Teacher assingn class is required",
            })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          >
            <option value="">Select class</option>

            {allClass.map((data, i) => (
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

        {/* Father's Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Salary
          </label>
          <input
            type="number"
            {...register("salary", {
              required: "Salary is required",
            })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          />
          {errors.salary && (
            <p className="text-red-500 text-sm mt-1">{errors.salary.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Qualification
          </label>
          <input
            type="text"
            placeholder="write formate like is-> MSC, BCA, MA"
            {...register("qualification", {
              required: "Teacher qualification is required ",
            })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          />
          {errors.qualification && (
            <p className="text-red-500 text-sm mt-1">
              {errors.qualification.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            {...register("address", {
              required: "Teacher address is required",
            })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">
              {errors.address.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Submit Details
        </button>
      </form>
    </div>
  );
}

export default AddTeacher;
