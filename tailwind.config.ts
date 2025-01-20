import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fd6f00",
      },
      fontSize: {
        display: ["100px", "4.5rem"],
        "display-mobile": ["60px", "3rem"],
        display1: ["65px", "3.833rem"],
        "display1-mobile": ["45px", "2.8rem"],
        h1: ["48px", "2.856rem"],
        "h1-mobile": ["36px", "2.2rem"],
        h2: ["44px", "2.44rem"],
        "h2-mobile": ["32px", "2rem"],
        h3: ["32px", "1.944rem"],
        "h3-mobile": ["28px", "1.7rem"],
        h4: ["28px", "1.556rem"],
        "h4-mobile": ["24px", "1.4rem"],
        h5: ["24px", "1.278rem"],
        "h5-mobile": ["20px", "1.2rem"],
        "text-md": ["21px", "1.87rem"],
        "text-md-mobile": ["18px", "1.5rem"],
        "text-base": ["18px", "1.0rem"],
        "text-base-mobile": ["16px", "0.9rem"],
        "text-sm": ["14px", "0.778rem"],
        "text-sm-mobile": ["12px", "0.7rem"],
        "text-xs": ["12px", "0.667rem"],
        "text-xs-mobile": ["10px", "0.6rem"],
      },
      maxWidth: {
        container: "1420px",
        "container-mobile": "375px",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
