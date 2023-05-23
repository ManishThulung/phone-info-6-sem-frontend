"use client";

import { Suspense } from "react";
import Loader from "../Loader";
import { useForm, SubmitHandler } from "react-hook-form";
import { useComparePhoneMutation } from "@/redux/services/phoneApi";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CompareResult from "./CompareData";

const validationSchema = z.object({
  phoneOne: z.string().min(3, { message: "Phone name is required" }),
  phoneTwo: z.string().min(3, { message: "Phone name is required" }),
});
type ValidationSchema = z.infer<typeof validationSchema>;

function Compare() {
  const [comparePhone, { data, isLoading }] = useComparePhoneMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    comparePhone(data);
    reset();
  };

  return (
    <div className="xl:container px-4 xl:px-36 xl:mx-auto mt-20">
      <div className="flex justify-between">
        <form
          className="w-full flex justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            // className="rounded-xl border-2 border-[#7E7E7E] w-[351px] h-[33px] pl-4 outline-none"
            className={`px-5 xl:w-[400px] w-full text-black my-3 text-sm py-2 border border-blue-400 focus:ring-blue-500 rounded-full outline-none ${
              errors.phoneOne && "border-red-500"
            } `}
            id="phoneOne"
            type="text"
            {...register("phoneOne", { required: true, minLength: 3 })}
            placeholder="Search Phone 1"
          />
          {errors.phoneOne && (
            <p className="text-xs italic text-red-500 mt-2">
              This field is required
            </p>
          )}

          <input
            // className="rounded-xl border-2 border-[#7E7E7E] w-[351px] h-[33px] pl-4 outline-none"
            className={`px-5 xl:w-[400px] w-full text-black my-3 text-sm py-2 border border-blue-400 focus:ring-blue-500 rounded-full outline-none ${
              errors.phoneTwo && "border-red-500"
            } `}
            {...register("phoneTwo", { required: true, minLength: 3 })}
            placeholder="Search Phone 2"
          />
          {errors.phoneTwo && (
            <p className="text-xs italic text-red-500 mt-2">
              This field is required
            </p>
          )}
          <input type="submit" />
        </form>
      </div>
      {data ? (
        <Suspense fallback={<p>loading..</p>}>
          <CompareResult phone1={data.phone1} phone2={data.phone2} />
        </Suspense>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Compare;
