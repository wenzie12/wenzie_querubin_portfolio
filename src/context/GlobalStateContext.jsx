/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useState, createContext } from 'react'

const GlobalStateContext = createContext()

// custom hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const GlobalStateProvider = ({ children }) => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [toggleDarkMode, setToggleDarkMode] = useState(() => {
    if (localStorage.getItem('theme')) {
      if (localStorage.getItem('theme') === 'dark') return true
      if (localStorage.getItem('theme') === 'light') return false
    }

    // dark is default
    return true
  })

  return (
    <GlobalStateContext.Provider
      value={{
        activeState: { active, setActive },
        toggleState: { toggle, setToggle },
        toggleThemeState: { toggleDarkMode, setToggleDarkMode },
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
