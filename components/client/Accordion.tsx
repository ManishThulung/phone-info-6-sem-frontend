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
    // <div className="px-[28px] ">
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-900 py-2">{company}</h2>
        <MdKeyboardArrowRight
          className={`w-6 z-10 h-6 transform  transition-transform cursor-pointer ${
            isOpen ? "rotate-90" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <hr className="mx-auto my-1 h-[3px] w-full  rounded border-0 bg-gray-100  dark:bg-gray-900"></hr>
      {isOpen && (
        <div className="xl:mx-28 grid grid-cols-1 xl:grid-cols-5 gap-2 py-6 ">
          {phone.map((phone, i) => {
            let phones = [];
            if (i < 4) {
              phones.push(phone);
            } else {
              return;
            }
            return (
              <>
                {phones.map((phone, i) => (
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
                      <span className="text-xl font-medium">{phone.name}</span>
                    </div>
                  </Link>
                ))}
              </>
            );
          })}
          <div className="flex cursor-pointer flex-col justify-center items-center">
            <Link href={`/phones/${company}`}>
              <AiOutlineArrowRight size={28} />
              <div className="text-base font-medium">See more</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
