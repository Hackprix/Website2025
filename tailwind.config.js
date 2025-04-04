// import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{ts,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      "color-1": "hsl(var(--color-1))",
      "color-2": "hsl(var(--color-2))",
      "color-3": "hsl(var(--color-3))",
      "color-4": "hsl(var(--color-4))",
      "color-5": "hsl(var(--color-5))",
    },
    animation: {
      aurora: "aurora 60s linear infinite",
      "shimmer-slide": "shimmer-slide var(--speed) ease-in-out infinite alternate",
      "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      rainbow: "rainbow var(--speed, 2s) infinite linear",
    },
    keyframes: {
      aurora: {
        from: {
          backgroundPosition: "50% 50%, 50% 50%",
        },
        to: {
          backgroundPosition: "350% 50%, 350% 50%",
        },
      },
      "spin-around": {
        "0%": {
          transform: "translateZ(0) rotate(0)",
        },
        "15%, 35%": {
          transform: "translateZ(0) rotate(90deg)",
        },
        "65%, 85%": {
          transform: "translateZ(0) rotate(270deg)",
        },
        "100%": {
          transform: "translateZ(0) rotate(360deg)",
        },
      },
      "shimmer-slide": {
        to: {
          transform: "translate(calc(100cqw - 100%), 0)",
        },
      },
      rainbow: {
        "0%": { "background-position": "0%" },
        "100%": { "background-position": "200%" },
      },
    },
  },
};
export const plugins = [
  addVariablesForColors,
];
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
      },
      keyframes: {
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke': {
          'text-shadow': '2px 2px 0 rgba(255, 255, 255, 0.9), -2px -2px 0 rgba(255, 255, 255, 0.9)', /* White stroke */
          '-webkit-background-clip': 'text',
          'color': 'transparent',
        },
      })
    },
  ],
};
