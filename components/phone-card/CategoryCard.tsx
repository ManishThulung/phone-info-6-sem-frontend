import Image from "next/image";
import React from "react";
import cardPhone from "../../public/image/cardPhone.jpg";
import Link from "next/link";

interface PageProps {
  imgUrl: string;
  name: string;
  path: string;
}

function CategoryCard({ imgUrl, name, path }: PageProps) {
  return (
    <div className="xl:w-[25%] rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
      <Link href={`/phones/${path}`}>
        <div className="w-full h-[30vh]">
          <Image
            className="rounded-t-xl w-full h-full"
            src={imgUrl ? imgUrl : cardPhone}
            alt="mobile"
            width={300}
            height={300}
            unoptimized
          />
        </div>
        <div className="bg-[#252728] px-4 pb-8 pt-4 rounded-b-lg">
          <h4 className="font-sans font-bold text-white text-2xl">{name}</h4>
          <button className="text-gray-500 pt-1">Read more</button>
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
