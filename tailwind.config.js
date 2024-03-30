import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": ['0.6rem', {
          lineHeight: '0.6rem',
        }]
      },
    },
    fontFamily: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#E8FAF0",
            primary: {
              50: "#E8FAF0",
              100: "#D1F4E0",
              200: "#A2E9C1",
              300: "#74DFA2",
              400: "#45D483",
              500: "#17C964",
              600: "#12A150",
              700: "#0E793C",
              800: "#095028",
              900: "#052814",
              foreground: "#FFFFFF",
              DEFAULT: "#12A150",
            },
          },
        },
        dark: {
          colors: {
            background: "#04140b",
            primary: {
              50: "#E8FAF0",
              100: "#D1F4E0",
              200: "#A2E9C1",
              300: "#74DFA2",
              400: "#45D483",
              500: "#17C964",
              600: "#12A150",
              700: "#0E793C",
              800: "#095028",
              900: "#052814",
              foreground: "#FFFFFF",
              DEFAULT: "#12A150",
            },
          },
        },
      },
    })
  ],
};