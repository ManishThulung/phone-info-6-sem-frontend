import Battery from "@/public/assets/Battery";
import Camera from "@/public/assets/Camera";
import Company from "@/public/assets/Company";
import DownArrowIcon from "@/public/assets/DownArrowIcon";
import Filter from "@/public/assets/Filter";
import Price from "@/public/assets/Price";
import Storage from "@/public/assets/storage";
import React from "react";
import PhoneCard from "../phone-card/PhoneCard";
import Pagination from "../pagination/Pagination";

function Search() {
  return (
    <div className="container px-4 mx-auto mt-20">
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
          <div className="border-t border-gray-200 my-1"></div>
          <div className="grid gird-cols-1">
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
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <DownArrowIcon />
                  </div>
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
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <DownArrowIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div>
                <div className="flex items-center px-1 py-1">
                  <Battery />
                  <div>
                    <span className="text-xs px-2 font-semibold">Battery</span>
                  </div>
                </div>

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <DownArrowIcon />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="mb-2">
              <div>
                <div className="flex items-center px-1 py-1">
                  <div>
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.33288 1.62141H8.00158L8.09795 1.29475C8.1285 1.18901 8.16612 1.00569 8.16612 1.00569H8.17085C8.17085 1.00569 8.20845 1.18901 8.23889 1.29475L8.33288 1.62141ZM6.70045 1.17735C6.70045 1.05049 6.6534 0.975319 6.44665 0.975319H6.30805V1.38401H6.48665C6.61822 1.38401 6.70045 1.31124 6.70045 1.17735ZM4.72339 1.95491C4.97485 1.95491 5.1769 1.73879 5.1769 1.45216C5.1769 1.17735 4.97487 0.970497 4.72339 0.970497C4.47201 0.970497 4.26998 1.17735 4.26998 1.45216C4.26998 1.73879 4.47201 1.95491 4.72339 1.95491ZM10.9449 2.93441V3.68807H11.4032C12.0316 3.68807 12.541 4.19745 12.541 4.8258V13H10.3452V6.29735H2.52443V13H0.458984V4.82583C0.458984 4.19747 0.968342 3.68809 1.59672 3.68809H2.05507V2.93443H1.02784C0.713653 2.93443 0.458984 2.67974 0.458984 2.36555V0.568856C0.458984 0.25469 0.713674 0 1.02784 0H11.9721C12.2863 0 12.541 0.25469 12.541 0.568856V2.36553C12.541 2.67972 12.2863 2.93439 11.9721 2.93439L10.9449 2.93441ZM10.9626 2.30268H12.048V1.95028H11.3737V1.63305H11.8859V1.28069H11.3737V0.975319H12.0151V0.622725H10.9626V2.30268ZM7.38144 2.30268H7.80428L7.90531 1.95028H8.42926L8.5326 2.30268H8.95553L8.38463 0.622747H7.95234L7.38144 2.30268ZM5.89685 2.30268H6.30805V1.73639H6.50071L6.79903 2.30268H7.25724L6.93071 1.71528C6.89071 1.64492 6.8672 1.61436 6.8672 1.61436V1.60954C7.03403 1.52491 7.11866 1.32993 7.11866 1.15141C7.11866 0.907154 6.99875 0.735498 6.80847 0.662724C6.73561 0.634578 6.65338 0.622725 6.48191 0.622725H5.89685V2.30268ZM3.84472 1.45216C3.84472 1.94565 4.2159 2.33082 4.72339 2.33082C5.23088 2.33082 5.60216 1.94565 5.60216 1.45216C5.60216 0.970497 5.23088 0.59458 4.72339 0.59458C4.2159 0.59458 3.84472 0.970497 3.84472 1.45216ZM2.19164 1.80936C2.19164 1.27829 1.43511 1.31587 1.43511 1.10438C1.43511 1.0105 1.52908 0.972918 1.61371 0.972918C1.81574 0.972918 1.98489 1.12087 1.98489 1.12087L2.15878 0.784971C2.15878 0.784971 1.98018 0.594601 1.61834 0.594601C1.28474 0.594601 1.02402 0.799054 1.02402 1.10921C1.02402 1.62604 1.78048 1.61901 1.78048 1.81862C1.78048 1.91973 1.68891 1.95268 1.60428 1.95268C1.3928 1.95268 1.20253 1.77881 1.20253 1.77881L0.986398 2.09117C0.986398 2.09117 1.20481 2.3308 1.59961 2.3308C1.97784 2.33082 2.19164 2.08879 2.19164 1.80936ZM3.24381 0.975319H3.75361V0.622725H2.32276V0.975319H2.83265V2.30268H3.24383L3.24381 0.975319ZM9.59221 2.93441H3.40775V3.68807H9.59221V2.93441ZM10.6173 1.35344H10.0159V1.70362H10.2532V1.83268C10.2532 1.83268 10.1098 1.95491 9.91243 1.95491C9.65173 1.95491 9.43079 1.76473 9.43079 1.4451C9.43079 1.19604 9.57411 0.970497 9.92651 0.970497C10.1638 0.970497 10.3354 1.12567 10.3354 1.12567L10.5327 0.817917C10.5327 0.817917 10.3166 0.59458 9.8866 0.59458C9.37439 0.59458 9.00561 0.970497 9.00561 1.45919C9.00561 2.00897 9.40022 2.33082 9.8302 2.33082C10.1098 2.33082 10.2719 2.18527 10.2719 2.18527H10.2766C10.2766 2.18527 10.2743 2.22045 10.2743 2.25563V2.30266H10.6173L10.6173 1.35344ZM9.88456 12.8104V12.4667C9.88456 12.3619 9.79968 12.2771 9.69493 12.2771H3.30501C3.20028 12.2771 3.11538 12.3619 3.11538 12.4667V12.8104C3.11538 12.9151 3.20028 13 3.30501 13H9.69497C9.79968 13 9.88456 12.9151 9.88456 12.8104ZM9.88456 7.59578V7.25209C9.88456 7.14737 9.79968 7.06246 9.69493 7.06246H3.30501C3.20028 7.06246 3.11538 7.14737 3.11538 7.25209V7.59578C3.11538 7.70052 3.20028 7.78541 3.30501 7.78541H9.69497C9.79968 7.78541 9.88456 7.7005 9.88456 7.59578ZM9.88456 8.89944V8.55572C9.88456 8.451 9.79968 8.3661 9.69493 8.3661H3.30501C3.20028 8.3661 3.11538 8.451 3.11538 8.55572V8.89944C3.11538 9.00416 3.20028 9.08906 3.30501 9.08906H9.69497C9.79968 9.08906 9.88456 9.00416 9.88456 8.89944ZM9.88456 10.2031V9.8594C9.88456 9.75465 9.79968 9.66977 9.69493 9.66977H3.30501C3.20028 9.66977 3.11538 9.75465 3.11538 9.8594V10.2031C3.11538 10.3078 3.20028 10.3927 3.30501 10.3927H9.69497C9.79968 10.3927 9.88456 10.3078 9.88456 10.2031ZM9.88456 11.5067V11.163C9.88456 11.0583 9.79968 10.9734 9.69493 10.9734H3.30501C3.20028 10.9734 3.11538 11.0583 3.11538 11.163V11.5067C3.11538 11.6115 3.20028 11.6963 3.30501 11.6963H9.69497C9.79968 11.6963 9.88456 11.6115 9.88456 11.5067Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs px-2 font-semibold">Storage</span>
                  </div>
                </div>

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <DownArrowIcon/
                  </div>
                </div>
              </div>
            </div> */}
            <div className="mb-2">
              <div>
                <div className="flex items-center px-1 py-1">
                  <Camera />
                  <div>
                    <span className="text-xs px-2 font-semibold">Camera</span>
                  </div>
                </div>

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <DownArrowIcon />
                  </div>
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

                <div className="relative inline-block w-full">
                  <select className="block text-sm text-gray-400 rounded-lg appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-1 pr-8 rounded leading-tight focus:outline-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <DownArrowIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
