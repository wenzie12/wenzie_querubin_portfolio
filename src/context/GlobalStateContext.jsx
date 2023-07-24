/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useContext, useState, createContext } from 'react'

const GlobalStateContext = createContext()

// custom hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const GlobalStateProvider = ({ children }) => {

  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [offset, setOffset] = useState(["start start", "end start"]) // section wrapper scrollTrigger offset settings 

  return (
    <GlobalStateContext.Provider
      value={{
        activeState: { active, setActive },
        toggleState: { toggle, setToggle },
        offsetState: { offset, setOffset },
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
