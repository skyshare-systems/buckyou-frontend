import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        dgreen: {
          "4": "rgba(32, 66, 16, 0.04)",
          "8": "rgba(32, 66, 16, 0.08)",
          "12": "rgba(32, 66, 16, 0.12)",
          "16": "rgba(32, 66, 16, 0.16)",
          "32": "rgba(32, 66, 16, 0.32)",
          "50": "rgba(32, 66, 16, 0.50)",
          "72": "rgba(32, 66, 16, 0.72)",
          "80": "rgba(32, 66, 16, 0.80)",
          "100": "#204210",
        },
        green: {
          "4": "rgba(126, 203, 121, 0.04)",
          "8": "rgba(126, 203, 121, 0.08)",
          "12": "rgba(126, 203, 121, 0.12)",
          "16": "rgba(126, 203, 121, 0.16)",
          "32": "rgba(126, 203, 121, 0.32)",
          "50": "rgba(126, 203, 121, 0.50)",
          "72": "rgba(126, 203, 121, 0.72)",
          "80": "rgba(126, 203, 121, 0.80)",
          "100": "#7ECB79",
        },
        yellow: {
          "4": "rgba(246, 211, 88, 0.04)",
          "8": "rgba(246, 211, 88, 0.08)",
          "12": "rgba(246, 211, 88, 0.12)",
          "16": "rgba(246, 211, 88, 0.16)",
          "32": "rgba(246, 211, 88, 0.32)",
          "50": "rgba(246, 211, 88, 0.50)",
          "72": "rgba(246, 211, 88, 0.72)",
          "80": "rgba(246, 211, 88, 0.80)",
          "100": "#F6D358",
        },
        pink: {
          "4": "rgba(219, 135, 132, 0.04)",
          "8": "rgba(219, 135, 132, 0.08)",
          "12": "rgba(219, 135, 132, 0.12)",
          "16": "rgba(219, 135, 132, 0.16)",
          "32": "rgba(219, 135, 132, 0.32)",
          "50": "rgba(219, 135, 132, 0.50)",
          "72": "rgba(219, 135, 132, 0.72)",
          "80": "rgba(219, 135, 132, 0.80)",
          "100": "#DB8784",
        },
        red: {
          "4": "rgba(207, 48, 62, 0.04)",
          "8": "rgba(207, 48, 62, 0.08)",
          "12": "rgba(207, 48, 62, 0.12)",
          "16": "rgba(207, 48, 62, 0.16)",
          "32": "rgba(207, 48, 62, 0.32)",
          "50": "rgba(207, 48, 62, 0.50)",
          "72": "rgba(207, 48, 62, 0.72)",
          "80": "rgba(207, 48, 62, 0.80)",
          "100": "#CF303E",
        },
        blue: {
          "4": "rgba(130, 162, 254, 0.04)",
          "8": "rgba(130, 162, 254, 0.08)",
          "12": "rgba(130, 162, 254, 0.12)",
          "16": "rgba(130, 162, 254, 0.16)",
          "32": "rgba(130, 162, 254, 0.32)",
          "50": "rgba(130, 162, 254, 0.50)",
          "72": "rgba(130, 162, 254, 0.72)",
          "80": "rgba(130, 162, 254, 0.80)",
          "100": "#82A2FE",
        },
        cream: {
          "4": "rgba(231, 230, 225, 0.04)",
          "8": "rgba(231, 230, 225, 0.08)",
          "12": "rgba(231, 230, 225, 0.12)",
          "16": "rgba(231, 230, 225, 0.16)",
          "32": "rgba(231, 230, 225, 0.32)",
          "50": "rgba(231, 230, 225, 0.50)",
          "72": "rgba(231, 230, 225, 0.72)",
          "80": "rgba(231, 230, 225, 0.80)",
          "100": "#E7E6E1",
        },
        white: {
          "4": "rgba(255, 255, 255, 0.04)",
          "8": "rgba(255, 255, 255, 0.08)",
          "12": "rgba(255, 255, 255, 0.12)",
          "16": "rgba(255, 255, 255, 0.16)",
          "32": "rgba(255, 255, 255, 0.32)",
          "50": "rgba(255, 255, 255, 0.50)",
          "72": "rgba(255, 255, 255, 0.72)",
          "80": "rgba(255, 255, 255, 0.80)",
          "100": "#FFF",
        },
        gray: {
          "4": "rgba(79, 79, 79, 0.04)",
          "8": "rgba(79, 79, 79, 0.08)",
          "12": "rgba(79, 79, 79, 0.12)",
          "16": "rgba(79, 79, 79, 0.16)",
          "32": "rgba(79, 79, 79, 0.32)",
          "50": "rgba(79, 79, 79, 0.50)",
          "72": "rgba(79, 79, 79, 0.72)",
          "80": "rgba(79, 79, 79, 0.80)",
          "100": "#4F4F4F",
        },
        black: {
          "4": "rgba(9, 18, 18, 0.04)",
          "8": "rgba(9, 18, 18, 0.08)",
          "12": "rgba(9, 18, 18, 0.12)",
          "16": "rgba(9, 18, 18, 0.16)",
          "32": "rgba(9, 18, 18, 0.32)",
          "50": "rgba(9, 18, 18, 0.50)",
          "72": "rgba(9, 18, 18, 0.72)",
          "80": "rgba(9, 18, 18, 0.80)",
          "100": "#091212",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export const defaultTheme = require("tailwindcss/defaultTheme");
export const colors = require("tailwindcss/colors");
export const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
