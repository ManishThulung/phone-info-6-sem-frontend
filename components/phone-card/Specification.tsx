"use client";
import Image from "next/image";
import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Price from "@/public/assets/Price";
import Storage from "@/public/assets/storage";
import phonePic from "../../public/image/phone1.png";
import { SpecificationWrapper } from "./Styles";
import { Rate } from "antd";
import { useState } from "react";

interface PageProps {
  data: {
    id: number;
    name?: string;
    company?: string;
    camera?: string;
    battery?: string;
    memory?: string;
    photo?: string;
    releaseDate?: string;
    price?: number;
    ratings?: any;
  };
}

function Specification({ data }: PageProps) {
  const {
    id,
    name,
    company,
    camera,
    battery,
    memory,
    photo,
    releaseDate,
    price,
    ratings,
  } = data;

  const totalRatings = ratings.length;
  const sumOfRatings = ratings.reduce(
    (accumulator: number, rating: any) => accumulator + rating.value,
    0
  );

  const rating = sumOfRatings / totalRatings;
  const [value, setValue] = useState(rating);

  let user: any;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("access_token");
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-14 justify-center py-10">
        <div>
          <div>
            <Image
              className=" w-full h-[300px] lg:h-[400px]"
              src={photo ? photo : phonePic}
              alt="phone"
              height={200}
              width={200}
              unoptimized
            />
          </div>
          <h3 className="text-center text-sm font-semibold">{name}</h3>
          <div className="mt-5 flex justify-evenly">
            <div className="bg-[#3797ff] rounded-md h-5 w-5"></div>
            <div className="bg-black h-5 w-5 rounded-md"></div>
            <div className="bg-[#ca0000] h-5 w-5 rounded-md"></div>
          </div>
        </div>

        <div className="grid xl:grid-cols-5 grid-cols-1">
          <div className="xl:border-b-[3px] order-1 xl:order-none  xl:border-gray-300 xl:xl:border-r-[3px] px-8 pt-2">
            <div className="flex justify-center">
              <Storage />
            </div>
            <div className="text-center py-2 text-lg font-semibold">
              Storage & RAM
            </div>
          </div>
          <div className="xl:border-b-[3px] order-3 xl:order-none  xl:border-gray-300 xl:xl:border-r-[3px] px-8 pt-2">
            <div className="flex justify-center">
              <Camera />
            </div>
            <div className="text-center py-2 text-lg font-semibold">
              <span>Camera</span>
            </div>
          </div>
          <div className="xl:border-b-[3px] xl:order-none  order-5 xl:border-gray-300 xl:xl:border-r-[3px] px-8 pt-2">
            <div className="flex justify-center">
              <Battery />
            </div>
            <div className="text-center py-2 text-lg font-semibold">
              <span>Release Date</span>
            </div>
          </div>
          <div className="xl:border-b-[3px] xl:order-none  order-7 xl:border-gray-300 xl:xl:border-r-[3px] px-8 pt-2">
            <div className="flex justify-center">
              <Price />
            </div>
            <div className="text-center py-2 text-lg font-semibold">
              <span>Price</span>
            </div>
          </div>
          <div className="xl:border-b-[3px] xl:order-none  order-9 xl:border-gray-300 px-8 pt-2">
            <div className="flex justify-center">
              <Price />
            </div>
            <div className="text-center py-2 text-lg font-semibold">
              <span>Rating</span>
            </div>
          </div>

          <div className="xl:border-gray-300 flex justify-center order-2 xl:order-none  text-base font-semibold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            {/* <span>128 GB 6 GB RAM/</span>
              <span>18 GB 6 GB RAM/</span>
              <span>18 GB 6 GB RAM/</span>
              <span>18 GB 6 GB RAM/</span> */}
            {memory}
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-4 flex justify-center text-base font-semibold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            {camera}
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-6 flex justify-center text-base font-semibold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            {releaseDate ? (
              releaseDate.toString().split("T")[0]
            ) : (
              <span>2020-4-1</span>
            )}
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-6 flex justify-center text-base font-semibold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            {price}
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-8 flex justify-center text-base font-semibold  xl:px-10 px-10 xl:py-2 py-1">
            <Rate allowHalf onChange={setValue} value={value} disabled />
          </div>
        </div>
      </div>

      <SpecificationWrapper className="grid grid-cols-6 xl:my-20 my-10">
        <div>Storage & RAM</div>
        <p>{memory}</p>

        <div>Processor</div>
        <p>{memory}</p>

        <div>Display</div>
        <p>{memory}</p>

        <div>Battery</div>
        <p>{battery}</p>

        <div>Security & Authentication</div>
        <p>{camera}</p>

        <div>Camera</div>
        <p>{camera}</p>

        <div>NFT</div>
        <p>{camera}</p>

        <div>Network</div>
        <p>{camera}</p>

        <div>Sensors</div>
        <p>{camera}</p>

        <div>Operating System</div>
        <p>{camera}</p>

        <div>Package Contains</div>
        <p>{camera}</p>

        <div>Launched Date</div>
        <p>
          {releaseDate ? (
            releaseDate.toString().split("T")[0]
          ) : (
            <span>2020-4-1</span>
          )}
        </p>

        <div>Price</div>
        <p>{price}</p>
      </SpecificationWrapper>
    </div>
  );
}

export default Specification;
