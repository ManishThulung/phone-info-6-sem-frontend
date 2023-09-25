"use client";
import { CompanyData } from "@/components/types/admin/types";
import { useGetCompaniesQuery } from "@/redux/services/companyApi";
import { useEffect, useState } from "react";
export const TableData = () => {
  const { data: companyData } = useGetCompaniesQuery();
  const [TableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(companyData);
  }, [companyData]);

  const data: CompanyData[] = [];

  data &&
    TableData?.map((item: any) => {
      return data.push({
        key: item.id,
        id: item.id,
        company: item.company,
      });
    });

  return { data };
};
