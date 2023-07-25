import useMouse from "@react-hook/mouse-position";

import { useGlobalStateContext } from '../../context/GlobalStateContext'
import { colors } from "../../themes/constants";

export const useVariants = (ref) => {
  const { toggleThemeState: { toggleDarkMode } } = useGlobalStateContext()
  const mouse = useMouse(ref, {
    enterDelay: 140,
    leaveDelay: 140,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;
  if (mouse.clientX !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.clientY !== null) {
    mouseYPosition = mouse.clientY;
  }

  return {
    default: {
      opacity: .4,
      height: 12,
      width: 12,
      backgroundColor: colors[toggleDarkMode ? 'secondary' : 'secondary-lt'],
      x: mouseXPosition - 20,
      y: mouseYPosition - 20,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    anchor: {
      opacity: .75,
      backgroundColor: `${colors[toggleDarkMode ? 'tertiary' : 'tertiary-lt']}50`,
      color: colors[toggleDarkMode ? 'accent-3' : 'accent-3-lt'],
      // mixBlendMode: "difference",
      height: 64,
      width: 64,
      fontSize: "10px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    anchorBlended: {
      opacity: .75,
      backgroundColor: `${colors[toggleDarkMode ? 'tertiary' : 'tertiary-lt']}50`,
      color: colors[toggleDarkMode ? 'accent-3' : 'accent-3-lt'],
      mixBlendMode: "difference",
      height: 64,
      width: 64,
      fontSize: "10px",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
    hideHover: {
      opacity: 0,
      backgroundColor: `${colors[toggleDarkMode ? 'tertiary' : 'tertiary-lt']}50`,
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
    },
  };
};

export const spring = {
  type: "spring",
  stiffness: 500,
  damping: 28,
};