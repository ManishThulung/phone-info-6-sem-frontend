import { useGetPhoneByIdQuery } from "@/redux/services/phoneApi";
import React from "react";

interface PageProps {
  review: string;
  name: string;
}

function Review({ name, review }: PageProps) {
  return (
    <>
      <div>{name}</div>
      <div>
        {review ? review : <div>No Reviews Available for this Phone</div>}
      </div>
    </>
  );
}

export default Review;
