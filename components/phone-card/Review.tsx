import { useGetPhoneByIdQuery } from "@/redux/services/phoneApi";
import React from "react";

interface PageProps {
  review: string;
  name: string;
}

function Review({ name, review }: PageProps) {
  return (
    <div className="my-[56px] lg:my-[96px]">
      <div className="text-3xl font-bold text-gray-900">{name}</div>
      <div className="text-xl text-gray-700 font-medium pt-8 lg:pt-[40px]">
        {review ? review : <div>No Reviews Available for this Phone</div>}
      </div>
    </div>
  );
}

export default Review;
