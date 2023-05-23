"use client";
import { NextPage } from "next";
import IsAuth from "@/components/auth/IsAuth";
import React from "react";

const AdminPage: NextPage = () => {
  return <div>AdminPage</div>;
};

// export default AdminPage;
export default IsAuth(AdminPage);
