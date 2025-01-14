import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";

interface IModal {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HelloThereOg = ({ isOpen, setIsOpen }: IModal) => {
  const [unopened, setUnopened] = useState(4);

  if (!isOpen) return null;
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-black-16 backdrop-blur-lg min-h-[100dvh] z-[999]">
      <div className="rounded-3xl border border-white-16 bg-og min-w-[320px] max-w-[400px] p-8 flex flex-col justify-center items-center gap-6">
        <Image
          src={"/assets/panda-og.png"}
          alt={"panda og"}
          height={147.75}
          width={168.25}
          className="w-full max-w-[168.25px]"
          unoptimized
        />
        <div className="flex flex-col justify-center items-center gap-2">
          <h1
            className={cn(
              phudu.className,
              "text-white-100 text-2xl font-bold text-center"
            )}
          >
            Hello there, og!
          </h1>

          <p
            className={cn(
              rem.className,
              "ty-descriptions text-center font-normal leading-[120%]"
            )}
          >
            <span className="text-white-50">We’ve detected your </span>
            <span className="text-white-100">
              {unopened} unopened envelopes
            </span>{" "}
            <span className="text-white-50">
              from the BuckYou (2024). You can migrate it to new Red Envelopes
              with 1:1 Ratio!
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center w-full">
          <button
            className={cn(
              rem.className,
              "ty-title leading-[120%] p-3",
              "rounded-lg bg-white-4 text-white-100",
              "hover:bg-connect-wallet hover:text-black-100 ease-out duration-300 w-full"
            )}
          >
            Migrate to new envelope
          </button>
          <div className="flex flex-col justify-center items-center">
            <p
              className={cn(
                rem.className,
                "ty-subtitle text-center font-normal leading-[120%]"
              )}
            >
              <span className="text-white-50">
                Would you like to keep the unopened envelopes?
              </span>
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className={cn(
                rem.className,
                "ty-subtitle text-red-100 border-b border-red-100 hover:opacity-50 duration-300 ease-out"
              )}
            >
              Do not migrate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelloThereOg;
