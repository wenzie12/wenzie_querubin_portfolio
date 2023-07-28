/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react';
import { slideIn } from '../../utils/motion'

import { colors } from '../../themes/constants'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const ThemesButton = () => {
  const { toggleThemeState: { toggleDarkMode, setToggleDarkMode } } = useGlobalStateContext()
  const { 
    cursorTextState: { cursorText, setCursorText },
    hoverEvents: { enterHover, leaveHover }
  } = useCursorContext()

  const element = document.documentElement
  // check system theme
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

  const onWindowMatch = () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      element.classList.add("dark")
      return
    } 
    
    element.classList.remove("dark")
    return
  }

  const setTheme = useCallback(() => {
    if (toggleDarkMode) {
      element.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      return
    }
    // for auto
    // if (!toggleDarkMode || (!toggleDarkMode && !('theme' in localStorage))) { 
    if (!toggleDarkMode) {
      element.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      return
    }
    
    // element.classList.add('dark')
    // remove themes on close tab
    localStorage.removeItem('theme') 
    // return 
    return
  }, [toggleDarkMode])

  const cursorThemeText = {
    ...cursorText,
    offset: 65,
    color: colors[toggleDarkMode ? 'accent-3' : 'accent-3-lt'],
    text: `Dark Mode: ${toggleDarkMode ? "ON" : "OFF"}`,
  }

  useEffect(() => {
    setTheme()
    setCursorText(cursorThemeText)

    element?.style.setProperty("--color-primary", toggleDarkMode ? colors['primary'] : colors['primary-lt'])
    element?.style.setProperty("--color-accent-2", toggleDarkMode ? colors['accent-2'] : colors['accent-2-lt'])
    element?.style.setProperty("--color-accent-3",  toggleDarkMode ? colors['accent-3'] : colors['accent-3-lt'])
  }, [toggleDarkMode])

  onWindowMatch()

  return (
    <div className="flex justify-center items-center">
      <motion.button
        onMouseEnter={() => enterHover("", cursorThemeText)}
        onMouseLeave={leaveHover}
        onClick={() => setToggleDarkMode(!toggleDarkMode)}
        type="button"
        id="toggle-themes"
        aria-label="toggle themes"
        className="flex items-center justify-center relative overflow-hidden md:hover:animate-pulse"
      >
        <motion.span
          variants={slideIn("up", "spring", .3, .4)}
          initial="hidden"
          animate={toggleDarkMode ? "show" : "hidden"}
          className="absolute top-0"
        >
          <Moon className="w-6 h-6 dark:text-secondary" />
        </motion.span>

        <motion.span
          variants={slideIn("up", "spring", .3, .4)}
          initial="hidden"
          animate={toggleDarkMode ?  "hidden" : "show"}
          className=""
        >
          <Sun className="w-6 h-6 text-secondary-lt" />
        </motion.span>
      </motion.button>
    </div>
    )
}

export default ThemesButton