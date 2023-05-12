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
  const { isLoading, data, error } = useGetCategoryPhonesQuery(cat);

  return (
    <>
      <div className="container flex justify-center mx-auto  mt-20">
        <div className="grid xl:grid-cols-5 grid-cols-2 gap-16 border-l-[1px] border-gray-300 pl-5 xl:pl-20">
          {/* {!isLoading ? ( */}
          {data &&
            data.map((phone: Phone) => (
              <Link key={phone.id} href={`/phones/${cat}/${phone.id}`}>
                <PhoneCard name={phone.name} imgUrl={phone?.photo} />
              </Link>
            ))}
          {/* <>
            <PhoneCard name="iPhone 13 Pro Max" imgUrl="" />
            <PhoneCard name="iPhone 13 Pro Max" imgUrl="" />
            <PhoneCard name="iPhone 13 Pro Max" imgUrl="" />
            <PhoneCard name="iPhone 13 Pro Max" imgUrl="" />
            <PhoneCard name="iPhone 13 Pro Max" imgUrl="" />
            <PhoneCard name="iPhone 13 Pro Max" imgUrl="" />
            <PhoneCard name="iPhone 13 Pro Max" imgUrl="" />
            <PhoneCard name="iPhone 13 Pro Max" imgUrl="" />
            <PhoneCard name="iPhone 13 Pro Max" imgUrl="" />
          </> */}
          {/* ) : (
            <div>loading...</div>
          )} */}
        </div>
      </div>
      <Pagination />
    </>
  );
}

export default PhoneCategory;
