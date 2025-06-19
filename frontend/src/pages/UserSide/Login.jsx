import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Submitted data:", data);
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/user/userlogin",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res.data.success) {
        // Save user data
        localStorage.setItem("user", JSON.stringify(res.data.user));
        const role = res.data.user.role;

        console.log(res.data.user)
        

        // Redirect based on role
        switch (role) {
          case "Student":
            navigate("/studentProfile",{state:{allData:res.data.user}});
            break;
          case "Teacher":
            navigate("/teacherProfile",{state:{allData:res.data.user}});
            break;
          case "Counsellor":
            navigate("/cashier");
            break;
          case "Principal":
            navigate("/principal-dashboard");
            break;
          default:
            alert("Role not recognized");
        }

        reset(); // Reset form after login
      } else {
        alert("Login failed: " + res.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Invalid credentials or server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Role */}
        <div className="mb-6">
          <label
            htmlFor="role"
            className="block text-gray-700 font-medium mb-1"
          >
            Select your role
          </label>
          <select
            id="role"
            {...register("role", { required: "Please select a role" })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select role --</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Principal">Principal</option>
            <option value="Counsellor">Counsellor</option>
          </select>
          {errors.role && (
            <p className="text-red-600 text-sm mt-1">{errors.role.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 disabled:bg-gray-400"
        >
          {loading ? "Logging in..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Login;
