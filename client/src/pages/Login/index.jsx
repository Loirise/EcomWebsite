import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../../hooks/useLogin";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Navigate } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";

const Login = () => {
  const { user } = useAuthContext();
  const inputStyle =
    "mt-5 w-full rounded-lg bg-white/50 px-5 py-3 placeholder-black";
  const { login, error, isLoading, setError } = useLogin();

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
      const { username, password } = getValues();
      await login(username, password);
    }
  };

  return (
    <>
      {user && <Navigate to={"/"} replace />}
      <div className="xs:w-[95%] md:w-3/5 xl:w-2/5 rounded-lg mx-auto h-[60vh] bg-white/20 backdrop-blur flex flex-col justify-center items-center">
        <div className="w-5/6 mx-auto">
          {/* form */}
          <form
            className="flex flex-col items-center"
            id="loginForm"
            onSubmit={onSubmit}
          >
            {/* username */}
            <input
              type="text"
              className={inputStyle}
              placeholder="Username"
              {...register("username", {
                required: true,
              })}
            />
            {errors.username && (
              <p className="mt-1 text-sm">
                {errors.username.type === "required" &&
                  "This field is required"}
              </p>
            )}
            {/* password */}
            <input
              type="password"
              className={inputStyle}
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm">
                {errors.password.type === "required" &&
                  "This field is required"}
              </p>
            )}
            {/* submit button */}
            <button
              type="submit"
              className="mt-5 rounded-lg shadow-outline px-20 py-3 transition duration-300 hover:bg-cyan-hover "
            >
              LOGIN
            </button>
            {error && (
              <div className="flex gap-1 mt-2 text-red-600 bg-black py-1 px-2 rounded">
                <p className="text-sm">{error}</p>
                <button
                  onClick={() => setError("")}
                  className="transition duration-100 hover:shadow-outline"
                >
                  <XMarkIcon className="h-4 w-4 p-0 text-gray-400" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
