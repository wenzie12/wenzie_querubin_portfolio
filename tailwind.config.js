/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    colors: {
      primary: "#101B29", // dark blue
      // primary: "#e5e5e5", // for light mode
      secondary: "#D4494C", // red
      "secondary-100": "#BF0603", // dark red
      tertiary: "#7B8CA6", // blue-gray
      "blue-200": "#3F4F69", // lighter
      "blue-100": "#1D2639", // darker
      "yellow-100": "#EFD696",
      "white-100": "#f3f3f3",
      // "white-100": "#101B29", // light mode

      "black-100": "#100d25",
      "black-200": "#090325",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    },
    // note: see default custom cursor @ index.css
    cursor: {
      'custom-pointer': "url(assets/cursor-assets/custom_pointer_hover.svg), pointer",
    },
  },
};
export const plugins = [];