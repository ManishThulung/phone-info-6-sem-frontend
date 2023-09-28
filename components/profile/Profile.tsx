import Loader from "@/app/loading";
import { useGetUserByIdQuery } from "@/redux/services/userApi";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";

interface Prop {
  id: number;
}

function Profile({ id }: Prop) {
  const { data, loading } = useGetUserByIdQuery(id);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-[120px] max-w-[1440px] px-[60px] m-auto flex justify-around">
          <div className="flex gap-12 flex-col w-[400px] justify-center items-center">
            <HiOutlineUserCircle size={300} />
            <h2 className="font-semibold text-3xl text-center">Profile</h2>
          </div>
          <div className="flex gap-12 flex-col justify-center">
            <div>
              <h2 className="text-2xl font-medium">Full Name:</h2>
              <p>{data.name}</p>
            </div>
            <div>
              <h2 className="text-2xl font-medium">Email:</h2>
              <p>{data.email}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
