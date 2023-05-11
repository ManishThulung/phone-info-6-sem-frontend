import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Price from "@/public/assets/Price";
import Storage from "@/public/assets/storage";
import React from "react";

function page() {
  return (
    <div className="xl:container px-5 xl:px-36 xl:mx-auto mt-20">
      <div className="flex justify-between flex-col xl:flex-row gap-4 xl:gap-0">
        <div className="flex gap-2 font-bold xl:text-[10px] text-[10px] xl:text-[12px]">
          <div className="bg-gray-200 text-black px-2 rounded-md flex py-1">
            <span>iphone 13</span>
          </div>
          <div className="bg-gray-200 text-black px-3 rounded-md flex py-1">
            <span>iphone 13 pro</span>
          </div>
          <div className="bg-gray-200 text-black px-3 rounded-md flex py-1">
            <span>iphone 13 pro max</span>
          </div>
        </div>
        <div className="flex gap-2 font-bold xl:text-[10px] text-[10px] xl:text-[12px]">
          <div className="bg-gray-200 text-black px-3 rounded-md flex py-1">
            <span>Space</span>
          </div>
          <div className="bg-gray-200 text-black px-3 rounded-md flex py-1">
            <span>Review</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-14 justify-center py-10">
        <div>
          <div>
            <img src="./assets/iphone-13-pro-max 2.png" />
          </div>
          <h3 className="text-center text-sm font-semibold">
            iphone 13 pro max
          </h3>
          <div className="mt-5 flex justify-evenly">
            <div className="bg-[#3797ff] rounded-md h-5 w-5"></div>
            <div className="bg-black h-5 w-5 rounded-md"></div>
            <div className="bg-[#ca0000] h-5 w-5 rounded-md"></div>
          </div>
        </div>

        <div className="grid xl:grid-cols-4 grid-cols-1  ">
          <div className="xl:border-b-[3px] order-1 xl:order-none  xl:border-gray-300 xl:xl:border-r-[3px] xl:px-20 px-10 pt-2">
            <div className="flex justify-center">
              <Storage />
            </div>
            <div className="text-xs text-center">
              <span>Storage & RAM</span>
            </div>
          </div>
          <div className="xl:border-b-[3px] order-3 xl:order-none  xl:border-gray-300 xl:xl:border-r-[3px] xl:px-20 px-10 xl:py-2 py-1">
            <div className="flex justify-center">
              <Camera />
            </div>
            <div className="text-xs text-center">
              <span>Camera</span>
            </div>
          </div>
          <div className="xl:border-b-[3px] xl:order-none  order-5 xl:border-gray-300 xl:xl:border-r-[3px] xl:px-20 px-10 py-1">
            <div className="flex justify-center">
              <Battery />
            </div>
            <div className="text-xs text-center">
              <span>Battery</span>
            </div>
          </div>
          <div className="xl:border-b-[3px] xl:order-none  order-7 xl:border-gray-300 xl:px-20 px-10 py-1">
            <div className="flex justify-center">
              <Price />
            </div>
            <div className="text-xs text-center">
              <span>Price</span>
            </div>
          </div>

          <div className="xl:border-gray-300 order-2 xl:order-none  text-[10px] xl:text-[12px] font-bold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            <span>128 GB 6 GB RAM/</span>
            <span>18 GB 6 GB RAM/</span>
            <span>18 GB 6 GB RAM/</span>
            <span>18 GB 6 GB RAM/</span>
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-4 flex justify-center text-[10px] xl:text-[12px] font-bold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            <span>18 Mp Camera/</span>
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-6 flex justify-center text-[10px] xl:text-[12px] font-bold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            <span>lion 4543 mAh/</span>
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-8 flex justify-center text-[10px] xl:text-[12px] font-bold  xl:px-10 px-10 xl:py-2 py-1">
            <span>lion 4543 mAh/</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 xl:my-20 my-10">
        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          01
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          01
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          01
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          01
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          01
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          01
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          01
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          01
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          01
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          01
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          01
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          01
        </div>

        <div className="xl:border-t-2 xl:border-r-2 xl:border-gray-200 px-14 py-6">
          01
        </div>
        <div className="xl:border-t-2 col-span-5 xl:border-gray-200 px-14 py-6">
          01
        </div>
      </div>
    </div>
  );
}

export default page;
