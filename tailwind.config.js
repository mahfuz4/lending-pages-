module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
      custom: "80vh"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
