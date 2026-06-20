import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F2EFE7",
        "paper-2": "#EAE5D9",
        charcoal: "#1A1815",
        steel: "#2A2723",
        ink: "#0B0A09",
        warmgrey: "#8C8479",
        hairline: "#D9D3C7",
        // Trade accents
        volt: "#F4B400", // electrical
        "volt-deep": "#C28A00",
        pipe: "#2C5C7F", // plumbing
        "pipe-deep": "#1E3F58",
        "pipe-light": "#7FACC9",
        copper: "#B5531E", // heating
        "copper-deep": "#8C3E14",
        "copper-light": "#DD8A55",
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        stamp: ["Oswald", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        stamp: "0.18em",
      },
      maxWidth: {
        shell: "1280px",
      },
      boxShadow: {
        lift: "0 30px 60px -25px rgba(11,10,9,0.45)",
      },
      keyframes: {
        "draw-run": {
          from: { strokeDashoffset: "1200" },
          to: { strokeDashoffset: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "draw-run": "draw-run 2.4s ease-out forwards",
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
