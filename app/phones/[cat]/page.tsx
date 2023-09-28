"use client";
import Pagination from "@/components/pagination/Pagination";
import PhoneCard from "@/components/phone-card/PhoneCard";
import {
  useGetCategoryPhonesQuery,
  useGetPhonesQuery,
} from "@/redux/services/phoneApi";
import { Phone } from "@/redux/types/phone";
import Link from "next/link";
import React from "react";

interface PageProps {
  params: {
    cat: string;
  };
}

function PhoneCategory({ params: { cat } }: PageProps) {
  const { isLoading, data } = useGetCategoryPhonesQuery(cat);

  return (
    <>
      <div className="container flex flex-col gap-[40px] lg:gap-[56px] justify-center mx-auto py-[96px] lg:py-[128px]">
        <div className="text-3xl font-semibold m-auto py-2 px-4 bg-red-500 text-white rounded-3xl">
          {cat.charAt(0).toUpperCase() + cat.slice(1)} Phones
        </div>
        <div className="grid xl:grid-cols-5 grid-cols-2 gap-16 border-l-[1px] border-gray-300 pl-5 xl:pl-20">
          {data &&
            data.map((phone: Phone) => (
              <Link key={phone.id} href={`/phones/${cat}/${phone.id}`}>
                <PhoneCard
                  name={phone.name}
                  imgUrl={phone?.photo}
                  id={phone.id}
                />
              </Link>
            ))}
        </div>
      </div>
      {/* <Pagination /> */}
    </>
  );
}

export default PhoneCategory;
