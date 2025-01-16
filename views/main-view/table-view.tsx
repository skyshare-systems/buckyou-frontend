"use client";
import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";
import React, { useState } from "react";
import { BuyHistory } from "./buy-history";
import { Leaderboard } from "./leaderboard";
import Image from "next/image";

const TableView = () => {
  const [selectedTab, setSelectedTab] = useState("Leaderboard");

  const tab = [
    {
      name: "Buy History",
    },
    {
      name: "Leaderboard",
    },
  ];

  return (
    <div className="flex justify-center items-start rounded-2xl border border-white-16 bg-white-4 self-stretch grow">
      <div className="flex flex-col items-start min-h-[180px] grow self-stretch">
        <div className="flex flex-col items-start min-h-[180px] grow self-stretch relative justify-between overflow-hidden">
          <a href="https://www.bucketprotocol.io/" target="_blank">
            <Image
              src={"/assets/panda-ass.png"}
              alt={"panda ass"}
              height={143.625}
              width={248.377}
              className="absolute bottom-0 right-0 w-full max-w-[200px] z-[1] sm:opacity-100 opacity-50 hover:scale-105 ease-out duration-300 cursor-pointer"
              unoptimized
            />
          </a>

          <div className="flex items-start p-8 min-h-[133px] z-[2]">
            <h1
              className={cn(
                phudu.className,
                "text-white-100 leading-[120%] font-bold text-2xl"
              )}
            >
              BE AMONG THE Final 4 Buyers.
              <br />
              Share the Prize Pool!
            </h1>
          </div>

          <div className="flex flex-wrap items-start justify-start pt-4 px-6 gap-1 z-[2]">
            {tab.map((data, index) => {
              return (
                <button
                  className={cn(
                    rem.className,
                    "ty-subtitle py-2 px-3 rounded-t-lg",
                    `${
                      selectedTab === data.name
                        ? "text-white-100 bg-white-4"
                        : "text-white-50"
                    }`
                  )}
                  onClick={() => setSelectedTab(data.name)}
                  key={index}
                >
                  {data.name}
                </button>
              );
            })}
          </div>
        </div>

        {selectedTab === "Buy History" && (
          <div className="bg-white-4 w-full grow self-stretch flex items-start  p-6 max-h-[400px] overflow-auto">
            <BuyHistory />
          </div>
        )}

        {selectedTab === "Leaderboard" && (
          <div className="bg-white-4 w-full grow self-stretch flex items-start  p-6 max-h-[400px] overflow-auto">
            <Leaderboard />
          </div>
        )}
      </div>
    </div>
  );
};

export default TableView;
