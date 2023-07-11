import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PageProps {
  imgUrl: string | undefined;
  name: string;
  id: number;
}

function PhoneCard({ imgUrl, name, id }: PageProps) {
  return (
    <Link href={`/phones/${name}/${id}`}>
      <div className="w-[200px] h-[190px] cursor-pointer">
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
        <h5 className="text-xl font-semibold text-center">{name}</h5>
      </div>
    </Link>
  );
}

export default PhoneCard;
