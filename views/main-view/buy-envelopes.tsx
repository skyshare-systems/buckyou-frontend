/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { phudu, rem } from "@/public/fonts";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Switch, { SwitchProps } from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ArrowDownIcon from "@/components/icon/arrow-down";
import { useConnectWallet } from "@/lib/store/connect-wallet-store";
import { useReferralCode } from "@/lib/store/referral-code-store";
import { useBuyEnvelope } from "@/lib/store/buy-envelope-store";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
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

const BuyEnvelopes = () => {
  const [isCheck, setIsCheck] = useState(false);
  const [quantity, setQuantity] = useState<any>(1);
  const [tokenPayment, setTokenPayment] = useState({
    tokenName: "SUI",
    tokenIcon: "/icons/token/SUI.png",
  });
  const { isConnected, setIsConnected } = useConnectWallet((state) => state);
  const { referralCode } = useReferralCode((state) => state);

  const { isBuy, setIsBuy } = useBuyEnvelope((state) => state);

  const token = [
    {
      name: "SUI",
      image: "/icons/token/SUI.png",
    },
    {
      name: "BUCK",
      image: "/icons/token/BUCK.svg",
    },
    {
      name: "BUT",
      image: "/icons/token/BUT.png",
    },
    {
      name: "deBUT",
      image: "/icons/token/deBUT.svg",
    },
    {
      name: "wUSDC",
      image: "/icons/token/wUSDC.png",
    },
    {
      name: "USDC",
      image: "/icons/token/USDC.png",
    },
    {
      name: "wUSDT",
      image: "/icons/token/wUSDT.png",
    },
    {
      name: "DEEP",
      image: "/icons/token/DEEP.png",
    },
    {
      name: "NS",
      image: "/icons/token/NS.svg",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Regex to allow up to 5 whole digits, 1 decimal point, and up to 5 decimal places
    const regex = /^\d{0,5}(\.\d{0,5})?$/;

    // Validate the input against the regex pattern
    if (regex.test(value)) {
      // Remove leading zeros (e.g., '00123' => '123')
      value = value.replace(/^0+(\d)/, "$1");

      // Set the valid amount
      setQuantity(value);
    }
  };

  const [referralCodeText, setReferralCodeText] = useState("");

  function handleChangeReferrer(e: any) {
    const value = e.target.value;
    setReferralCodeText(value);
  }

  return (
    <HoverBorderGradient className="self-stretch flex flex-col lg:justify-between items-start gap-8 min-h-[600px] sm:min-w-[320px] w-full sm:max-w-[320px] relative  overflow-hidden  rounded-2xl p-8">
      <Image
        src={"/assets/sui-envelopes.png"}
        alt={"envelope"}
        height={426}
        width={426}
        unoptimized
        className="absolute top-0 right-0 z-[1]"
      />
      <Image
        src={"/assets/sui-envelopes.png"}
        alt={"envelope"}
        height={426}
        width={426}
        unoptimized
        className="absolute top-0 right-0 blur-3xl"
      />
      <div className="flex flex-col gap-8 justify-between items-start grow w-full">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-2 items-start justify-start max-w-[133px] w-full ">
            <h1
              className={cn(
                phudu.className,
                "text-white-100 font-bold text-2xl text-left"
              )}
            >
              Buy Envelopes
            </h1>
            <p
              className={cn(
                rem.className,
                "ty-subtitle leading-[120%] text-left"
              )}
            >
              <span className="text-white-50">
                Each purchased envelope adds{" "}
              </span>
              <br />
              <span className="text-white-100">1 minute </span>
              <span className="text-white-50">to the timer</span>
            </p>
          </div>
          <div className="flex flex-col gap-3 items-start w-full">
            <div className="flex items-center space-x-2">
              <IOSSwitch
                onChange={() => setIsCheck(!isCheck)}
                checked={isCheck}
                className={cn("z-[2]")}
                // disabled={isBuy !== 0}
              />
              <h1
                className={cn(rem.className, "text-white-50 ty-descriptions")}
              >
                I have a referrer
              </h1>
            </div>
            {isCheck && (
              <div className="flex flex-col gap-2 p-2 rounded-2xl bg-white-4 backdrop-blur w-full  z-[2]">
                <h1
                  className={cn(
                    rem.className,
                    "text-white-50 ty-subtitle text-left"
                  )}
                >
                  Referrer Code
                </h1>

                <div className="rounded-lg border border-white-16 bg-white-4 backdrop-blur p-4">
                  <Input
                    placeholder="Code"
                    onChange={handleChangeReferrer}
                    value={referralCodeText}
                    disabled={isBuy !== 0}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-8 w-full">
          <div className="flex flex-wrap items-start gap-4">
            <div className="flex flex-col items-start">
              <h1
                className={cn(
                  rem.className,
                  "text-white-50 leading-[120%] ty-subtext"
                )}
              >
                Envelope Price
              </h1>
              <div className="flex items-center gap-1">
                <Image
                  src={"/icons/sui-icon.png"}
                  alt={"sui"}
                  height={16}
                  width={16}
                  className="rounded-full"
                  unoptimized
                />
                <h1 className={cn(phudu.className, "text-white-100 ty-h4")}>
                  4
                </h1>
              </div>
              <h1
                className={cn(
                  rem.className,
                  "text-white-50 leading-[120%] ty-subtext"
                )}
              >
                ~19.88 USD
              </h1>
            </div>

            <div className="flex flex-col items-start">
              <h1
                className={cn(
                  rem.className,
                  "text-white-50 leading-[120%] ty-subtext"
                )}
              >
                Current Day
              </h1>
              <h1 className={cn(phudu.className, "text-white-100 ty-h4")}>4</h1>
            </div>
          </div>

          {!isConnected ? (
            <button
              onClick={() => setIsConnected(!isConnected)}
              className={cn(
                rem.className,
                "ty-title leading-[120%] p-3",
                "rounded-lg bg-white-4 text-white-100",
                "hover:bg-connect-wallet hover:text-black-100 ease-out duration-300 w-full"
              )}
            >
              Connect Wallet
            </button>
          ) : (
            <div className="flex flex-col gap-2 items-start">
              <div className="flex flex-col md:flex-row gap-2 items-start justify-evenly w-full">
                <div className="flex flex-col gap-1 items-start justify-center w-full">
                  <h1 className={cn(rem.className, "ty-subtext text-white-50")}>
                    Envelope Quantity
                  </h1>

                  <div className="flex items-center rounded-2xl border border-white-16 bg-white-4 backdrop-blur-sm p-2 grow self-stretch">
                    <button
                      onClick={() =>
                        quantity <= 1 ? 1 : setQuantity(quantity - 1)
                      }
                      className={cn(
                        rem.className,
                        "ty-title text-white-100 leading-[120%] w-[32px] h-[32px]"
                      )}
                    >
                      -
                    </button>
                    <Input
                      type="text"
                      onChange={handleChange}
                      className={cn(
                        rem.className,
                        "ty-h5 leading-[120%] font-semibold text-center"
                      )}
                      value={quantity}
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className={cn(
                        rem.className,
                        "ty-title text-white-100 leading-[120%] w-[32px] h-[32px]"
                      )}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-1 items-start justify-center w-full">
                  <h1 className={cn(rem.className, "ty-subtext text-white-50")}>
                    Token Payment
                  </h1>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      asChild
                      className="flex items-center rounded-2xl border border-white-16 bg-white-4 backdrop-blur-sm p-2 self-stretch grow min-h-[48px] py-2 px-3"
                    >
                      <button className="leading-[120%] font-semibold text-center text-white-100 flex justify-between">
                        <div className="flex items-center gap-1">
                          <Image
                            src={tokenPayment.tokenIcon}
                            alt={tokenPayment.tokenName}
                            height={18}
                            width={18}
                            className="rounded-full"
                            unoptimized
                          />
                          <h1 className="ty-title">{tokenPayment.tokenName}</h1>
                        </div>
                        <ArrowDownIcon />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white-4 backdrop-blur border border-white-16 rounded-2xl">
                      {token.map((data, index) => {
                        return (
                          <DropdownMenuItem
                            key={index}
                            onClick={() =>
                              setTokenPayment({
                                tokenName: data.name,
                                tokenIcon: data.image,
                              })
                            }
                            className="leading-[120%] font-semibold text-center ty-title text-white-100 hover:text-yellow-100 flex items-center gap-2 ease-out duration-300 cursor-pointer"
                          >
                            <Image
                              src={data.image}
                              alt={data.name}
                              height={18}
                              width={18}
                              className="rounded-full"
                              unoptimized
                            />
                            {data.name}
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <button
                onClick={() => setIsBuy(isBuy + 1)}
                className={cn(
                  rem.className,
                  "ty-title leading-[120%] p-3",
                  "rounded-lg text-black-100",
                  "bg-connect-wallet ease-out duration-300 w-full hover:opacity-75"
                )}
              >
                Buy {quantity} Envelopes with {tokenPayment.tokenName}
              </button>

              <div className="flex flex-wrap justify-center items-center gap-2 w-full">
                <h1
                  className={cn(
                    rem.className,
                    "text-white-50 leading-[120%] ty-subtext"
                  )}
                >
                  ~426.74 USD
                </h1>
                {isBuy !== 0 && (
                  <h1
                    className={cn(
                      rem.className,
                      "text-green-100 leading-[120%] ty-subtext"
                    )}
                  >
                    10% Discount Applied
                  </h1>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </HoverBorderGradient>
  );
};

export default BuyEnvelopes;
