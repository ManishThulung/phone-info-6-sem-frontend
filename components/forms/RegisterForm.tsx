"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRegisterUserMutation } from "@/redux/services/userApi";
import { toast } from "react-toastify";
import { useEffect } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = z.object({
  name: z.string().min(3, { message: "Name is required" }),
  email: z.string().min(5, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(4, { message: "Password must be atleast 4 characters" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

function RegisterForm() {
  const [registerUser, { data, isLoading, error }] = useRegisterUserMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) =>
    registerUser(data);

  useEffect(() => {
    if (data) {
      toast.success(data?.message);
    }
    if (error) {
      toast.error(data?.message);
    }
  }, [data, error]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
      <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label className="block text-sm" htmlFor="name">
              User Name
            </label>
            <input
              className={`px-5 xl:w-[400px] w-full text-black my-3 text-sm py-2 border border-blue-400 focus:ring-blue-500 rounded-full outline-none ${
                errors.name && "border-red-500"
              } `}
              id="name"
              type="text"
              placeholder="Enter your Name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.name?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm" htmlFor="email">
            Email
          </label>
          <input
            className={`px-5 xl:w-[400px] w-full text-black my-3 text-sm py-2 border border-blue-400 focus:ring-blue-500 rounded-full outline-none ${
              errors.email && "border-red-500"
            } `}
            id="email"
            type="email"
            placeholder="Enter your Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs italic text-red-500 mt-2">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="mb-4 md:flex md:justify-between">
          <div className="mb-4 md:mr-2 md:mb-0">
            <label className="block text-sm" htmlFor="password">
              Password
            </label>
            <input
              className={`px-5 xl:w-[400px] w-full text-black my-3 text-sm py-2 border border-blue-400 focus:ring-blue-500 rounded-full outline-none ${
                errors.password && "border-red-500"
              } `}
              id="password"
              type="password"
              placeholder="Enter your Password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-xs italic text-red-500 mt-2">
                {errors.password?.message}
              </p>
            )}
          </div>
        </div>
        <div className="mb-6 text-center">
          <button
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register Account
          </button>
        </div>
        <hr className="mb-6 border-t" />

        <div className="text-center">
          <a
            className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
            href="./index.html"
          >
            Already have an account? Login!
          </a>
        </div>
      </form>
    </>
  );
}

export default RegisterForm;
