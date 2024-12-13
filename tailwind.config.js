/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
      },
      boxShadow: {
        "2xl": "0 0px 2000px -15px rgba(0, 0, 0, 0.3)",
        xl: "0 0px 100px -15px rgba(0, 0, 0, 0.3)",
        lg: "0 0px 50px -15px rgba(0, 0, 0, 0.3)",
      },
    },
    plugins: [],
  },
};
