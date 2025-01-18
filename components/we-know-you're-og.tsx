import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";

interface IModal {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeKnowYoureOg = ({ isOpen, setIsOpen }: IModal) => {
  const [tab, setTab] = useState(1);

  function handleClose() {
    setTab(1);
    setIsOpen(false);
  }

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-black-16 backdrop-blur-lg min-h-[100dvh] z-[999]">
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="rounded-3xl border border-white-16 bg-og min-w-[320px] max-w-[360px] p-8 flex flex-col justify-center items-center gap-6">
          <Image
            src={"/assets/we-know-you're-og!.png"}
            alt={"panda og"}
            height={147.75}
            width={168.25}
            className="w-full max-w-[168.25px]"
            unoptimized
          />
          {tab === 1 && (
            <>
              <div className="flex flex-col justify-center items-center gap-2">
                <h1
                  className={cn(
                    phudu.className,
                    "text-white-100 text-2xl font-bold text-center"
                  )}
                >
                  we know you’re og!
                </h1>

                <p
                  className={cn(
                    rem.className,
                    "ty-descriptions text-center font-normal leading-[120%]"
                  )}
                >
                  <span className="text-white-50">
                    You have already migrated your Red Envelopes from BuckYou
                    (2024). Thank you!{" "}
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center w-full">
                <button
                  onClick={() => setTab(2)}
                  className={cn(
                    rem.className,
                    "ty-title leading-[120%] p-3",
                    "rounded-lg bg-white-4 text-white-100",
                    "hover:bg-connect-wallet hover:text-black-100 ease-out duration-300 w-full"
                  )}
                >
                  Next
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  //   onClick={() => setUnopened(4)}
                  className={cn(
                    rem.className,
                    "ty-subtitle leading-[120%] p-3",
                    "rounded-lg  text-white-50",
                    "hover:text-white-100 ease-out duration-300 w-full"
                  )}
                >
                  Close
                </button>
              </div>
            </>
          )}

          {tab === 2 && (
            <>
              <div className="flex flex-col justify-center items-center gap-2">
                <h1
                  className={cn(
                    phudu.className,
                    "text-white-100 text-2xl font-bold text-center"
                  )}
                >
                  OH NO!
                </h1>

                <p
                  className={cn(
                    rem.className,
                    "ty-descriptions text-center font-normal leading-[120%]"
                  )}
                >
                  <span className="text-white-50">
                    You need to stake to qualify
                  </span>
                  <span className="text-yellow-100">
                    {" "}
                    $BUT on Bucket Protocol{" "}
                  </span>
                  <span className="text-white-50">for free envelopes.</span>

                  <br />
                  <span className="text-white-50 border-b border-white-50">
                    Read more
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-2 items-center justify-center w-full">
                <button
                  onClick={() => setTab(2)}
                  className={cn(
                    rem.className,
                    "ty-title leading-[120%] p-3 rounded-lg",
                    "bg-connect-wallet text-black-100 ease-out duration-300 w-full hover:opacity-75"
                  )}
                >
                  Stake $BUT
                </button>
                <button
                  onClick={handleClose}
                  //   onClick={() => setUnopened(4)}
                  className={cn(
                    rem.className,
                    "ty-subtitle leading-[120%] p-3",
                    "rounded-lg  text-white-50",
                    "hover:text-white-100 ease-out duration-300 w-full"
                  )}
                >
                  Skip for now
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setTab(1)}
            className={cn(
              "w-[32px] h-[8px] rounded-full duration-300 ease-out",
              `${
                tab === 1 ? "bg-yellow-100" : "bg-white-16 hover:bg-yellow-100"
              }`
            )}
          />
          <button
            onClick={() => setTab(2)}
            className={cn(
              "w-[32px] h-[8px] rounded-full duration-300 ease-out",
              `${
                tab === 2 ? "bg-yellow-100" : "bg-white-16 hover:bg-yellow-100"
              }`
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default WeKnowYoureOg;
