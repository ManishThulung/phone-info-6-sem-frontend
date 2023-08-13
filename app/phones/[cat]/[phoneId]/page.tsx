"use client";
import {
  useGetPhoneByIdQuery,
  useGetSimilarPhonesQuery,
} from "@/redux/services/phoneApi";
import Loader from "@/components/Loader";
import { useState } from "react";
import Review from "@/components/phone-card/Review";
import Specification from "@/components/phone-card/Specification";

interface PageProps {
  params: {
    phoneId: number;
  };
}

function PhoneDetails({ params: { phoneId } }: PageProps) {
  const { isLoading, data, error } = useGetPhoneByIdQuery(phoneId);
  const { name, review } = data || {};

  const { isLoading: loading, data: silimarPhones } =
    useGetSimilarPhonesQuery(name);
  console.log(silimarPhones, "silimarPhones");

  const [reviewOpen, setReviewOpen] = useState<boolean>(false);

  const reviewHandler = () => {
    setReviewOpen(true);
  };
  const specHandler = () => {
    setReviewOpen(false);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      {data ? (
        <div className="xl:container px-5 xl:px-36 xl:mx-auto my-[128px]">
          <div className="flex justify-between flex-col xl:flex-row gap-4 xl:gap-0">
            <div className="flex gap-2 font-bold  text-[10px] xl:text-[12px]">
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
            <div className="flex gap-2 font-bold text-[10px] xl:text-[12px]">
              <div
                className={`bg-gray-200 text-black px-3 rounded-md flex py-1 cursor-pointer hover:bg-slate-500 ${
                  !reviewOpen && "bg-orange-400"
                }`}
              >
                <span onClick={specHandler}>Specification</span>
              </div>
              <div
                className={`bg-gray-200 text-black px-3 rounded-md flex py-1 cursor-pointer hover:bg-slate-500 ${
                  reviewOpen && "bg-orange-400"
                }`}
              >
                <span onClick={reviewHandler}>Review</span>
              </div>
            </div>
          </div>

          {!reviewOpen ? (
            <Specification data={data} />
          ) : (
            <Review review={review?.review} name={name} />
          )}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default PhoneDetails;
