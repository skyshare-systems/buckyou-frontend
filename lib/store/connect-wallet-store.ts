import { create } from "zustand";
// import { persist } from "zustand/middleware";

// Define the Zustand store state
export interface WalletState {
  isConnected: boolean;
  setIsConnected: (isConnected: boolean) => void;
}

// Create the Zustand store with persistence
export const useConnectWallet = create<WalletState>()(
  // persist(
  (set) => ({
    isConnected: false,
    setIsConnected: (isConnected) => set({ isConnected }),
  })
  //   {
  //     name: "land-store", // Key for localStorage
  //   }
  // )
);
