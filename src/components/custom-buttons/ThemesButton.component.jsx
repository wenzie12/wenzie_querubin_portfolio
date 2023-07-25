/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Moon } from 'lucide-react';
import { raiseUp } from '../../utils/motion'

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
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  
  function onWindowMatch() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && darkQuery.matches)) {
      element.classList.add("dark")
    } else {
      element.classList.remove("dark")
    }
  }

  const setTheme = useCallback(() => {
    if (toggleDarkMode) {
      element.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      return
    }
    if (toggleDarkMode === false) {
      element.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      return
    }
    
    // element.classList.add('dark')
    // localStorage.removeItem('theme')
    // return 
    return
  })

  const cursorThemeText = {
    ...cursorText,
    offset: 65,
    text: `Dark Mode: ${toggleDarkMode ? "ON" : "OFF"}`,
  }


  useEffect(() => {
    setCursorText(cursorThemeText)
    setTheme()

    return setCursorText(cursorText)
  }, [toggleDarkMode])

  onWindowMatch()

  element?.style.setProperty("--color-primary",  toggleDarkMode ? colors['primary'] : colors['primary-lt'])
  element?.style.setProperty("--color-accent-2",  toggleDarkMode ? colors['accent-2'] : colors['accent-2-lt'])
  element?.style.setProperty("--color-accent-3",  toggleDarkMode ? colors['accent-3'] : colors['accent-3-lt'])

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex justify-center items-center"
    >
      <motion.button
        variants={raiseUp}
        onMouseEnter={() => enterHover("", cursorThemeText)}
        onMouseLeave={leaveHover}
        onClick={() => {
          setToggleDarkMode(!toggleDarkMode)
        }}
        type="button"
        id="theme"
        aria-label="theme"
        className="dark-mode"
      >
        <Moon className={`${toggleDarkMode ? 'dark:text-secondary text-secondary-lt' : 'dark:text-accent-2 text-accent-2-lt'} w-7 h-7`} />
      </motion.button>
    </motion.div>
    )
}

export default ThemesButton