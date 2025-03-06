/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        "rich-black": "hsl(var(--rich-black))",
        "russian-violet": "hsl(var(--russian-violet))",
        "cool-gray": "hsl(var(--cool-gray))",
        white: "hsl(var(--white))",
        "blue-violet": "hsl(var(--blue-violet))",
        "electric-cyan": "hsl(var(--electric-cyan))",
        "neon-magenta": "hsl(var(--neon-magenta))",
        "luminous-gold": "hsl(var(--luminous-gold))",
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
        highlight: {
          DEFAULT: "hsl(var(--highlight))",
          foreground: "hsl(var(--highlight-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "particle-animation": {
          from: { transform: "translateY(0px)" },
          to: { transform: "translateY(-2560px)" },
        },
        "rise-slow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-192px)" },
        },
        "rise-medium": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-192px)" },
        },
        "rise-fast": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-192px)" },
        },
        "gradient-angle": {
          to: { '--gradient-angle': '360deg' }
        },        
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
        shimmer: "shimmer 8s infinite linear",
        particle1: "particle-animation 60s linear infinite",
        particle2: "particle-animation 120s linear infinite",
        particle3: "particle-animation 180s linear infinite",
        particle4: "particle-animation 200s linear infinite",
        "rise-slow": "rise-slow 15s linear infinite",
        "rise-medium": "rise-medium 10s linear infinite",
        "rise-fast": "rise-fast 7s linear infinite",
        "gradient-angle": "gradient-angle 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

