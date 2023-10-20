import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7825ff",
        secondary: "#ff00c7",
        "black-color": "#121212",
        sub: "rgb(121, 128, 139)",
        "sub-30": "rgba(121, 128, 139, 0.3)",
      },
      backgroundImage: {
        "on-code": "linear-gradient(48deg, #7825ff -94.24%, #ff00c7 93.57%);",
        "on-code-70":
          "linear-gradient(48deg, #7825ffb3 -94.24%, #ff00c7b3 93.57%)",
      },
      aspectRatio: {
        "card-image": "420px / 240px",
      },
      height: {
        "screen-navbar": "calc(100vh - 64px)!important",
      },
    },
  },
  plugins: [],
};
export default config;
