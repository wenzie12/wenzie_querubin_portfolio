/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";

export const theme = {
  extend: {
    colors: {
      // for light:
      // primary: "#f1f2f6",
      // secondary: "#D4494C",
      // tertiary: "#415a77",
      // "accent-1": "#D5D6D9",
      // "accent-2": "#8d99ae", 
      // "white-100": "#0d1b2a",
      
      // dark:
      primary: "#101B29",
      secondary: "#D4494C",
      tertiary: "#7B8CA6",
      "accent-1": "#1D2639", 
      "accent-2": "#3F4F69", 
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