import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // tema do site
        cream: "hsl(var(--cream))",
        ink: "hsl(var(--ink))",
        "ink-soft": "hsl(var(--ink-soft))",
        line: "hsl(var(--line))",
        burgundy: "hsl(var(--burgundy))",
        ember: "hsl(var(--ember))",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        sans: ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        draw: {
          "0%": { strokeDashoffset: "1200" },
          "100%": { strokeDashoffset: "0" },
        },
        pulseStroke: {
          "0%, 100%": { filter: "drop-shadow(0 0 4px hsl(var(--ember) / 0.25))" },
          "50%": { filter: "drop-shadow(0 0 14px hsl(var(--ember) / 0.6))" },
        },
        ping: {
          "0%": { boxShadow: "0 0 0 0 hsl(var(--ember) / 0.55)" },
          "80%": { boxShadow: "0 0 0 18px hsl(var(--ember) / 0)" },
          "100%": { boxShadow: "0 0 0 0 hsl(var(--ember) / 0)" },
        },
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(.2,.7,.2,1) forwards",
        draw: "draw 4.5s cubic-bezier(.6,.05,.2,1) .6s forwards",
        pulseStroke: "pulseStroke 1.4s ease-in-out 5s infinite",
        ping: "ping 1.4s ease-out 5s infinite",
        appear: "appear 0.4s ease 5s forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
