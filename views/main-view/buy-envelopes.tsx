import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";
import React from "react";

const BuyEnvelopes = () => {
  return (
    <div className="flex flex-col justify-between items-start gap-8 min-w-[320px] min-h-[582px] relative bg-white-4 border border-white-16 rounded-2xl p-8">
      <div className="flex flex-col gap-8 items-start">
        <div className="flex flex-col gap-2 items-start max-w-[133px] w-full">
          <h1 className={cn(phudu.className, "text-white-100 font-bold")}>
            Buy
            <br /> Envelopes
          </h1>
          <p className={cn(rem.className, "ty-subtitle leading-[120%]")}>
            <span className="text-white-50">Each purchased envelope adds </span>
            <br />
            <span className="text-white-100">1 minute </span>
            <span className="text-white-50">to the timer</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BuyEnvelopes;
