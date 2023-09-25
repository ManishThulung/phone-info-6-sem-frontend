"use client";
import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { useState } from "react";
const Auth = () => {
  const [auth, setAuth] = useState(0);
  return (
    <div className="bg-[#FAFAFA]">
      <div className="py-[96px] lg:py-[128px]">
        <div className="xl:container px-4 xl:px-36 xl:mx-auto mt-20">
          <div className="flex justify-center">
            <div>
              <div className="flex gap-6 bg-[#e5f1f9] xl:mx-20 mx-10 rounded-full py-3 px-4 w-fit">
                <button
                  onClick={() => {
                    setAuth(0);
                  }}
                  className={`text-lg font-semibold py-[3px] px-8 rounded-full hover:text-white hover:bg-[#0063a0] ${
                    auth == 0 ? "bg-[#0063a0] text-white " : " text-blue-500"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setAuth(1);
                  }}
                  className={`text-blue-500 ${
                    auth === 1 && "bg-[#0063a0] text-white"
                  } hover:text-white hover:bg-[#0063a0] text-lg font-semibold py-[3px] px-8 rounded-full`}
                >
                  Register
                </button>
              </div>
              {auth === 0 && <LoginForm />}
              {auth === 1 && <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
