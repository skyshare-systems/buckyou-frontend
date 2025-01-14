import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";
import CrossIcon from "./icon/cross";

interface IModal {
  isOpen: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const GameRules = ({ isOpen, setIsOpen }: IModal) => {
  if (!isOpen) return null;

  const red_envelopes = [
    {
      description:
        "Users can purchase red envelopes using tokens (SUI, BUCK, BUT & deBUT, etc.).",
    },
    {
      description:
        "Price is set at 1 SUI on the first day of the game, and it increases by 1 SUI with each subsequent day of the game. (e.g., Day 1 → 1 SUI, Day 2 → 2 SUI, Day 3 → 3 SUI, …)",
    },
  ];

  const game_timer = [
    {
      description:
        "Users can purchase red envelopes using tokens (SUI, BUCK, BUT & deBUT, etc.).",
    },
    {
      description:
        "Price is set at 1 SUI on the first day of the game, and it increases by 1 SUI with each subsequent day of the game. (e.g., Day 1 → 1 SUI, Day 2 → 2 SUI, Day 3 → 3 SUI, …)",
    },
  ];

  const winning_rules = [
    {
      description: "Last Buyer (40%)",
    },
    {
      description: "Second-to-last Buyer (30%)",
    },
    {
      description: "Third-to-last Buyer (20%)",
    },
    {
      description: "Fourth-to-last Buyer (10%)",
    },
  ];

  const with_referrer = [
    {
      description: "35% final pool prize",
    },
    {
      description: "45% envelopes holders",
    },
    {
      description: "10% dev",
    },
    {
      description: "10% referrer",
    },
  ];

  const without_referrer = [
    {
      description: "Last Buyer (40%)",
    },
    {
      description: "Second-to-last Buyer (30%)",
    },
    {
      description: "Third-to-last Buyer (20%)",
    },
    {
      description: "Fourth-to-last Buyer (10%)",
    },
  ];

  const referrer_rules = [
    {
      description: "One wallet address can have one exclusive referral link",
    },
    {
      description:
        "Each wallet address can be referred to by only one referer.",
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-black-16 backdrop-blur-lg min-h-[100dvh] z-[99999]">
      <div className="bg-game-rules min-w-[320px] max-w-[640px] w-full flex flex-col justify-start items-start">
        <div className="bg-black-50 flex items-center p-8 self-stretch rounded-t-3xl relative overflow-hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-3 cursor-pointer z-[2] ease-out duration-300 hover:scale-125"
          >
            <CrossIcon />
          </button>
          <h1
            className={cn(
              phudu.className,
              "text-[40px] font-bold leading-[100%] text-white-100"
            )}
          >
            Game Rules
          </h1>

          <Image
            src={"/assets/game-rules-v2.png"}
            alt={"game rules"}
            height={223.828}
            width={229.394}
            className="absolute -top-[2rem] right-0"
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-4 p-8 items-start justify-start">
          <div className="flex flex-col gap-2">
            <h1
              className={cn(
                rem.className,
                "ty-title text-yellow-100 font-semibold"
              )}
            >
              Buying red envelopes
            </h1>
            <ul className="list-disc ml-[1.2rem]">
              {red_envelopes.map((data, index) => {
                return (
                  <li
                    key={index}
                    className={cn(
                      rem.className,
                      "leading-[120%] text-white-72 ty-descriptions"
                    )}
                  >
                    {data.description}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h1
              className={cn(
                rem.className,
                "ty-title text-yellow-100 font-semibold"
              )}
            >
              Game Timer
            </h1>
            <ul className="list-disc ml-[1.2rem]">
              {game_timer.map((data, index) => {
                return (
                  <li
                    key={index}
                    className={cn(
                      rem.className,
                      "leading-[120%] text-white-72 ty-descriptions"
                    )}
                  >
                    {data.description}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h1
              className={cn(
                rem.className,
                "ty-title text-yellow-100 font-semibold"
              )}
            >
              Winning rules
            </h1>

            <p
              className={cn(
                rem.className,
                "leading-[120%] text-white-72 ty-descriptions"
              )}
            >
              When the timer hits zero, the last 4 buyers win and share the
              Final Prize Pool:
            </p>

            <ul className="list-disc ml-[1.2rem]">
              {winning_rules.map((data, index) => {
                return (
                  <li
                    key={index}
                    className={cn(
                      rem.className,
                      "leading-[120%] text-white-72 ty-descriptions"
                    )}
                  >
                    {data.description}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <h1
              className={cn(
                rem.className,
                "ty-title text-yellow-100 font-semibold"
              )}
            >
              Funds distribution
            </h1>
            <div className="flex flex-col lg:flex-row items-start justify-start gap-2">
              <div className="flex flex-col gap-2 items-start max-w-[284px]">
                <h1
                  className={cn(
                    rem.className,
                    "ty-subtitle leading-[120%] text-white-50"
                  )}
                >
                  With Referrer
                </h1>

                <p
                  className={cn(
                    rem.className,
                    "ty-subtitle leading-[120%] text-white-72"
                  )}
                >
                  Referred persons get a 10% discount (e.g., 10 SUI → 9 SUI)
                </p>

                <p
                  className={cn(
                    rem.className,
                    "ty-subtitle leading-[120%] text-white-72"
                  )}
                >
                  Referrers earn 10% of the referred person’s purchase (e.g., 9
                  SUI → 0.9 SUI)
                </p>

                <ul className="list-disc ml-[1.2rem]">
                  {with_referrer.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className={cn(
                          rem.className,
                          "leading-[120%] text-white-72 ty-descriptions"
                        )}
                      >
                        {data.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <h1
                  className={cn(
                    rem.className,
                    "ty-subtitle leading-[120%] text-white-50"
                  )}
                >
                  Without Referrer
                </h1>

                <ul className="list-disc ml-[1.2rem]">
                  {without_referrer.map((data, index) => {
                    return (
                      <li
                        key={index}
                        className={cn(
                          rem.className,
                          "leading-[120%] text-white-72 ty-descriptions"
                        )}
                      >
                        {data.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h1
              className={cn(
                rem.className,
                "ty-title text-yellow-100 font-semibold"
              )}
            >
              Referrer Rules
            </h1>
            <ul className="list-disc ml-[1.2rem]">
              {referrer_rules.map((data, index) => {
                return (
                  <li
                    key={index}
                    className={cn(
                      rem.className,
                      "leading-[120%] text-white-72 ty-descriptions"
                    )}
                  >
                    {data.description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameRules;
