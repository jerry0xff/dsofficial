/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      letterSpacing: {
        "tight-sm": "-0.02em",
      },
    },
  },
  plugins: [],
}
