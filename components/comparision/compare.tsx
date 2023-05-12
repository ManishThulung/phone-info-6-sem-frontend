import phone from "../../public/image/phone1.png";
import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Display from "@/public/assets/Display";
import Network from "@/public/assets/Network";
import Nfc from "@/public/assets/Nfc";
import OS from "@/public/assets/OS";
import Package from "@/public/assets/Package";
import Price from "@/public/assets/Price";
import Processor from "@/public/assets/Processor";
import ReleaseDate from "@/public/assets/ReleaseDate";
import Security from "@/public/assets/Security";
import Sensor from "@/public/assets/Sensor";
import Storage from "@/public/assets/storage";
import Image from "next/image";
import React from "react";

import {
  useGetPhoneByIdQuery,
  useGetPhonesQuery,
} from "@/redux/services/phoneApi";
import { useGetUsersQuery } from "@/redux/services/userApi";

function Compare() {
  // const { isLoading, data, error } = useGetPhonesQuery(null);
  // const {
  //   isLoading: isLoading1,
  //   data: data1,
  //   error: error1,
  // } = useGetUsersQuery(null);

  // if (isLoading) {
  //   return <Loading />;
  // }
  // if (isLoading1) {
  //   return <div>user loading.....</div>;
  // }
  // if (error) {
  //   console.log(error, "error");
  //   return <div>loading</div>;
  // }
  // console.log(data, "data");
  // console.log(data1, "user data");
  return (
    <div className="xl:container px-4 xl:px-36 xl:mx-auto mt-20">
      <div className="flex justify-between">
        <button
          type="button"
          className="py-1 px-5 xl:px-20 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Search pohne 1
        </button>
        <button
          type="button"
          className="py-1 px-5 xl:px-20 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Search phone 2
        </button>
      </div>
      <div>
        <div className="border-t border-gray-200 my-4">
          <div className="flex mt-9 justify-between px-9">
            <div>
              <div className="xl:w-[200px] xl:h-[32vh] w-[90px] h-[14vh]">
                <Image
                  className="h-full w-full"
                  src={phone}
                  alt="phone"
                  width={300}
                  height={300}
                  unoptimized
                />
                <h4 className="xl:text-[14px] text-[9px] text-center mt-2">
                  iphone 13 pro max
                </h4>
              </div>
              <div className="mt-12 flex justify-evenly">
                <div className="bg-[#3797ff] rounded-sm h-4 w-4"></div>
                <div className="bg-black h-4 w-4 rounded-sm"></div>
                <div className="bg-[#ca0000] h-4 w-4 rounded-sm"></div>
              </div>
            </div>
            <div>
              <div className="xl:w-[200px] w-[90px] xl:h-[32vh] h-[14vh]">
                <Image
                  className="h-full w-full"
                  src={phone}
                  alt="phone"
                  width={300}
                  height={300}
                  unoptimized
                />
                <h4 className="xl:text-[14px] text-[9px] text-center mt-2">
                  iphone 13 pro max
                </h4>
              </div>
              <div className="mt-12 flex justify-evenly">
                <div className="bg-[#3797ff] rounded-sm h-4 w-4"></div>
                <div className="bg-black h-4 w-4 rounded-sm"></div>
                <div className="bg-[#ca0000] h-4 w-4 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col my-9">
          <div className="border-t border-b flex justify-center">
            <div className="border-r w-[200px] border-l px-9 py-2">
              <div className="flex justify-center">
                <Storage />
              </div>
              <span className="text-[9px] flex justify-center pt-2 font-bold">
                Storage & RAM
              </span>
            </div>
          </div>
          <div className="border-b flex justify-center">
            <div className="border-r border-l w-[200px] px-9 py-2">
              <div className="flex justify-center">
                <Display />
              </div>
              <span className="text-[9px] flex justify-center pt-2 font-bold">
                Display
              </span>
            </div>
          </div>

          <div className="border-b flex justify-center">
            <div className="border-r border-l w-[200px] px-9 py-2">
              <div className="flex justify-center">
                <Processor />
              </div>
              <span className="text-[9px] flex justify-center pt-2 font-bold">
                Processor
              </span>
            </div>
          </div>

          <div className="border-b flex justify-center">
            <div className="border-r border-l w-[200px] px-9 py-2">
              <div className="flex justify-center">
                <Camera />
              </div>
              <span className="text-[9px] flex justify-center pt-2 font-bold">
                Camera
              </span>
            </div>
          </div>
          <div className="border-b flex justify-center">
            <div className="border-r border-l w-[200px] px-9 py-2">
              <div className="flex justify-center">
                <Battery />
              </div>
              <span className="text-[9px] flex justify-center pt-2 font-bold">
                Battery
              </span>
            </div>
          </div>

          {/* <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Security />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Security & Authentication
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Nfc />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              NFC
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Network />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Networks
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Sensor />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Sensors
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <OS />
            </div>
            <span className="text-[8px] flex justify-center pt-2 font-bold">
              Operating System
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Package />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Package Contains
            </span>
          </div>
        </div> */}
          <div className="border-b flex justify-center">
            <div className="border-r border-l w-[200px] px-9 py-2">
              <div className="flex justify-center">
                <ReleaseDate />
              </div>
              <span className="text-[9px] flex justify-center pt-2 font-bold">
                LunchDate
              </span>
            </div>
          </div>
          <div className="border-b flex justify-center">
            <div className="border-r border-l w-[200px] px-9 py-2">
              <div className="flex justify-center">
                <Price />
              </div>
              <span className="text-[9px] flex justify-center pt-2 font-bold">
                Price
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
