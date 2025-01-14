"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";
import React, { useState } from "react";

import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const BuyEnvelopes = () => {
  const [isCheck, setIsCheck] = useState(false);

  const IOSSwitch = styled((props: SwitchProps) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: "#2ECA45",
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#E9E9EA",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

  return (
    <div className="flex flex-col justify-between items-start gap-8 min-w-[320px] min-h-[582px] relative bg-white-4 border border-white-16 rounded-2xl p-8">
      <div className="flex flex-col gap-8 items-start w-full">
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

        <div className="flex flex-col gap-3 items-start w-full">
          <div className="flex items-center space-x-2">
            <IOSSwitch
              // sx={{ m: 1 }}
              defaultChecked
              // onClick={() => setIsCheck(!isCheck)}
              onChange={() => setIsCheck(!isCheck)}
              checked={isCheck}
            />
            {/* <Switch onChange={() => setIsCheck(!isCheck)} checked={isCheck} /> */}
            <h1 className={cn(rem.className, "text-white-50 ty-descriptions")}>
              I have a referrer
            </h1>
          </div>
          {isCheck && (
            <div className="flex flex-col gap-2 p-2 rounded-2xl bg-white-4 backdrop-blur w-full">
              <h1 className={cn(rem.className, "text-white-50 ty-subtitle")}>
                Referrer Code
              </h1>

              <div className="rounded-lg border border-white-16 bg-white-4 backdrop-blur p-4">
                <Input placeholder="KEVIN" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BuyEnvelopes;
