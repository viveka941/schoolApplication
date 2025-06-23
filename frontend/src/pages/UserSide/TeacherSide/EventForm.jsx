import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from "axios";

function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { teacherId } = useParams();

  const onSubmit = async (data) => {
    try {
      const payload = { ...data, createdBy: teacherId };
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_USER_URL}/api/event/addEvent`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      alert("Event created successfully!");
      reset();
    } catch (error) {
      console.error("Error creating event:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-8">
      <button
        onClick={() => window.history.back()}
        className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md active:scale-95"
      >
        ← Go Back
      </button>
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Event title is required" })}
            className="w-full border px-3 py-2 rounded-md"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="description">
            Description
          </label>
          <input
            type="text"
            id="description"
            {...register("description", {
              required: "Event description is required",
            })}
            className="w-full border px-3 py-2 rounded-md"
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label className="block font-semibold mb-1" htmlFor="date">
            Date
          </label>
          <input
            type="date"
            id="date"
            {...register("date", { required: "Event date is required" })}
            className="w-full border px-3 py-2 rounded-md"
          />
          {errors.date && (
            <p className="text-red-500 text-sm">{errors.date.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Event
        </button>
      </form>
    </div>
  );
}

export default EventForm;
