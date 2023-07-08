"use client";
import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Company from "@/public/assets/Company";
import Filter from "@/public/assets/Filter";
import Price from "@/public/assets/Price";
import Storage from "@/public/assets/storage";
import React, { useState } from "react";
import PhoneCard from "../phone-card/PhoneCard";
import Pagination from "../pagination/Pagination";
import { Slider } from "antd";

interface FilterState {
  name: string;
  company: string;
  ram: string;
  battery: string;
  camera: string;
}

function Search() {
  const [filter, setFilter] = useState<FilterState>({
    name: "",
    company: "",
    ram: "",
    battery: "",
    camera: "",
  });
  const [price, setPrice] = useState<number[]>([]);
  const { name, company, ram, battery, camera } = filter;
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

            <h5 className="font-bold">Filters</h5>
          </div>
          <div className="border-t border-gray-200 my-1" />
          <form>
            <div className="grid gird-cols-1">
              <div className="mb-2">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Company />
                    <div>
                      <span className="text-xs px-2 font-semibold">Name</span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    <input
                      placeholder="Name"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 leading-tight focus:outline-none"
                      value={name}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Company />
                    <div>
                      <span className="text-xs px-2 font-semibold">
                        Phone Company
                      </span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    <input
                      placeholder="Company"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 leading-tight focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Storage />
                    <div>
                      <span className="text-xs px-2 font-semibold">RAM</span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    <input
                      placeholder="RAM"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 leading-tight focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Battery />
                    <div>
                      <span className="text-xs px-2 font-semibold">
                        Battery
                      </span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    <input
                      placeholder="Battery"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 leading-tight focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Camera />
                    <div>
                      <span className="text-xs px-2 font-semibold">Camera</span>
                    </div>
                  </div>

                  <div className="relative inline-block w-full">
                    <input
                      placeholder="Camera"
                      className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 leading-tight focus:outline-none"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-2">
                <div>
                  <div className="flex items-center px-1 py-1">
                    <Price />
                    <div>
                      <span className="text-xs px-2 font-semibold">Price</span>
                    </div>
                  </div>
                  <Slider
                    range
                    defaultValue={[20000, 200000]}
                    step={5000}
                    min={20000}
                    max={200000}
                    onChange={(value) => setPrice(value)}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div>
          <div>
            <div className="grid xl:grid-cols-4 mt-5 xl:mt-0 grid-cols-2 gap-16 border-l-[1px] pl-5 xl:pl-8">
              <PhoneCard name="iPhone 8" imgUrl="" />
              <PhoneCard name="iPhone 8" imgUrl="" />
              <PhoneCard name="iPhone 8" imgUrl="" />
              <PhoneCard name="iPhone 8" imgUrl="" />
              <PhoneCard name="iPhone 8" imgUrl="" />
              <PhoneCard name="iPhone 8" imgUrl="" />
              <PhoneCard name="iPhone 8" imgUrl="" />
              <PhoneCard name="iPhone 8" imgUrl="" />
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default Search;
