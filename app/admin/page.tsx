"use client";
import { NextPage } from "next";
import IsAuth from "@/components/auth/IsAuth";
import React from "react";
import Sidebar from "@/components/admin/Sidebar";
import { AdminSection } from "@/components/admin/Styles";

const AdminPage: NextPage = () => {
  return (
    <AdminSection>
      <Sidebar />
      <div></div>
    </AdminSection>
  );
};

// export default AdminPage;
export default IsAuth(AdminPage);
