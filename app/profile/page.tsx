"use client";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";

function page() {
  let user;
  if (typeof window !== "undefined") {
    let isUser = localStorage.getItem("access_token");
    if (isUser) {
      user = JSON?.parse(isUser);
    }
  }

  return (
    <div className="mt-[120px] max-w-[1440px] px-[60px] m-auto flex justify-evenly">
      <div className="flex gap-12 flex-col w-[400px] justify-center items-center">
        <HiOutlineUserCircle size={300} />
        <h2 className="font-semibold text-3xl text-center">Profile</h2>
      </div>
      <div className="flex gap-12 flex-col justify-center">
        <div>
          <h2 className="text-2xl font-semibold">Full Name:</h2>
          <p className="text-xl font-medium">{user && user?.name}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Email:</h2>
          <p className="text-xl font-medium">{user && user?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
