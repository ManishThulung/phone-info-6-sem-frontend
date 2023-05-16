"use client";
import Accordion from "@/components/client/Accordion";
import Pagination from "@/components/pagination/Pagination";
import PhoneCard from "@/components/phone-card/PhoneCard";
import { useGetPhonesQuery } from "@/redux/services/phoneApi";
import { Phone } from "@/redux/types/phone";
import Link from "next/link";

function Phones() {
  const { isLoading, data, error } = useGetPhonesQuery(null);
  return (
    // <section className="relative z-10 overflow-hidden  pt-10">
    //   <div className="container ">
    //     <div className="">
    //       <Accordion title="Apple" />
    //     </div>
    //     <div className="py-10">
    //       <Accordion title="Apple" />
    //     </div>
    //     <div className="py-10">
    //       <Accordion title="Apple" />
    //     </div>
    //     <div className="py-10">
    //       <Accordion title="Apple" />
    //     </div>
    //   </div>
    // </section>
    <>
      <div className="container flex justify-center mx-auto  mt-20">
        <div className="grid xl:grid-cols-5 grid-cols-2 gap-16 border-l-[1px] border-gray-300 pl-5 xl:pl-20">
          {data &&
            data.map((phone: Phone) => (
              <Link key={phone.id} href={`/phones/gaming/${phone.id}`}>
                <PhoneCard name={phone.name} imgUrl={phone?.photo} />
              </Link>
            ))}
        </div>
      </div>
      <Pagination />
    </>
  );
}

export default Phones;
