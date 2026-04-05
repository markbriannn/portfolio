import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        muted: "hsl(var(--muted))",
        border: "hsl(var(--border))",
        surface: "hsl(var(--surface))",
        "surface-strong": "hsl(var(--surface-strong))",
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        accent: "hsl(var(--accent))",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(86, 184, 255, 0.18), transparent 38%), radial-gradient(circle at 80% 20%, rgba(47, 197, 167, 0.18), transparent 30%), linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
        "grid-fade":
          "linear-gradient(to right, rgba(127, 140, 160, 0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(127, 140, 160, 0.12) 1px, transparent 1px)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        premium:
          "0 24px 80px -32px rgba(8, 15, 30, 0.45), 0 10px 30px -18px rgba(19, 36, 62, 0.28)",
        glow: "0 12px 40px rgba(56, 189, 248, 0.18)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.04)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulseGlow 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
