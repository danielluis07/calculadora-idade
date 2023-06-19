/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      colors: {
        mainpurple: "hsl(259, 100%, 65%)",
        mainwhite: "hsl(0, 0%, 100%)",
        offwhite: "hsl(0, 0%, 94%)",
        lightgrey: "hsl(0, 0%, 86%)",
        lightred: "hsl(0, 100%, 67%)",
        smokeygrey: "hsl(0, 1%, 44%)",
        offblack: "hsl(0, 0%, 8%)",
      },
    },
  },
  plugins: [],
};
