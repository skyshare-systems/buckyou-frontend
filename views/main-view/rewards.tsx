import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { rem } from "@/public/fonts";
import Image from "next/image";

const Rewards = () => {
  const referral_rewards = {
    token1: 5.41,
    token2: 14.31,
    token3: 66.49,
  };

  const red_envelope_rewards = {
    token1: 5.41,
    token2: 14.31,
    token3: 66.49,
  };

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h1 className={cn(rem.className, "w-full")}>Referral Rewards</h1>
          <div className="flex items-center mr-2">
            {referral_rewards.token1 > 0 && (
              <Image
                src={"/icons/referral-friends-icon/sui-icon.png"}
                alt={"sui"}
                height={12}
                width={12}
                unoptimized
                className="rounded-full border border-white-100"
              />
            )}

            {referral_rewards.token2 > 0 && (
              <Image
                src={"/icons/referral-friends-icon/buck-icon.png"}
                alt={"buck"}
                height={12}
                width={12}
                unoptimized
                className="rounded-full border border-white-100 -ml-1 z-[2]"
              />
            )}

            {referral_rewards.token3 > 0 && (
              <Image
                src={"/icons/referral-friends-icon/but-icon.png"}
                alt={"but"}
                height={12}
                width={12}
                unoptimized
                className="rounded-full border border-white-100 -ml-1 z-[3]"
              />
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="min-h-[40px] flex flex-wrap items-center justify-start">
          {/* Token 1 */}
          {referral_rewards.token1 > 0 && (
            <div className="flex items-center gap-2 pl-2 py-1 pr-1">
              <Image
                src={"/icons/referral-friends-icon/sui-icon.png"}
                alt={"sui"}
                height={16}
                width={16}
                unoptimized
                className="rounded-full"
              />
              <h1
                className={cn(
                  rem.className,
                  "ty-title leading-[120%] text-white-100"
                )}
              >
                {referral_rewards.token1}
              </h1>
            </div>
          )}

          {/* Token 2 */}
          {referral_rewards.token2 > 0 && (
            <div className="flex items-center gap-2 pl-2 py-1 pr-1">
              <Image
                src={"/icons/referral-friends-icon/buck-icon.png"}
                alt={"token 2"}
                height={16}
                width={16}
                unoptimized
                className="rounded-full"
              />
              <h1
                className={cn(
                  rem.className,
                  "ty-title leading-[120%] text-white-100"
                )}
              >
                {referral_rewards.token2}
              </h1>
            </div>
          )}

          {/* Token 3 */}

          {referral_rewards.token3 > 0 && (
            <div className="flex items-center gap-2 pl-2 py-1 pr-1">
              <Image
                src={"/icons/referral-friends-icon/but-icon.png"}
                alt={"token 3"}
                height={16}
                width={16}
                unoptimized
                className="rounded-full"
              />
              <h1
                className={cn(
                  rem.className,
                  "ty-title leading-[120%] text-white-100"
                )}
              >
                {referral_rewards.token3}
              </h1>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          <h1 className={cn(rem.className, "w-full")}>Red Envelope Rewards</h1>
          <div className="flex items-center mr-2">
            {referral_rewards.token1 > 0 && (
              <Image
                src={"/icons/referral-friends-icon/sui-icon.png"}
                alt={"sui"}
                height={12}
                width={12}
                unoptimized
                className="rounded-full border border-white-100"
              />
            )}

            {referral_rewards.token2 > 0 && (
              <Image
                src={"/icons/referral-friends-icon/buck-icon.png"}
                alt={"buck"}
                height={12}
                width={12}
                unoptimized
                className="rounded-full border border-white-100 -ml-1 z-[2]"
              />
            )}

            {referral_rewards.token3 > 0 && (
              <Image
                src={"/icons/referral-friends-icon/but-icon.png"}
                alt={"but"}
                height={12}
                width={12}
                unoptimized
                className="rounded-full border border-white-100 -ml-1 z-[3]"
              />
            )}
          </div>
        </AccordionTrigger>
        <AccordionContent className="min-h-[40px] flex flex-wrap items-center justify-start">
          {/* Token 1 */}
          {red_envelope_rewards.token1 > 0 && (
            <div className="flex items-center gap-2 pl-2 py-1 pr-1">
              <Image
                src={"/icons/referral-friends-icon/sui-icon.png"}
                alt={"sui"}
                height={16}
                width={16}
                unoptimized
                className="rounded-full"
              />
              <h1
                className={cn(
                  rem.className,
                  "ty-title leading-[120%] text-white-100"
                )}
              >
                {red_envelope_rewards.token1}
              </h1>
            </div>
          )}

          {/* Token 2 */}
          {red_envelope_rewards.token2 > 0 && (
            <div className="flex items-center gap-2 pl-2 py-1 pr-1">
              <Image
                src={"/icons/referral-friends-icon/buck-icon.png"}
                alt={"token 2"}
                height={16}
                width={16}
                unoptimized
                className="rounded-full"
              />
              <h1
                className={cn(
                  rem.className,
                  "ty-title leading-[120%] text-white-100"
                )}
              >
                {red_envelope_rewards.token2}
              </h1>
            </div>
          )}

          {/* Token 3 */}

          {red_envelope_rewards.token3 > 0 && (
            <div className="flex items-center gap-2 pl-2 py-1 pr-1">
              <Image
                src={"/icons/referral-friends-icon/but-icon.png"}
                alt={"token 3"}
                height={16}
                width={16}
                unoptimized
                className="rounded-full"
              />
              <h1
                className={cn(
                  rem.className,
                  "ty-title leading-[120%] text-white-100"
                )}
              >
                {red_envelope_rewards.token3}
              </h1>
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Rewards;
