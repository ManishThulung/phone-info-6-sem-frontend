"use client";

import { Suspense, useState } from "react";
import Loader from "../Loader";
import {
  useComparePhoneMutation,
  useGetAllPhonesNameQuery,
} from "@/redux/services/phoneApi";
import CompareResult from "./CompareData";
import { StyledSelect } from "./Styled";
import Button from "../Button";
import { ToastContainer, toast } from "react-toastify";

function Compare() {
  const [phoneOne, setPhoneOne] = useState<string>("");
  const [phoneTwo, setPhoneTwo] = useState<string>("");

  const { data: phonesNameData } = useGetAllPhonesNameQuery();
  const [comparePhone, { data, isLoading, error }] = useComparePhoneMutation();

  const phone1 = data && data.phone1;
  const phone2 = data && data.phone2;
  const onChangeOne = (value: string) => {
    setPhoneOne(value);
  };
  const onChangeTwo = (value: string) => {
    setPhoneTwo(value);
  };

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handleClick = () => {
    const data = {
      phoneOne,
      phoneTwo,
    };
    comparePhone(data);
  };

  if (error) {
    toast.error(error.message);
  }
  return (
    <div className="xl:container px-4 xl:px-36 xl:mx-auto mt-40">
      <div className="mb-[40px] lg:mb-[80px]">
        <div className="flex justify-between mb-[40px] lg:mb-[40px]">
          <StyledSelect
            showSearch
            size="large"
            placeholder="Search phone"
            optionFilterProp="children"
            onChange={onChangeOne}
            filterOption={filterOption}
            options={phonesNameData && phonesNameData}
          />
          <StyledSelect
            showSearch
            size="large"
            placeholder="Search phone"
            optionFilterProp="children"
            onChange={onChangeTwo}
            filterOption={filterOption}
            options={phonesNameData && phonesNameData}
          />
        </div>
        <div className="flex justify-center">
          <Button className="w-[200px] text-lg" onClick={handleClick}>
            Compare
          </Button>
        </div>
      </div>

      {isLoading && <Loader />}
      {data && (
        <Suspense fallback={<Loader />}>
          <CompareResult phone1={data.phone1} phone2={data.phone2} />
        </Suspense>
      )}
      <ToastContainer />
    </div>
  );
}

export default Compare;
