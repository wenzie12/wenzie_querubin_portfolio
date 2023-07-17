import { theme } from '../../tailwind.config'

const { 
  primary,
  secondary,
  tertiary,
  "accent-2": accent2,
  "accent-1": accent1,
  "white-100": white100,
} = theme.extend.colors

// themes
export const PRIMARY_COLOR = primary
export const SECONDARY_COLOR = secondary
export const TERTIARY_COLOR = tertiary
export const ACCENT_2_COLOR = accent2
export const ACCENT_1_COLOR = accent1
export const WHITE_100_COLOR = white100