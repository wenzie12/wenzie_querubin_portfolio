import { useContext, useState, createContext } from 'react'

const GlobalStateContext = createContext()

// custom hooks
// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalStateContext = () => useContext(GlobalStateContext)

// eslint-disable-next-line react/prop-types
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
