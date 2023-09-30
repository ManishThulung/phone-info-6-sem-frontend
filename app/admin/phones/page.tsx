"use client";
import Sidebar from "@/components/admin/Sidebar";
import { AdminBg, AdminSection } from "@/components/admin/Styles";
import PhoneForm from "@/components/admin/phones/PhoneForm";
import PhoneTable from "@/components/admin/phones/Table";
import { Button } from "antd";
import Link from "next/link";
import React, { useState } from "react";
function Page() {
  // const [isForm, setIsForm] = useState<boolean>(false);
  // const onClick = () => {
  //   setIsForm(true);
  // };
  return (
    <AdminSection>
      <Sidebar />
      <AdminBg>
        <>
          <Link href="/admin/phones/create">
            <Button
              type="primary"
              size="large"
              className="bg-[#1677ff] float-right m-8"
              // onClick={onClick}
            >
              Add Phone
            </Button>
          </Link>
          <PhoneTable />
        </>
      </AdminBg>
    </AdminSection>
  );
}

export default Page;
