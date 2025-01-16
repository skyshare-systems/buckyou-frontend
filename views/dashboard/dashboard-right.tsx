"use client";
import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";
import React from "react";
import Image from "next/image";
import CountdownTimer from "@/components/countdown-timer";

const DashboardRight = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center 2xl:min-w-[705px]  w-full xl:self-stretch p-8 rounded-2xl border border-white-16 bg-white-4 relative overflow-hidden">
      <div className="flex flex-col gap-4 items-start relative z-[2]">
        <div className="flex flex-col">
          <h1 className={cn(rem.className, "ty-descriptions text-white-50")}>
            Total Prize Pool
          </h1>
          <h1
            className={cn(
              phudu.className,
              "text-[64px] font-bold text-white-100 leading-[100%]"
            )}
          >
            $14,010
          </h1>
        </div>
        <div className="flex flex-col">
          <h1 className={cn(rem.className, "ty-descriptions text-white-50")}>
            Remaining Time
          </h1>

          <CountdownTimer />
        </div>
      </div>
      <Image
        src={"/assets/panda.png"}
        alt={"panda"}
        height={420}
        width={383}
        className="absolute top-0 right-0 w-full min-w-[600px] opacity-50  md:min-w-[300px] md:max-w-[450px] lg:opacity-100"
        unoptimized
      />
    </div>
  );
};

export default DashboardRight;
