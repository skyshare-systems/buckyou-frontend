import { create } from "zustand";
// import { persist } from "zustand/middleware";

// Define the Zustand store state
export interface BuyEnvelopeState {
  isBuy: number;
  setIsBuy: (isBuy: number) => void;
}

// Create the Zustand store with persistence
export const useBuyEnvelope = create<BuyEnvelopeState>()(
  // persist(
  (set) => ({
    isBuy: 0,
    setIsBuy: (isBuy) => set({ isBuy }),
  })
  //   {
  //     name: "land-store", // Key for localStorage
  //   }
  // )
);
