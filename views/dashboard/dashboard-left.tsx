import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";
import React from "react";
import Image from "next/image";
import AlertIcon from "@/components/icon/alert";

const DashboardLeft = () => {
  return (
    <div className="flex flex-col justify-between gap-8 items-start w-full max-w-[580px] 2xl:min-h-[240px] px-0 py-8 2xl:p-8">
      <div className="flex flex-col gap-3 items-start">
        <div className="flex flex-col gap-2 items-start">
          <h1
            className={cn(
              phudu.className,
              "text-[40px] font-bold text-white-100 leading-[100%]"
            )}
          >
            envelope price increases
          </h1>
          <div className="flex flex-row gap-2 items-center">
            <div className="bg-[#4CA3FF] rounded-full py-1 pl-2 pr-4 flex flex-row items-center gap-1">
              <Image
                src={"/icons/sui-icon.png"}
                alt={"sui"}
                height={34}
                width={34}
                unoptimized
              />
              <h1
                className={cn(
                  phudu.className,
                  "text-white-100 text-2xl font-bold leading-[100%]"
                )}
              >
                1
              </h1>
            </div>
            <h1
              className={cn(
                phudu.className,
                "text-[40px] font-bold text-white-100 leading-[100%]"
              )}
            >
              everyday
            </h1>
          </div>
        </div>
        <h1
          className={cn(
            phudu.className,
            "text-[40px] font-bold text-white-50 leading-[100%]"
          )}
        >
          BUY NOW BEFORE IT’S TOO LATE!
        </h1>
      </div>
      <div className="flex items-center gap-2 p-2 rounded-xl bg-alert">
        <AlertIcon />
        <h1 className={cn(rem.className, "ty-title alert-text")}>
          Read the game rules before participating.
        </h1>
      </div>
    </div>
  );
};

export default DashboardLeft;
