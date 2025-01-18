"use client";
import { useBuyEnvelope } from "@/lib/store/buy-envelope-store";
import { cn } from "@/lib/utils";
import { phudu } from "@/public/fonts";
import { useState, useEffect, useCallback } from "react";

const CountdownTimer = () => {
  const { isBuy } = useBuyEnvelope((state) => state);
  const [isShowOneMinute, setIsShowOneMinute] = useState(false);

  const initialEpochTime = 1765659600; // Example: January 31, 2025, 00:00:00 UTC
  const [targetEpochTime, setTargetEpochTime] =
    useState<number>(initialEpochTime);

  const calculateTimeLeft = useCallback(() => {
    const now = Math.floor(Date.now() / 1000); // Current epoch time in seconds
    const difference = targetEpochTime - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (60 * 60 * 24)),
      hours: Math.floor((difference / (60 * 60)) % 24),
      minutes: Math.floor((difference / 60) % 60),
      seconds: Math.floor(difference % 60),
    };
  }, [targetEpochTime]);

  const [timeLeft, setTimeLeft] =
    useState<ReturnType<typeof calculateTimeLeft>>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const addOneMinute = () => {
    setTargetEpochTime((prev) => prev + 60); // Adds 60 seconds to the target epoch time
  };

  useEffect(() => {
    if (isBuy) {
      addOneMinute();
      setIsShowOneMinute(true);
    }

    const timeoutId = setTimeout(() => {
      setIsShowOneMinute(false);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [isBuy]);

  if (!timeLeft) {
    return (
      <p
        className={cn(
          phudu.className,
          "text-[64px] font-bold text-white-100 leading-[100%]"
        )}
      >
        The countdown is over!
      </p>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <h1
        className={cn(
          phudu.className,
          "text-2xl md:text-[64px] font-bold text-white-100 leading-[100%]"
        )}
      >
        {timeLeft.days}:{timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
      </h1>
      <div
        className={`bg-green-32 rounded-full py-1 px-2 fade ${
          isShowOneMinute ? "show" : ""
        }`}
      >
        <h1 className="ty-title text-green-100">+1 min</h1>
      </div>
    </div>
  );
};

export default CountdownTimer;
