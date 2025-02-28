// import { transform } from "next/dist/build/swc/generated-native";
// import { text } from "stream/consumers";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-radial': 'radial-gradient(#b91c1c, transparent, transparent)',
        'btn-radial': 'radial-gradient(#f5deb3, transparent)',
      },
      colors: {
        contrast: "var(--contrast)",
        colour: "var(--colour)",
        accent: "var(--accent)",
        snow: "var(--snow)",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0", borderRight: "2px solid" },
          "100%": { width: "100%", borderRight: "2px solid" },
        },
        blink: {
          "50%": { borderColor: "transparent" },
        },
        textFadeIn: {
          "0%": { opacity: "0", scale: "0", transform: "translateY(-20%)" },
          "100%": { opacity: "1", scale: "1" },
        },
        headerFadeIn: {
          "0%": { opacity: "0", scale: "0" },
          "90%": { scale: "1.1" },
          "100%": { opacity: "1", scale: "1" },
        },
        moviesFadeIn: {
          "0%,40%": { opacity: "0", scale: "0" },
          "90%": { scale: "1.1" },
          "100%": { opacity: "1", scale: "1" },
        },
        lineLandingHeaderAnim: {
          "0%,10%,100%": {
            width: "0%"
          },
          "80%,90%": { width: "100%" }
        },
        snowFall: {
          "0%": { top: "-5%", opacity: "1" },
          "70%": { top: "80%", opacity: ".5" },
          "70%, 100%": { top: "85%", opacity: "3" }
        },
        slidingMarquee: {
          "0%,15%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        bgFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        bgFadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" }
        },
        rotateClockWise: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        rotateCounterClock: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" }
        }
      },
      animation: {
        typewriter: "typewriter 5s steps(5) 1s forwards, blink .9s step-end infinite",
        textFadeIn: "textFadeIn",
        moviesFadeIn: "moviesFadeIn 3.5s ease-in",
        headerFadeIn: "headerFadeIn 2s linear",
        lineLandingHeaderAnim: "lineLandingHeaderAnim 6s linear 3s infinite",
        snowFall: "snowFall 10s ease-out infinite",
        slidingMarquee: "slidingMarquee 40s linear infinite",
        bgFadeOut: "bgFadeOut",
        bgFadeIn: "bgFadeIn 1s ease-in-out",
        rotateClockWise: "rotateClockWise 5s linear infinite",
        rotateCounterClock: "rotateCounterClock 5s linear infinite"
      },
    },
  },
  plugins: [],
};
export default config;
