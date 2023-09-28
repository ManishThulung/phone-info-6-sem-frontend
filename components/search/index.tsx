"use client";
import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Company from "@/public/assets/Company";
import Filter from "@/public/assets/Filter";
import Price from "@/public/assets/Price";
import Storage from "@/public/assets/storage";
import React, { useEffect, useState } from "react";
import PhoneCard from "../phone-card/PhoneCard";
import Pagination from "../pagination/Pagination";
import { Select, Slider } from "antd";
import { useGetPhoneSearchQuery } from "@/redux/services/phoneApi";
import { Phone } from "@/redux/types/phone";
import { SiCliqz } from "react-icons/si";

interface FilterState {
  name: string;
  company: string;
  memory?: string;
  battery?: string;
  camera?: string;
  maxPrice?: number;
  minPrice?: number;
}

function Search() {
  // const [filter, setFilter] = useState<FilterState>({
  //   name: "",
  //   company: "",
  //   memory: "",
  //   battery: "",
  //   camera: "",
  // });
  const [filter, setFilter] = useState<FilterState>({
    name: "",
    company: "",
  });
  const [memory, setMemory] = useState("");
  const [battery, setBattery] = useState("");
  const [camera, setCamera] = useState("");
  const [price, setPrice] = useState<number[]>([]);
  // const { name, company, memory, battery, camera } = filter;
  const { name, company } = filter;
  const { data, error } = useGetPhoneSearchQuery(filter);

  const handleChange = (e: any) => {
    e.target.name == "memory" && setMemory(e.target.value);
    e.target.name == "battery" && setBattery(e.target.value);
    e.target.name == "camera" && setCamera(e.target.value);
    setFilter({
      ...filter,
      [e.target.name]: e.target.value,
      minPrice: price[0],
      maxPrice: price[1],
    });
  };

  const options = [
    {
      value: "32GB",
      text: "32GB",
    },
    {
      value: "64GB",
      text: "64GB",
    },
    {
      value: "128GB",
      text: "128GB",
    },
    {
      value: "256GB",
      text: "256GB",
    },
    {
      value: "512GB",
      text: "512GB",
    },
    {
      value: "1T",
      text: "1T",
    },
  ];

  const batteryOptions = [
    {
      value: "4000mAh",
      text: "4000mAh",
    },
    {
      value: "4200mAh",
      text: "4200mAh",
    },
    {
      value: "4400mAh",
      text: "4400mAh",
    },
    {
      value: "4600mAh",
      text: "4600mAh",
    },
    {
      value: "4800mAh",
      text: "4800mAh",
    },
    {
      value: "5000mAh",
      text: "5000mAh",
    },
    {
      value: "5200mAh",
      text: "5200mAh",
    },
    {
      value: "5400mAh",
      text: "5400mAh",
    },
    {
      value: "5600mAh",
      text: "5600mAh",
    },
  ];

  const cameraOptions = [
    {
      value: "12MP",
      text: "12MP",
    },
    {
      value: "14MP",
      text: "14MP",
    },
    {
      value: "16MP",
      text: "16MP",
    },
    {
      value: "20MP",
      text: "20MP",
    },
    {
      value: "30MP",
      text: "30MP",
    },
    {
      value: "40MP",
      text: "40MP",
    },
    {
      value: "48Mp",
      text: "48Mp",
    },
    {
      value: "60Mp",
      text: "60Mp",
    },
    {
      value: "64MP",
      text: "64MP",
    },
    {
      value: "108MP",
      text: "108MP",
    },
  ];

  return (
    <div className="container px-4 mx-auto mt-[96px] lg:mt-[121px]">
      <div className="flex xl:flex-row flex-col">
        <div className="xl:px-5 xl:w-[30%]">
          <div className="flex items-center gap-2">
            <div>
              <Filter />
              <Filter />
              <Filter />
            </div>

            <h5 className="font-bold text-2xl">Filters</h5>
          </div>
          <div className="border-t border-gray-200 my-1" />
          <form>
            <div className="grid gird-cols-1">
              <div className="mb-4">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Company />
                    <div>
                      <span className="text-lg px-2 font-semibold">Name</span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    <input
                      placeholder="Name"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none"
                      name="name"
                      value={name}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Company />
                    <div>
                      <span className="text-lg px-2 font-semibold">
                        Phone Company
                      </span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    <input
                      placeholder="Company"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none"
                      // value={name}
                      // onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Storage />
                    <div>
                      <span className="text-lg px-2 font-semibold">
                        Storage
                      </span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    <select
                      placeholder="Storage"
                      className="block text-sm text-gray-400 rounded-lg w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none cursor-pointer"
                      name="memory"
                      value={memory}
                      onChange={handleChange}
                    >
                      {options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                    {/* <Select
                      placeholder="RAM"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none"
                      name="memory"
                      value={memory}
                      onChange={handleChange}
                    /> */}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Battery />
                    <div>
                      <span className="text-lg px-2 font-semibold">
                        Battery
                      </span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    {/* <Select
                      placeholder="Battery"
                      style={{ width: 350 }}
                      // className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none"
                      // name="memory"
                      // value={memory}
                      onChange={(value) => setBattery(value)}
                      options={[
                        {
                          value: "400mAh",
                          label: "400mAh",
                        },
                        {
                          value: "4200mAh",
                          label: "4200mAh",
                        },
                        {
                          value: "4400mAh",
                          label: "4400mAh",
                        },
                        {
                          value: "3600mAh",
                          label: "3600mAh",
                        },
                        {
                          value: "3800mAh",
                          label: "3800mAh",
                        },
                        {
                          value: "5000mAh",
                          label: "5000mAh",
                        },
                        {
                          value: "5200mAh",
                          label: "5200mAh",
                        },
                        {
                          value: "5400mAh",
                          label: "5400mAh",
                        },
                        {
                          value: "5600mAh",
                          label: "5600mAh",
                        },
                      ]}
                    /> */}
                    <select
                      placeholder="Battery"
                      className="block text-sm text-gray-400 rounded-lg w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none cursor-pointer"
                      name="battery"
                      value={battery}
                      onChange={handleChange}
                    >
                      {batteryOptions.map((batteryOption) => (
                        <option
                          key={batteryOption.value}
                          value={batteryOption.value}
                        >
                          {batteryOption.text}
                        </option>
                      ))}
                    </select>
                    {/* <input
                      placeholder="Battery"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none"
                      name="battery"
                      value={battery}
                      onChange={handleChange}
                    /> */}
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Camera />
                    <div>
                      <span className="text-lg px-2 font-semibold">Camera</span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    {/* <input
                      placeholder="Camera"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none"
                      name="camera"
                      value={camera}
                      onChange={handleChange}
                    /> */}
                    <select
                      placeholder="Camera"
                      className="block text-sm text-gray-400 rounded-lg w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none cursor-pointer"
                      name="camera"
                      value={camera}
                      onChange={handleChange}
                    >
                      {cameraOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.text}
                        </option>
                      ))}
                    </select>
                    {/* <Select
                      placeholder="Camera"
                      style={{ width: 350 }}
                      // className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 leading-tight focus:outline-none"
                      // name="memory"
                      // value={memory}
                      onChange={(value) => setCamera(value)}
                      options={[
                        {
                          value: "12MP",
                          label: "12MP",
                        },
                        {
                          value: "16MP",
                          label: "16MP",
                        },
                        {
                          value: "20MP",
                          label: "20MP",
                        },
                        {
                          value: "30MP",
                          label: "30MP",
                        },
                        {
                          value: "40MP",
                          label: "40MP",
                        },
                        {
                          value: "48Mp",
                          label: "48Mp",
                        },
                        {
                          value: "60Mp",
                          label: "60Mp",
                        },
                        {
                          value: "64MP",
                          label: "64MP",
                        },
                        {
                          value: "108MP",
                          label: "108MP",
                        },
                      ]}
                    /> */}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Price />
                    <div>
                      <span className="text-lg px-2 font-semibold">Price</span>
                    </div>
                  </div>
                  <Slider
                    range
                    defaultValue={[20000, 200000]}
                    step={5000}
                    min={20000}
                    max={200000}
                    // onChange={(value) => setPrice(value)}
                    onChange={(value) => {
                      setFilter({
                        ...filter,
                        minPrice: value[0],
                        maxPrice: value[1],
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div className="grid xl:grid-cols-4 mt-5 xl:mt-0 grid-cols-2 gap-16 border-l-[1px] pl-5 xl:pl-8">
            {data &&
              data.items.map((item: Phone) => (
                <PhoneCard
                  key={item.name}
                  id={item.id}
                  name={item.name}
                  imgUrl={item.photo}
                />
              ))}
          </div>
          {/* <Pagination /> */}
        </div>
      </div>
    </div>
  );
}

export default Search;
