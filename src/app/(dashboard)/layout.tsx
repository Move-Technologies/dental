"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { cn } from "@/lib/utils";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  const [isOpened, setIsOpened] = React.useState(false);
  return (
    <div className="min-h-svh flex">
      <Sidebar isOpened={isOpened} handleOpenState={setIsOpened} />
      <Navbar />
      <div
        className={cn("mt-24 lg:pl-[350px] w-full duration-500", {
          "lg:pl-20": isOpened,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
