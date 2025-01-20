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
        display: ["66px", "3.833rem"],
        h1: ["55px", "3.056rem"],
        h2: ["44px", "2.44rem"],
        h3: ["35px", "1.944rem"],
        h4: ["28px", "1.556rem"],
        h5: ["23px", "1.278rem"],
        "text-base": ["18px", "1.0rem"],
        "text-sm": ["14px", "0.778rem"],
        "text-xs": ["12px", "0.667rem"],
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
