"use client";
import LoginForm from "@/components/forms/LoginForm";
import RegisterForm from "@/components/forms/RegisterForm";
import { useState } from "react";
const Auth = () => {
  const [auth, setAuth] = useState(0);
  return (
    <div>
      <div className="bg-[#FAFAFA]  py-5 ">
        <div className="xl:container px-4 xl:px-36 xl:mx-auto mt-20">
          <div className="flex justify-center">
            <div>
              <div className="bg-[#e5f1f9] xl:mx-20 mx-10 rounded-full px-2 py-2">
                <button
                  onClick={() => {
                    setAuth(0);
                  }}
                  className={`text-[13px] mx-3 py-[3px] px-8 rounded-full ${
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
                  } hover:text-white hover:bg-[#0063a0] text-[13px] py-[3px] px-8 rounded-full`}
                >
                  Register
                </button>
              </div>
              {auth === 0 && <LoginForm />}
              {auth === 1 && <RegisterForm />}
              {/* <div className="flex justify-end py-8">
                <button className="text-white text-[14px] py-[5px] px-14 rounded-full bg-[#0063a0]">
                  {auth === 1 ? "Signup" : "Login"}
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
