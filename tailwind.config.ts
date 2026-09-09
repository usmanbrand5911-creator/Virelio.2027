import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: "#070A11",
          900: "#0B0F19",
          800: "#111827",
          700: "#1F2937",
        },
        aurora: {
          cyan: "#06B6D4",
          violet: "#8B5CF6",
          emerald: "#10B981",
          pink: "#EC4899",
        },
      },
      backgroundImage: {
        "aurora-gradient": "radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.1) 50%, transparent 80%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      backdropBlur: {
        glass: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
