"use client";
import { PhoneData } from "@/components/types/admin/types";
import { useGetPhonesQuery } from "@/redux/services/phoneApi";
import { useEffect, useState } from "react";
export const TableData = () => {
  const { data: phoneData } = useGetPhonesQuery();
  const [TableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(phoneData);
  }, [phoneData]);

  const data: PhoneData[] = [];

  data &&
    TableData?.map((item: any) => {
      return data.push({
        key: item.id,
        id: item.id,
        name: item.name,
        company: item.company,
        price: item.price,
      });
    });

  return { data };
};
