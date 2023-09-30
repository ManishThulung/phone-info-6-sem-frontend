import React from "react";
import styled from "styled-components";

interface PageProps {
  review: string;
  name: string;
}

function Review({ name, review }: PageProps) {
  return (
    <div className="my-[56px] lg:my-[96px]">
      <div className="text-4xl font-bold text-gray-900 mb-8">{name}</div>
      {/* <div className="text-xl text-gray-700 font-medium pt-8 lg:pt-[40px]">
        {review ? review : <div>No Reviews Available for this Phone</div>}
      </div> */}
      {review ? (
        <StyledDiv dangerouslySetInnerHTML={{ __html: review }} />
      ) : (
        <div>No Reviews Available for this Phone</div>
      )}
    </div>
  );
}

export default Review;

const StyledDiv = styled.div`
  h1 {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;

    strong {
      font-weight: 700;
    }
  }
  p,
  blockquote {
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;

    strong {
      font-weight: 700;
    }
  }
`;
