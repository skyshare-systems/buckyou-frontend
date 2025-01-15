import { create } from "zustand";
// import { persist } from "zustand/middleware";

// Define the Zustand store state
export interface ReferralState {
  referralCode: string;
  setReferralCode: (referralCode: string) => void;
}

// Create the Zustand store with persistence
export const useReferralCode = create<ReferralState>()(
  // persist(
  (set) => ({
    referralCode: "",
    setReferralCode: (referralCode) => set({ referralCode }),
  })
  //   {
  //     name: "land-store", // Key for localStorage
  //   }
  // )
);
