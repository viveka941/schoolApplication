import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

function AddStudentDetails() {
  const { userId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [allClass,setAllClass]=useState()
 useEffect(()=>{
  const getAllClass = async () => {
    try {
      const res = await axios.get("http:")
    } catch (error) {}
  };
  getAllClass()
 },[])
  const onSubmit = async(data) => {
    console.log({ ...data, userId }); // Include userId with form data
    try {
      const res = await axios.post("http://localhost:5000/")
    } catch (error) {
      
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add Student Details
        </h2>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            type="date"
            {...register("dob", {
              required: "Student date of birth is required",
            })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          />
          {errors.dob && (
            <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
          )}
        </div>

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
            Gender
          </label>
          <select
            {...register("gender", { required: "Student gender is required" })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          >
            <option value="">Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
          )}
        </div>

        {/* Father's Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Father's Name
          </label>
          <input
            type="text"
            {...register("fatherName", {
              required: "Student father's name is required",
            })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          />
          {errors.fatherName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fatherName.message}
            </p>
          )}
        </div>

        {/* Mother's Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Mother's Name
          </label>
          <input
            type="text"
            {...register("motherName", {
              required: "Student mother's name is required",
            })}
            className="mt-1 block w-full border rounded-md px-3 py-2 shadow-sm focus:ring-blue-300 focus:border-blue-400"
          />
          {errors.motherName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.motherName.message}
            </p>
          )}
        </div>

        {/* Address */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            {...register("address", {
              required: "Student address is required",
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

export default AddStudentDetails;
