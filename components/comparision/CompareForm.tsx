"use client";
import { useForm } from "react-hook-form";

function CompareForm() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneOne: "",
      phoneTwo: "",
    },
  });

  const handleCompare = (data: any) => console.log(data);

  // console.log(watch("phoneOne"));

  return (
    <form
      className="w-full flex justify-between"
      onSubmit={handleSubmit(handleCompare)}
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
    </form>
  );
}

export default CompareForm;
