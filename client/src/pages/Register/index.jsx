import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "../../hooks/useSignup";

const Register = () => {
  const inputStyle =
    "mt-5 w-full rounded-lg bg-white/50 px-5 py-3 placeholder-black";

  const { signup, error, isLoading } = useSignup();

  const {
    register,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault();
    const isValid = await trigger();
    if (isValid) {
      const { username, email, password } = getValues();
      await signup(username, email, password);
    }
  };

  return (
    <>
      <div className="xs:w-[95%] md:w-3/5 xl:w-2/5 rounded-lg mx-auto h-[60vh] bg-white/20 backdrop-blur flex flex-col justify-center items-center">
        <div className="w-5/6 mx-auto">
          {/* form */}
          <form
            className="flex flex-col items-center"
            id="registerForm"
            onSubmit={onSubmit}
          >
            {/* username */}
            <input
              type="text"
              className={inputStyle}
              placeholder="Username"
              {...register("username", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.username && (
              <p className="mt-1 text-sm">
                {errors.username.type === "required" &&
                  "This field is required"}
                {errors.username.type === "maxLength" &&
                  "Max length is 50 characters"}
              </p>
            )}
            {/* email */}
            <input
              type="text"
              className={inputStyle}
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm">
                {errors.email.type === "required" && "This field is required"}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            {/* password */}
            <input
              type="password"
              className={inputStyle}
              placeholder="Password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm">
                {errors.password.type === "required" &&
                  "This field is required"}
                {errors.password.type === "minLength" &&
                  "Min length is 8 characters"}
              </p>
            )}
            {/* submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="mt-5 rounded-lg shadow-outline px-20 py-3 transition duration-300 hover:bg-cyan-hover"
            >
              REGISTER
            </button>
            {error && (
              <p className="text-sm mt-2 text-red-600 bg-black py-1 px-2 rounded">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
