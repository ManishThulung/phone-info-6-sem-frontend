"use client";
import { useState } from "react";
import Image from "next/image";
import banner from "../../public/image/phone1.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Company } from "@/redux/types/phone";
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

const Accordion = ({ id, company, phone }: Company) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="px-[28px] ">
      <div>
        <div className="flex items-center mt-5 justify-between">
          <h2 className="text-lg font-medium py-2">{company}</h2>
          <MdKeyboardArrowRight
            className={`w-6 z-10 h-6 transform  transition-transform cursor-pointer ${
              isOpen ? "-rotate-180" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <hr className="mx-auto my-1 h-[2px] w-full  rounded border-0 bg-gray-100  dark:bg-gray-700"></hr>
        {isOpen && (
          <div className="xl:mx-28 grid grid-cols-1 xl:grid-cols-5 gap-2 py-6 ">
            {phone.map((phone, i) => (
              <Link key={i} href={`/phones/${company}/${phone.id}`}>
                <Image
                  src={phone.photo ? phone.photo : banner}
                  alt="banner"
                  className="h-full w-full"
                  width={300}
                  height={300}
                  unoptimized
                />
                <div className="flex justify-center">
                  <span className="text-sm ">{phone.name}</span>
                </div>
              </Link>
            ))}
            <div className="flex cursor-pointer flex-col justify-center items-center">
              <Link href={`/phones/${company}`}>
                <AiOutlineArrowRight size={28} />
                <div className="text-xs">See more</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
