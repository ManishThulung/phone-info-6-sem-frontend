import Dashbord from "@/public/assets/Dashbord";
import { Management } from "@/public/assets/Management";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="w-[310px] bg-[#F3FAFF]">
      <div className="pt-8 pl-6">
        <div className="flex items-center mb-8">
          <Management />
          <span className="text-3xl pl-2 font-semibold">Management</span>
        </div>
        <Link
          href="/admin/phones"
          className="flex items-center mb-4 text-xl font-medium py-6 "
        >
          <Dashbord />
          <span className="text-xl pl-2 font-semibold">Phones</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
