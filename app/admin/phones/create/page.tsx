"use client";
import Button from "@/components/Button";
import Sidebar from "@/components/admin/Sidebar";
import { AdminBg, AdminSection } from "@/components/admin/Styles";
import CreatePhone from "@/components/admin/phones/create/CreatePhone";
import { ControlledField, useRHForm } from "@/components/form";
import React from "react";
import { z } from "zod";

function page() {
  return (
    <AdminSection>
      <Sidebar />
      <AdminBg>
        <div className="mx-auto my-8 font-bold text-4xl text-center w-full">
          Add New Phone
        </div>
        <CreatePhone />
      </AdminBg>
    </AdminSection>
  );
}

export default page;
