"use client";
import phone from "../../public/image/phone1.png";
import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Display from "@/public/assets/Display";
import Network from "@/public/assets/Network";
import Nfc from "@/public/assets/Nfc";
import OS from "@/public/assets/OS";
import Package from "@/public/assets/Package";
import Price from "@/public/assets/Price";
import Processor from "@/public/assets/Processor";
import ReleaseDate from "@/public/assets/ReleaseDate";
import Security from "@/public/assets/Security";
import Sensor from "@/public/assets/Sensor";
import Storage from "@/public/assets/storage";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import { useGetComparePhoneQuery } from "@/redux/services/phoneApi";
import { useState } from "react";
import Loader from "../Loader";
import Company from "@/public/assets/Company";

function Compare() {
  const [phoneOne, setPhoneOne] = useState<string>();
  const [phoneTwo, setPhoneTwo] = useState<string>();
  const [phoneData, setPhoneData] = useState();
  const handleSumbit = async (e: any) => {
    e.preventDefault();
    console.log(phoneOne, "kjdshf");

    const res = await fetch(
      `http://localhost:4000/api/phones/compare?phoneOne=${phoneOne}&phoneTwo=${phoneTwo}`
    );
    const data = await res.json();
    setPhoneData(data);
    setPhoneOne("");
    setPhoneTwo("");
  };
  console.log(phoneData, "phoneData");

  // const [getComparePhone, { data, isLoading }] = useGetComparePhoneQuery();
  // const {
  //   register,
  //   handleSubmit,
  //   // watch,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     phoneOne: "",
  //     phoneTwo: "",
  //   },
  // });

  // const onSubmit = (data: any) => getComparePhone(data);

  return (
    <div className="xl:container px-4 xl:px-36 xl:mx-auto mt-20">
      <div className="flex justify-between">
        <form className="flex justify-between w-full">
          <input
            className="rounded-xl border-2 border-[#7E7E7E] w-[351px] h-[33px] pl-4 outline-none"
            placeholder="Search Phone 1"
            name="phoneOne"
            value={phoneOne}
            onChange={(e) => setPhoneOne(e.target.value)}
          />
          <input
            className="rounded-xl border-2 border-[#7E7E7E] w-[351px] h-[33px] pl-4 outline-none"
            placeholder="Search Phone 2"
            name="phoneTwo"
            value={phoneTwo}
            onChange={(e) => setPhoneTwo(e.target.value)}
          />
          <button onClick={handleSumbit}>Submit</button>
        </form>
        {/* <form
          className="w-full flex justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="rounded-xl border-2 border-[#7E7E7E] w-[351px] h-[33px] pl-4 outline-none"
            {...register("phoneOne", { required: true, minLength: 3 })}
            placeholder="Search Phone 1"
          />
          {errors.phoneOne && <p>This field is required</p>}

          <input
            className="rounded-xl border-2 border-[#7E7E7E] w-[351px] h-[33px] pl-4 outline-none"
            {...register("phoneTwo", { required: true, minLength: 3 })}
            placeholder="Search Phone 2"
          />
          {errors.phoneTwo && <p>This field is required</p>}
          <input type="submit" />
        </form> */}
      </div>
      {phoneData ? (
        <div>
          <div className="border-t border-gray-200 my-4">
            <div className="flex mt-9 justify-between px-9">
              <div>
                <div className="xl:w-[200px] xl:h-[32vh] w-[90px] h-[14vh]">
                  <Image
                    className="h-full w-full"
                    src={phoneData?.phone1.photo}
                    alt="phone"
                    width={300}
                    height={300}
                    unoptimized
                  />
                  <h4 className="xl:text-[14px] text-[9px] text-center mt-2">
                    {phoneData?.phone1.name}
                  </h4>
                </div>
                <div className="mt-12 flex justify-evenly">
                  <div className="bg-[#3797ff] rounded-sm h-4 w-4"></div>
                  <div className="bg-black h-4 w-4 rounded-sm"></div>
                  <div className="bg-[#ca0000] h-4 w-4 rounded-sm"></div>
                </div>
              </div>
              <div>
                <div className="xl:w-[200px] w-[90px] xl:h-[32vh] h-[14vh]">
                  <Image
                    className="h-full w-full"
                    src={phoneData?.phone2.photo}
                    alt="phone"
                    width={300}
                    height={300}
                    unoptimized
                  />
                  <h4 className="xl:text-[14px] text-[9px] text-center mt-2">
                    {phoneData?.phone2.name}
                  </h4>
                </div>
                <div className="mt-12 flex justify-evenly">
                  <div className="bg-[#3797ff] rounded-sm h-4 w-4"></div>
                  <div className="bg-black h-4 w-4 rounded-sm"></div>
                  <div className="bg-[#ca0000] h-4 w-4 rounded-sm"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-col my-9">
            <div className="border-t border-b flex justify-center">
              <div className="m-auto">{phoneData?.phone1.memory}</div>
              <div className="border-r w-[200px] border-l px-9 py-2">
                <div className="flex justify-center">
                  <Storage />
                </div>
                <span className="text-[9px] flex justify-center pt-2 font-bold">
                  Storage & RAM
                </span>
              </div>
              <div className="m-auto">{phoneData?.phone2.memory}</div>
            </div>

            <div className="border-b flex justify-center">
              <div className="m-auto">{phoneData?.phone1.company}</div>
              <div className="border-r border-l w-[200px] px-9 py-2">
                <div className="flex justify-center">
                  <Camera />
                </div>
                <span className="text-[9px] flex justify-center pt-2 font-bold">
                  Camera
                </span>
              </div>
              <div className="m-auto">{phoneData?.phone2.company}</div>
            </div>

            {/* <div className="border-b flex justify-center">
              <div className="border-r border-l w-[200px] px-9 py-2">
                <div className="flex justify-center">
                  <Processor />
                </div>
                <span className="text-[9px] flex justify-center pt-2 font-bold">
                  Processor
                </span>
              </div>
            </div> */}

            <div className="border-b flex justify-center">
              <div className="m-auto">{phoneData?.phone1.camera}</div>
              <div className="border-r border-l w-[200px] px-9 py-2">
                <div className="flex justify-center">
                  <Camera />
                </div>
                <span className="text-[9px] flex justify-center pt-2 font-bold">
                  Camera
                </span>
              </div>
              <div className="m-auto">{phoneData?.phone2.camera}</div>
            </div>
            <div className="border-b flex justify-center">
              <div className="m-auto">{phoneData?.phone1.battery}</div>
              <div className="border-r border-l w-[200px] px-9 py-2">
                <div className="flex justify-center">
                  <Battery />
                </div>
                <span className="text-[9px] flex justify-center pt-2 font-bold">
                  Battery
                </span>
              </div>
              <div className="m-auto">{phoneData?.phone2.battery}</div>
            </div>

            {/* <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Security />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Security & Authentication
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Nfc />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              NFC
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Network />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Networks
            </span>
          </div>
        </div>

        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Sensor />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Sensors
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <OS />
            </div>
            <span className="text-[8px] flex justify-center pt-2 font-bold">
              Operating System
            </span>
          </div>
        </div>
        <div className="border-b flex justify-center">
          <div className="border-r border-l w-[200px] px-9 py-2">
            <div className="flex justify-center">
              <Package />
            </div>
            <span className="text-[9px] flex justify-center pt-2 font-bold">
              Package Contains
            </span>
          </div>
        </div> */}
            <div className="border-b flex justify-center">
              <div className="m-auto">{phoneData?.phone1.releaseDate}</div>
              <div className="border-r border-l w-[200px] px-9 py-2">
                <div className="flex justify-center">
                  <ReleaseDate />
                </div>
                <span className="text-[9px] flex justify-center pt-2 font-bold">
                  LunchDate
                </span>
              </div>
              <div className="m-auto">{phoneData?.phone2.releaseDate}</div>
            </div>
            <div className="border-b flex justify-center">
              <div className="m-auto">{phoneData?.phone1.price}</div>
              <div className="border-r border-l w-[200px] px-9 py-2">
                <div className="flex justify-center">
                  <Price />
                </div>
                <span className="text-[9px] flex justify-center pt-2 font-bold">
                  Price
                </span>
              </div>
              <div className="m-auto">{phoneData?.phone2.price}</div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Compare;
