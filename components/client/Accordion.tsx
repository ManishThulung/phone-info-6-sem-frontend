"use client";
import { useState } from "react";
import Image from "next/image";
import banner from "../../public/image/phone1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Accordion = ({ title }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-[28px] ">
      <div>
        <div className="flex items-center mt-5 justify-between">
          <h2 className="text-lg font-medium py-2">{title}</h2>
          <svg
            className={`w-6 z-10 h-6 transform  transition-transform cursor-pointer ${
              isOpen ? "-rotate-180" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
            viewBox="0 0 20 20"
          >
            <path
              fill="currentColor"
              d="M10 13.5l4-4l-4-4l-0.707 0.707l2.646 2.646L9.293 9.793L10 10.5v2z"
            />
          </svg>
        </div>
        <hr className="mx-auto my-1 h-[2px] w-full  rounded border-0 bg-gray-100  dark:bg-gray-700"></hr>
        {isOpen && (
          <div className="xl:mx-28 grid grid-cols-1 xl:grid-cols-5 gap-2 py-6 ">
            <div>
              <div className="">
                <Image src={banner} alt="banner" className="h-full w-full" />
              </div>
              <div className="flex justify-center">
                <span className="text-sm ">iphone 13 pro max</span>
              </div>
            </div>
            <div>
              <div>
                <Image src={banner} alt="banner" className="h-full w-full" />
              </div>
              <div className="flex justify-center">
                <span className="text-sm ">iphone 13 pro max</span>
              </div>
            </div>
            <div>
              <div>
                <Image src={banner} alt="banner" className="h-full w-full" />
              </div>
              <div className="flex justify-center">
                <span className="text-sm ">iphone 13 pro max</span>
              </div>
            </div>
            <div>
              <div>
                <Image src={banner} alt="banner" className="h-full w-full" />
              </div>
              <div className="flex justify-center">
                <span className="text-sm ">iphone 13 pro max</span>
              </div>
            </div>
            <div className="flex cursor-pointer flex-col justify-center items-center">
              <div>
                <AiOutlineArrowRight size={28} />
              </div>
              <div className="text-xs">See more</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
