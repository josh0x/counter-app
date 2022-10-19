/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "800px",
      lg: "1024px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        lg: "2rem",
      },
    },
    extend: {
      fontFamily: {
        body: ["Helvetica"],
      },
      colors: {
        black: "#1D1D24",
        grey: "#EEEEF3",
        blue: "#0000ff",
      },
      fontSize: {
        base: "1.5rem",
        "base--mobile": "1rem",
        xs: "0.75rem",
        sm: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.625rem",
        "2xl": "2rem",
        "2.5xl": "2.25rem",
        "3xl": "2.375rem",
        "4xl": "3.875rem",
        "5xl": "6.25rem",
      },
      lineHeight: {
        tight: "1.05",
        snug: "1.4",
      },
      letterSpacing: {
        tight: "-0.03em",
      },
      spacing: {
        26: "6.5rem",
      },
    },
  },
  plugins: [
  
],
};
