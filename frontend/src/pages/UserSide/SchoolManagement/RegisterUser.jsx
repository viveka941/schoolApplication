import axios from "axios";
import React, { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function RegisterUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate()
  const [Message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_USER_URL}/api/user/addUser`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

     
      // Always show message from server
      setMessage(res.data.message);

      if (res.data.success) {
        const role = res.data.user.role;
        const userId = res.data.user._id;

        switch (role) {
          case "Student":
            navigate(`/addStudentDetails/${userId}`);
            break;
          case "Teacher":
            navigate(`/addTeacherDetails/${userId}`);
            break;
          case "Staff":
            navigate(`/addStaffDetails/${userId}`);
            break;
          default:
            alert("Role is not defined");
        }
      }
    } catch (error) {
      // Fallback in case server is down or doesn't send proper response
      const errMsg =
        error.response?.data?.message || "Server is not responding";
      setMessage(errMsg);
     
    }

    reset();
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register User
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            {...register("name", { required: "User name is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "User email is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "User password is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div className="mb-6">
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role
          </label>
          <select
            {...register("role", { required: "Role is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 bg-white shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          >
            <option value="">Select role</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Staff">Staff</option>
            <option value="Counsellor">Counsellor</option>
          </select>
          {errors.role && (
            <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Register
        </button>
        {Message && (
          <p className="text-green-600 font-semibold mt-2">{Message}</p>
        )}
      </form>
    </div>
  );
}

export default RegisterUser;
