"use client";
import Sidebar from "@/components/admin/Sidebar";
import { AdminSection } from "@/components/admin/Styles";
import PhoneTable from "@/components/admin/phones/Table";
import React from "react";
// background: linear-gradient(135deg, #F8F7F3 0%, #E7F6FC 100%);
function page() {
  return (
    <AdminSection>
      <Sidebar />
      <div className="w-full ml-8">
        <PhoneTable />
      </div>
    </AdminSection>
  );
}

export default page;
