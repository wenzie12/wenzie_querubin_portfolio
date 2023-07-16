/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";

export const theme = {
  extend: {
    colors: {
      // for light:
      // primary: "#f8f9fa", // bg
      // secondary: "#D4494C", // main text/title/borders etc
      // // secondary: "#b12a29", 
      // tertiary: "#7B8CA6", // sub text,
      // "blue-100": "#8d99ae", // sub bg, others..
      // "blue-200": "#2b2d42",  // sub bg
      // "white-100": "#2b2d42",
      
      // og:
      primary: "#101B29",
      secondary: "#D4494C",
      // secondary: "#b12a29",
      tertiary: "#7B8CA6",
      "blue-100": "#1D2639", 
      "blue-200": "#3F4F69", 
      "white-100": "#f3f3f3",

      "black-100": "#100d25",
      "black-200": "#090325",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    // not used
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