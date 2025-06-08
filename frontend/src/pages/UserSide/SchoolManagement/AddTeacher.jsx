import React from "react";
import { useForm } from "react-hook-form";

function AddTeacher() {
  const {
    register,
    handleSubmit,
    fromState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            {...register("name", { required: "teacher name is required" })}
          />
          {errors.name && <p className="text-red-700">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            {...register("email", { required: "teacher email is required" })}
          />
          {errors.email && (
            <p className="text-red-700">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            {...register("name", { required: "teacher name is required" })}
          />
          {errors.name && <p className="text-red-700">{errors.name.message}</p>}
        </div>
      </form>
    </div>
  );
}

export default AddTeacher;
