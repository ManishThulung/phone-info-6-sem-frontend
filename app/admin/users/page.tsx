"use client";

import Sidebar from "@/components/admin/Sidebar";
import { AdminBg, AdminSection } from "@/components/admin/Styles";
import UserTable from "@/components/admin/users/Table";
import React from "react";
function Page() {
  return (
    <AdminSection>
      <Sidebar />
      <AdminBg>
        <div>
          <UserTable />
        </div>
      </AdminBg>
    </AdminSection>
  );
}

export default Page;
