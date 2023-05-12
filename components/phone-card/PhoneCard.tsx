import Image from "next/image";
import React from "react";

interface PageProps {
  imgUrl: string | undefined;
  name: string;
}

function PhoneCard({ imgUrl, name }: PageProps) {
  return (
    <div className="w-[120px] h-[110px]">
      <Image
        className="h-full w-full"
        src={
          imgUrl
            ? imgUrl
            : "https://www.zdnet.com/a/img/resize/a599efb452885d4f668855aea18aae668867a960/2023/02/06/10e9ac75-29ce-4e6c-b2fb-8df48e1e40b0/oneplus-11-never-settle.jpg?auto=webp&fit=crop&height=900&width=1200"
        }
        alt="phone"
        height={300}
        width={300}
        unoptimized
      />
      <h5 className="text-[14px] text-center">
        {name ? name : "iphone 13 pro max"}
      </h5>
    </div>
  );
}

export default PhoneCard;
