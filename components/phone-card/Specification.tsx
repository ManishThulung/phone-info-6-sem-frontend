"use client";
import Image from "next/image";
import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Price from "@/public/assets/Price";
import Storage from "@/public/assets/storage";
import phonePic from "../../public/image/phone1.png";
import { SpecificationWrapper } from "./Styles";
import { Rate } from "antd";
import { useEffect, useState } from "react";
import Processor from "@/public/assets/Processor";
import Display from "@/public/assets/Display";
import Security from "@/public/assets/Security";
import Nfc from "@/public/assets/Nfc";
import Network from "@/public/assets/Network";
import Sensor from "@/public/assets/Sensor";
import OS from "@/public/assets/OS";
import Package from "@/public/assets/Package";
import Date from "@/public/assets/Date";
import { FcRating } from "react-icons/Fc";
import { useGetRatingByIdQuery } from "@/redux/services/ratingApi";

interface PageProps {
  data: {
    id: number;
    name?: string;
    company?: string;
    camera?: string;
    battery?: string;
    memory?: string;
    processor?: string;
    display?: string;
    os?: string;
    packageContains?: string;
    sensors?: string;
    network?: string;
    securityAuthentication?: string;
    nfc?: string;
    photo?: string;
    releaseDate?: string;
    price?: number;
  };
}

function Specification({ data }: PageProps) {
  const {
    id,
    name,
    camera,
    battery,
    memory,
    photo,
    processor,
    display,
    os,
    packageContains,
    sensors,
    network,
    securityAuthentication,
    nfc,
    releaseDate,
    price,
  } = data;

  const { data: rating } = useGetRatingByIdQuery(id);

  const [value, setValue] = useState();

  let user: any;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("access_token");
  }
  useEffect(() => {
    if (rating) {
      setValue(rating.rating);
    }
  }, [rating]);

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
          <h3 className="text-center text-4xl lg:text-5xl font-bold text-gray-900 font-sans">
            {name}
          </h3>
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
              <span>Battery</span>
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
              <FcRating className="h-[18px] w-[18px]" />
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
            {battery}
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-6 flex justify-center text-base font-semibold xl:xl:border-r-[3px] xl:px-10 px-10 xl:py-2 py-1">
            {price}
          </div>
          <div className="xl:border-gray-300 xl:order-none  order-8 flex justify-center text-base font-semibold  xl:px-10 px-10 xl:py-2 py-1">
            <Rate allowHalf value={value} disabled />
          </div>
        </div>
      </div>

      <SpecificationWrapper className="grid grid-cols-6 xl:my-20 my-10">
        <div>
          <Storage />
          Storage & RAM
        </div>
        <p>{memory}</p>

        <div>
          <Processor />
          Processor
        </div>
        <p>{processor}</p>

        <div>
          <Display />
          Display
        </div>
        <p>{display}</p>

        <div>
          <Battery />
          Battery
        </div>
        <p>{battery}</p>

        <div>
          <Security />
          Security & Authentication
        </div>
        <p>{securityAuthentication}</p>

        <div>
          <Camera />
          Camera
        </div>
        <p>{camera}</p>

        <div>
          <Nfc />
          NFC
        </div>
        <p>{nfc}</p>

        <div>
          <Network />
          Network
        </div>
        <p>{network}</p>

        <div>
          <Sensor />
          Sensors
        </div>
        <p>{sensors}</p>

        <div>
          <OS />
          Operating System
        </div>
        <p>{os}</p>

        <div>
          <Package />
          Package Contains
        </div>
        <p>{packageContains}</p>

        <div>
          <Date />
          Launched Date
        </div>
        <p>
          {releaseDate ? (
            releaseDate.toString().split("T")[0]
          ) : (
            <span>2020-4-1</span>
          )}
        </p>

        <div>
          <Price />
          Price
        </div>
        <p>{price}</p>
      </SpecificationWrapper>
    </div>
  );
}

export default Specification;
