"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLoginUserMutation } from "@/redux/services/userApi";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FormWrapper, StyledDatePicker } from "./Styles";
import { DatePickerProps } from "antd";

interface PageProps {
  setIsForm: any;
}

const validationSchema = z.object({
  company: z.string().min(3, { message: "Company is required" }),
  name: z.string().min(3, { message: "Name is required" }),
  ram: z.string().min(3, { message: "RAM is required" }),
  processor: z.string().min(3, { message: "Processor is required" }),
  battery: z.string().min(3, { message: "Battery is required" }),
  display: z.string().min(3, { message: "Display is required" }),
  os: z.string().min(3, { message: "Operating System is required" }),
  storage: z.string().min(3, { message: "Storage is required" }),
  camera: z.string().min(3, { message: "Camera is required" }),
  security: z.string().min(3, { message: "Security is required" }),
  network: z.string().min(3, { message: "Networks is required" }),
  sensor: z.string().min(3, { message: "Sensors is required" }),
  packageContain: z
    .string()
    .min(3, { message: "Package contains is required" }),
  price: z.string().min(3, { message: "Price is required" }),
  releaseDate: z.string().min(3, { message: "Release date is required" }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

function PhoneForm({ setIsForm }: PageProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  // const onSubmit = (data: ValidationSchema) => {
  //   console.log(data, "data");
  // };
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    console.log("first");
    console.log(data, "data");
  };

  return (
    <FormWrapper>
      <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
        {/* <div>
          <label htmlFor="company">
            Compay <span>*</span>
          </label>
          <select
            className="w-[300px] cursor-pointer"
            id="company"
            {...register("company", { required: true })}
          >
            <option value="">Choose Company</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Dr">Dr</option>
          </select>
          {errors.company && <p>{errors.company?.message}</p>}
        </div> */}
        <div>
          <label htmlFor="name">
            Name <span>*</span>
          </label>
          <input
            className={`${errors.name && "border-red-500"} `}
            id="name"
            type="text"
            placeholder="Name"
            {...register("name")}
          />
          {errors.name && <p>{errors.name?.message}</p>}
        </div>
        {/* 
        <div>
          <label htmlFor="ram">
            RAM <span>*</span>
          </label>
          <textarea
            className={` ${errors.ram && "border-red-500"} `}
            id="ram"
            rows={4}
            placeholder="RAM"
            {...register("ram")}
          />
          {errors.ram && <p>{errors.ram?.message}</p>}
        </div>
        <div>
          <label htmlFor="storage">
            Storage <span>*</span>
          </label>
          <textarea
            className={` ${errors.storage && "border-red-500"} `}
            id="storage"
            rows={4}
            placeholder="Storage"
            {...register("storage")}
          />
          {errors.storage && <p>{errors.storage?.message}</p>}
        </div>
        <div>
          <label htmlFor="processor">
            Processor <span>*</span>
          </label>
          <textarea
            className={` ${errors.processor && "border-red-500"} `}
            id="processor"
            rows={4}
            placeholder="Processor"
            {...register("processor")}
          />
          {errors.processor && <p>{errors.processor?.message}</p>}
        </div>
        <div>
          <label htmlFor="display">
            Display <span>*</span>
          </label>
          <textarea
            className={` ${errors.display && "border-red-500"} `}
            id="display"
            rows={4}
            placeholder="Display"
            {...register("display")}
          />
          {errors.display && <p>{errors.display?.message}</p>}
        </div>
        <div>
          <label htmlFor="battery">
            Battery <span>*</span>
          </label>
          <textarea
            className={` ${errors.battery && "border-red-500"} `}
            id="battery"
            rows={4}
            placeholder="battery"
            {...register("battery")}
          />
          {errors.battery && <p>{errors.battery?.message}</p>}
        </div>
        <div>
          <label htmlFor="camera">
            Camera <span>*</span>
          </label>
          <textarea
            className={` ${errors.camera && "border-red-500"} `}
            id="camera"
            rows={4}
            placeholder="Camera"
            {...register("camera")}
          />
          {errors.camera && <p>{errors.camera?.message}</p>}
        </div>
        <div>
          <label htmlFor="os">
            Operating System <span>*</span>
          </label>
          <textarea
            className={` ${errors.os && "border-red-500"} `}
            id="os"
            rows={4}
            placeholder="Operating System"
            {...register("os")}
          />
          {errors.os && <p>{errors.os?.message}</p>}
        </div>
        <div>
          <label htmlFor="security">
            Security <span>*</span>
          </label>
          <textarea
            className={` ${errors.security && "border-red-500"} `}
            id="security"
            rows={4}
            placeholder="Security"
            {...register("security")}
          />
          {errors.security && <p>{errors.security?.message}</p>}
        </div>
        <div>
          <label htmlFor="network">
            Networks <span>*</span>
          </label>
          <textarea
            className={` ${errors.network && "border-red-500"} `}
            id="network"
            rows={4}
            placeholder="Network"
            {...register("network")}
          />
          {errors.network && <p>{errors.network?.message}</p>}
        </div>
        <div>
          <label htmlFor="sensor">
            Sensors <span>*</span>
          </label>
          <textarea
            className={` ${errors.sensor && "border-red-500"} `}
            id="sensor"
            rows={4}
            placeholder="Sensor"
            {...register("sensor")}
          />
          {errors.sensor && <p>{errors.sensor?.message}</p>}
        </div>
        <div>
          <label htmlFor="packageContain">
            Package Contains <span>*</span>
          </label>
          <textarea
            className={` ${errors.packageContain && "border-red-500"} `}
            id="packageContain"
            rows={4}
            placeholder="Package Contain"
            {...register("packageContain")}
          />
          {errors.packageContain && <p>{errors.packageContain?.message}</p>}
        </div>
        <div>
          <label htmlFor="price">
            Price <span>*</span>
          </label>
          <input
            className={` ${errors.price && "border-red-500"} `}
            id="price"
            type="text"
            placeholder="Price"
            {...register("price")}
          />
          {errors.price && <p>{errors.price?.message}</p>}
        </div>
        <div>
          <label>
            Release Date <span>*</span>
          </label>
          <StyledDatePicker onChange={onChange} />
        </div> */}
        <section className="mt-[40px] w-[300px] mx-auto">
          <button
            className="w-full px-4 py-3 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </section>
      </form>
    </FormWrapper>
  );
}

export default PhoneForm;
