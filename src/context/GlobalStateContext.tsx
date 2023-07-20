import React from 'react'
import { useContext, useState, createContext } from 'react'

const GlobalStateContext = createContext<null | any>(null)
// custom hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext)

type GlobalState = {
  children: string | JSX.Element | JSX.Element[] | (() => React.JSX.Element) | any // temporary add 'any' type
}

export const GlobalStateProvider = ({ children }: GlobalState) => {

  const [active, setActive] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(false)
  // Currently Not in use: section wrapper scrollTrigger offset settings 
  // const [offset, setOffset] = useState<string[]>(["start start", "end start"])

  return (
    <GlobalStateContext.Provider
      value={{
        activeState: { active, setActive },
        toggleState: { toggle, setToggle },
        // offsetState: { offset, setOffset },
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  )
}
