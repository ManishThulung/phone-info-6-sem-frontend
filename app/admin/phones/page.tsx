"use client";
import Sidebar from "@/components/admin/Sidebar";
import { AdminBg, AdminSection } from "@/components/admin/Styles";
import PhoneForm from "@/components/admin/phones/PhoneForm";
import PhoneTable from "@/components/admin/phones/Table";
import { Button } from "antd";
import Link from "next/link";
import React, { useState } from "react";
// background: linear-gradient(135deg, #F8F7F3 0%, #E7F6FC 100%);
function Page() {
  const [isForm, setIsForm] = useState<boolean>(false);
  const onClick = () => {
    setIsForm(true);
  };
  return (
    <AdminSection>
      <Sidebar />
      <AdminBg>
        <div className=" ml-8">
          {!isForm ? (
            <>
              {/* <Link href="/admin/phones/form"> */}
              <Button
                type="primary"
                size="large"
                className="bg-[#1677ff] float-right m-8"
                onClick={onClick}
              >
                Add Phone
              </Button>
              {/* </Link> */}
              <PhoneTable />
            </>
          ) : (
            <PhoneForm setIsForm={setIsForm} />
          )}
        </div>
      </AdminBg>
    </AdminSection>
  );
}

export default Page;
