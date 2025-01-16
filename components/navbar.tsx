/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import React, { useEffect, useState } from "react";
import BuckYouTextIcon from "./icon/buckyou-text";
import HelpSquareIcon from "./icon/help-square";
import { cn } from "@/lib/utils";
import { rem } from "@/public/fonts";
import ArrowDownIcon from "./icon/arrow-down";
import TelegramIcon from "./icon/socmed/telegram";
import TwitterIcon from "./icon/socmed/twitter";
import HelloThereOg from "./hello-there-og";
import GameRules from "./game-rules";
import { useConnectWallet } from "@/lib/store/connect-wallet-store";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DisconnectIcon from "./icon/disconnect";

const Navbar = () => {
  const { isConnected, setIsConnected } = useConnectWallet((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [isShowGameRules, setIsShowGameRules] = useState(false);

  const socmed = [
    {
      name: "Telegram",
      icon: <TelegramIcon />,
      link: "https://t.me/suibuckyou",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      link: "https://x.com/Buck_You_Legend",
    },
  ];

  useEffect(() => {
    if (isConnected) {
      setIsOpen(true);
    }
  }, [isConnected]);

  return (
    <>
      <GameRules isOpen={isShowGameRules} setIsOpen={setIsShowGameRules} />
      <HelloThereOg isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="backdrop-blur fixed top-0 left-0 flex justify-center items-center px-4 lg:px-2 py-7 z-[9999] w-full">
        <div className="flex flex-row justify-between items-center max-w-[1440px] grow">
          <a href="/">
            <BuckYouTextIcon />
          </a>
          <div className="hidden lg:flex flex-wrap gap-4 items-center">
            <div className="flex flex-wrap gap-2 items-center">
              <div className="flex flex-wrap items-center gap-4">
                {socmed.map((data, index) => {
                  return (
                    <a href={data.link} target="_blank" key={index}>
                      {data.icon}
                    </a>
                  );
                })}
              </div>
              <button
                onClick={() => setIsShowGameRules(!isShowGameRules)}
                className="flex flex-wrap items-center gap-2 py-2 px-3"
              >
                <HelpSquareIcon />
                <h1
                  className={cn(
                    rem.className,
                    "ty-descriptions text-white-100 leading-[120%]"
                  )}
                >
                  Game Rules
                </h1>
              </button>
            </div>
            <button className="rounded-lg bg-white-8 py-2 px-3 flex items-center gap-2">
              <h1
                className={cn(
                  rem.className,
                  "ty-descriptions text-white-100 leading-[120%]"
                )}
              >
                English
              </h1>
              <ArrowDownIcon />
            </button>
            {!isConnected ? (
              <button
                onClick={() => setIsConnected(!isConnected)}
                className="p-1 rounded-xl shadow-[0px_8px_16px_0pxrgba(255, 255, 255, 0.16)] border border-yellow-100 ease-out duration-300 hover:opacity-50"
              >
                <div className="py-2 px-3 rounded-lg bg-connect-wallet ty-title leading-[120%] text-black-100">
                  Connect Wallet
                </div>
              </button>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    onClick={() => setIsConnected(!isConnected)}
                    className="z-[99] group p-1 rounded-xl shadow-[0px_8px_16px_0pxrgba(255, 255, 255, 0.16)] border border-white-16 ease-out duration-300 hover:border-yellow-100"
                  >
                    <div className="py-2 px-3 rounded-lg bg-white-16 group-hover:bg-connect-wallet ty-title leading-[120%] text-white-100 group-hover:text-black-100 ease-out duration-300">
                      0x4193...abcd
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="z-[9999] relative border-0">
                  <DropdownMenuItem
                    onClick={() => setIsConnected(!isConnected)}
                    className="p-2 bg-white-100 rounded-lg"
                  >
                    <button className="flex items-center gap-2 py-1 px-2 bg-red-16  rounded-lg">
                      <DisconnectIcon />
                      <h1
                        className={cn(
                          rem.className,
                          "ty-descriptions leading-[120%] text-red-100 "
                        )}
                      >
                        Disconnect Wallet
                      </h1>
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
