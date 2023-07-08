import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLoginUserMutation } from "@/redux/services/userApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const validationSchema = z.object({
  email: z.string().min(5, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(4, { message: "Password must be atleast 4 characters" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

function LoginForm() {
  const router = useRouter();

  const [loginUser, { data: loginData, isLoading, error, isSuccess }] =
    useLoginUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => loginUser(data);

  if (isSuccess) {
    localStorage.setItem("access_token", JSON.stringify(loginData));
  }

  if (loginData?.role === "admin") {
    router.push("/admin");
  }
  if (loginData?.role == "content-creator") {
    router.push("/admin");
  }
  if (loginData?.role === "user") {
    router.push("/");
  }

  console.log(loginData, "loginData");
  console.log(loginData?.role, "loginData role");
  console.log(error, "error");

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("access_token");
  //   if (accessToken) {
  //     router.push("/");
  //   }
  //   // if (loginData) {
  //   //   toast.success(loginData?.message);
  //   // }
  //   if (error) {
  //     // toast.error(error.status);
  //     console.log(error);
  //   }
  // }, [loginData, router, error]);

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
            Login
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
