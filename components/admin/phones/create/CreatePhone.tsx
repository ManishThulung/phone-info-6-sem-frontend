import { ControlledField, useRHForm } from "@/components/form";
import { useGetCompaniesQuery } from "@/redux/services/companyApi";
import { useAddPhoneMutation } from "@/redux/services/phoneApi";
import { Button, DatePicker, Input, Select } from "antd";
import React, { useState } from "react";
import { z } from "zod";

const { TextArea } = Input;

function CreatePhone() {
  // const { loading, login, error } = useLogin();
  const [loading, setLoading] = useState(false);

  const { data: companyData } = useGetCompaniesQuery();
  const [addPhone, { data }] = useAddPhoneMutation();

  const {
    Form,
    methods: {
      control,
      formState: { errors },
    },
  } = useRHForm({
    initialValues: {},
    schema: z.object({
      name: z.string({ required_error: "Name is required." }),
      company: z.string({ required_error: "Company is required." }),
      display: z.string({ required_error: "Display is required." }),
      processor: z.string({ required_error: "Processor is required." }),
      camera: z.string({ required_error: "Camera is required." }),
      battery: z.string({ required_error: "Battery is required." }),
      securityAuthentication: z.string({
        required_error: "Security Authentication is required",
      }),
      nfc: z.string({ required_error: "NFC is required." }),
      network: z.string({ required_error: "Network is required." }),
      sensors: z.string({ required_error: "Sensors is required." }),
      os: z.string({ required_error: "Operating System is required." }),
      price: z.string({ required_error: "Price is required." }),
      packageContains: z.string({
        required_error: "Package Contains is required",
      }),
      memory: z.string({ required_error: "Memory is required." }),
      releaseDate: z.string({ required_error: "Release Date is required." }),
      file: z.string({ required_error: "Photo is required." }),
    }),
  });

  const handleSubmit = (data: any) => {
    console.log(data, "data");
    //     {
    // name,
    // company,
    // display,
    // processor,
    // camera,
    // battery,
    // securityAuthentication,
    // nfc,
    // network,
    // sensors,
    // os,
    // price,
    // memory,
    // releaseDate,
    // file
    //     } = data
    //     console.log(company, "data.name");

    const formData = new FormData();
    if (!!data.name) {
      formData.set("ram", "nam");
      formData.set("name", data.name);
      formData.set("company", data.company);
      formData.set("display", data.display);
      formData.set("processor", data.processor);
      formData.set("camera", data.camera);
      formData.set("battery", data.battery);
      formData.set("securityAuthentication", data.securityAuthentication);
      formData.set("nfc", data.nfc);
      formData.set("network", data.network);
      formData.set("sensors", data.sensors);
      formData.set("os", data.os);
      formData.set("price", data.price);
      formData.set("memory", data.memory);
      formData.set("releaseDate", data.releaseDate);
      formData.set("file", data.file);

      console.log(formData, "data");
      addPhone(formData);
    }
  };

  const options =
    companyData &&
    companyData?.map((item: any, i: number) => {
      return {
        value: item.company,
        label: item.company,
      };
    });

  return (
    <div className="max-w-[700px] m-auto">
      <Form onSubmit={handleSubmit}>
        <ControlledField
          className="mb-5"
          control={control}
          name="name"
          label="Name"
          Component={Input}
          componentProps={{
            size: "large",
            placeholder: "Phone name",
          }}
          errors={errors}
        />
        <div className="flex gap-8 mb-5">
          <ControlledField
            control={control}
            name="company"
            label="Company"
            Component={Select}
            componentProps={{
              size: "large",
              placeholder: "Phone Company",
              options: options,
            }}
            errors={errors}
          />

          <ControlledField
            control={control}
            name="price"
            label="Price"
            Component={Input}
            componentProps={{
              size: "large",
              placeholder: "Price",
            }}
            errors={errors}
          />

          <ControlledField
            control={control}
            name="releaseDate"
            label="Release Date"
            Component={Input}
            componentProps={{
              size: "large",
              placeholder: "yyyy-mm-dd",
            }}
            errors={errors}
          />

          {/* <ControlledField
            control={control}
            name="releaseDate"
            label="Release Date"
            Component={DatePicker}
            componentProps={{
              size: "large",
              placeholder: "Release Date",
            }}
            errors={errors}
          /> */}
        </div>

        <ControlledField
          className="mb-5"
          control={control}
          name="memory"
          label="Memory"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Memory",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="display"
          label="Display"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Display",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="processor"
          label="Processor"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Processor",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="camera"
          label="Camera"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Camera",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="battery"
          label="Battery"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Battery",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="nfc"
          label="NFC"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "NFC",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="securityAuthentication"
          label="Security Authentication"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Security Authentication",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="network"
          label="Network"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Network",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="sensors"
          label="Sensors"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Sensors",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="os"
          label="Operating System"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Operating System",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="packageContains"
          label="Package Contains"
          Component={TextArea}
          componentProps={{
            size: "large",
            placeholder: "Package Contains",
            rows: 4,
          }}
          errors={errors}
        />

        <ControlledField
          className="mb-5"
          control={control}
          name="file"
          label="Photo"
          Component={Input}
          componentProps={{
            size: "large",
            placeholder: "Photo",
            rows: 4,
            type: "file",
          }}
          errors={errors}
        />

        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="bg-[#1677ff] flex items-center justify-center float-left w-[200px] m-8"
          loading={loading}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreatePhone;
