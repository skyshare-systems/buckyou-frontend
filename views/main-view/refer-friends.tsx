/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import CopyIcon from "@/components/icon/copy";
import UserIcon from "@/components/icon/user";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";
import { Check } from "lucide-react";
import React, { useState } from "react";
import Rewards from "./rewards";
import { useReferralCode } from "@/lib/store/referral-code-store";
import { useBuyEnvelope } from "@/lib/store/buy-envelope-store";
import Image from "next/image";

const ReferFriends = () => {
  const [isCopy, setIsCopy] = useState(false);
  const { referralCode, setReferralCode } = useReferralCode((state) => state);
  const [referralCodeText, setReferralCodeText] = useState("");
  const { isBuy, setIsBuy } = useBuyEnvelope((state) => state);

  function copyClipBoard() {
    navigator.clipboard.writeText(referralCode);
    setIsCopy(true);
    const timerId = setTimeout(() => {
      setIsCopy(false);
    }, 2000); // Set the delay in milliseconds (1 seconds in this case)

    return () => clearTimeout(timerId);
  }

  function handleChange(e: any) {
    const value = e.target.value;
    setReferralCodeText(value);
  }
  return (
    <div className=" flex flex-col justify-between items-start gap-8 min-h-[582px] sm:min-w-[320px] w-full sm:max-w-[320px] relative bg-white-4 border border-white-16 rounded-2xl p-8 self-stretch">
      <div className="flex flex-col gap-8 justify-between items-start grow w-full ">
        <div className="flex flex-col gap-8 items-start">
          <div className="flex flex-col gap-2">
            <h1
              className={cn(
                phudu.className,
                "text-white-100 font-bold text-2xl"
              )}
            >
              Refer friends.
              <br />
              You get rewards.
            </h1>
            <p
              className={cn(
                rem.className,
                "text-white-50 leading-[120%] ty-subtitle"
              )}
            >
              Earn up to 10% of the funds from envelopes purchased by your
              friends.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center gap-2">
              <h1 className={cn(rem.className, "text-white-100 ty-subtitle")}>
                Your Referral Code
              </h1>
              <div className="flex items-center gap-1">
                <UserIcon />
                <h1 className={cn(rem.className, "ty-subtitle text-white-100")}>
                  4
                </h1>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 rounded-lg border border-white-16 bg-white-4 backdrop-blur p-4">
              <Input
                placeholder="YOUR CODE"
                value={referralCodeText}
                onChange={handleChange}
                // disabled={referralCode !== ""}
              />
              {referralCode !== "" && (
                <>
                  {!isCopy ? (
                    <button onClick={() => copyClipBoard()}>
                      <CopyIcon />
                    </button>
                  ) : (
                    <Check className="text-white-100 max-w-[14px]" />
                  )}
                </>
              )}
            </div>
            {referralCode === "" && (
              <>
                <button
                  onClick={() => setReferralCode(referralCodeText)}
                  className={cn(
                    rem.className,
                    "ty-title leading-[120%] p-3",
                    "rounded-lg bg-white-4 text-white-100",
                    "hover:bg-white-100 hover:text-black-100 ease-out duration-300 w-full"
                  )}
                >
                  Create my Referral Code
                </button>
                <p className={cn(rem.className, "ty-subtext text-white-50")}>
                  Once created, you cannot change your code!
                </p>
              </>
            )}
          </div>
        </div>
        {/* Total Rewards */}
        {referralCode !== "" && (
          <div className="flex flex-col gap-4 items-start w-full">
            <div className="flex flex-col gap-2 items-start w-full">
              <div className="flex flex-col items-start">
                <h1
                  className={cn(
                    rem.className,
                    "ty-descriptions leading-[120%]"
                  )}
                >
                  <span className="text-white-100">Total Rewards </span>
                  <span className="text-white-50">(USD)</span>
                </h1>

                <h1
                  className={cn(
                    rem.className,
                    "alert-text ty-h3 leading-[120%]"
                  )}
                >
                  1,413.44
                </h1>
              </div>
              <Rewards />
            </div>
            {/* Accordion */}
            <div className="flex flex-col gap-2 items-start w-full">
              <button
                className={cn(
                  rem.className,
                  "ty-title leading-[120%] p-3",
                  "rounded-lg bg-white-4 text-white-100",
                  "hover:bg-connect-wallet hover:text-black-100 ease-out duration-300 w-full"
                )}
              >
                Reward Rebuy
              </button>
              <button
                className={cn(
                  rem.className,
                  "ty-title leading-[120%] p-3",
                  "rounded-lg bg-transparent text-white-100",
                  "hover:bg-connect-wallet hover:text-black-100 ease-out duration-300 w-full"
                )}
              >
                Claim All
              </button>

              <p
                className={cn(
                  rem.className,
                  "ty-subtext text-white-50 leading-[120%] text-center"
                )}
              >
                All rewards are only claimable once the timer hits 0
              </p>
            </div>
          </div>
        )}
      </div>
      {!isBuy && (
        <div className="absolute top-[8.4rem] sm:top-[9.5rem] left-0 min-h-[377px] w-full backdrop-blur flex justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center max-w-[252px]">
            <Image
              src={"/assets/oh-no-panda.png"}
              alt={"panda"}
              height={167.5}
              width={140.5}
              unoptimized
            />
            <h1
              className={cn(
                rem.className,
                "ty-h5 text-white-100 leading-[120%] text-center"
              )}
            >
              Oh no!
            </h1>

            <p
              className={cn(
                rem.className,
                "ty-descriptions text-white-50 leading-[120%] text-center"
              )}
            >
              You need to buy an envelope before being able to refer.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReferFriends;
