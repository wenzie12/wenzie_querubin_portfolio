/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";

export const darkMode = 'class'

import { colors } from './src/themes/constants'

export const theme = {
  extend: {
    fontFamily: {
      poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      // light mode:
      "primary-lt": colors['primary-lt'],
      "secondary-lt": colors['secondary-lt'],
      "tertiary-lt": colors['tertiary-lt'],
      "accent-1-lt": colors['accent-1-lt'],
      "accent-2-lt": colors['accent-2-lt'],
      "accent-3-lt": colors['accent-3-lt'],
      
      // dark mode:
      primary: colors['primary'],
      secondary: colors['secondary'],
      tertiary: colors['tertiary'],
      "accent-1": colors['accent-1'],
      "accent-2": colors['accent-2'],
      "accent-3": colors['accent-3'],
    },
    screens: {
      xs: "450px",
    },
  },
};

export const plugins = [];