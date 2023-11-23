/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        // font-heading font-body
        heading: "var{--font-aboreto",
        body: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
