/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(220 100% 10%)", // Deep Blue-Black
          foreground: "hsl(0 0% 100%)",
        },
        secondary: {
          DEFAULT: "hsl(220 100% 50% / 0.8)", // Neon Blue with transparency
          foreground: "hsl(0 0% 100%)",
        },
      },
    },
  },
  plugins: [],
}

