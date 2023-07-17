"use client";
import { UserData } from "@/components/types/admin/types";
import { useGetUsersQuery } from "@/redux/services/userApi";
import { useEffect, useState } from "react";
export const TableData = () => {
  const { data: userData } = useGetUsersQuery();
  const [TableData, setTableData] = useState([]);

  useEffect(() => {
    setTableData(userData);
  }, [userData]);

  const data: UserData[] = [];

  data &&
    TableData?.map((item: any) => {
      return data.push({
        key: item.id,
        id: item.id,
        name: item.name,
        email: item.email,
        role: item.role,
      });
    });

  return { data };
};
