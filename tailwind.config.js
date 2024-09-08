/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "10px 10px black, -0.1em -0.1em 0 black",
      },
    },
  },
  plugins: [],
};
