"use client";
import Sidebar from "@/components/admin/Sidebar";
import { AdminBg, AdminSection } from "@/components/admin/Styles";
import CompanyTable from "@/components/admin/company/Table";
import { ModalWrapper } from "@/components/comment/Comment";
import { useAddCompanyMutation } from "@/redux/services/companyApi";
import { Button } from "antd";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
function Page() {
  const [open, setOpen] = useState<boolean>(false);
  const [company, setCompany] = useState<string>("");

  const [addCompany, { data: commentData, error, isSuccess }] =
    useAddCompanyMutation();

  const onClick = () => {
    setOpen(true);
  };

  const handleOk = () => {
    addCompany({ value: company });
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Company saved successfully");
    }
    window.location.reload();
    setOpen(false);
    setCompany("");
  };

  const handleCancel = () => setOpen(false);

  return (
    <>
      <AdminSection>
        <Sidebar />
        <AdminBg>
          <div>
            <>
              {/* <Link href="/admin/phones/form"> */}
              <Button
                type="primary"
                size="large"
                className="bg-[#1677ff] float-right m-8"
                onClick={onClick}
              >
                Add Company
              </Button>
              <CompanyTable />
            </>
          </div>
        </AdminBg>
      </AdminSection>
      {open && (
        <ModalWrapper
          title={"Add Phone Company Name"}
          open={open}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <input
            name="company"
            placeholder="Company"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            className="w-full px-6 py-4 border border-gray-700 rounded-lg text-lg"
          />
        </ModalWrapper>
      )}
      <ToastContainer />
    </>
  );
}

export default Page;
