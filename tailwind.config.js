/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "tight-sm": "-0.02em",
      },
      screens: {
        short: { raw: "(max-height: 800px)" },
      },
    },
  },
  plugins: [],
}
