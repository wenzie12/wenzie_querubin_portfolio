/** @type {import('tailwindcss').Config} */

export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";

export const darkMode = 'class'

import { colors } from './src/themes/constants'

export const theme = {
  extend: {
    colors: {
      // for light:
      "primary-lt": colors['primary-lt'],
      "secondary-lt": colors['secondary-lt'],
      "tertiary-lt": colors['tertiary-lt'],
      "accent-1-lt": colors['accent-1-lt'],
      "accent-2-lt": colors['accent-2-lt'],
      "accent-3-lt": colors['accent-3-lt'],
      
      // dark
      primary: colors['primary'],
      secondary: colors['secondary'],
      tertiary: colors['tertiary'],
      "accent-1": colors['accent-1'],
      "accent-2": colors['accent-2'],
      "accent-3": colors['accent-3'],

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