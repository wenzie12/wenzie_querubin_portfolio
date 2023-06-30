
/* eslint-disable */
import { useContext, useState, createContext } from 'react'


// 1. LOADING STATE HOOKS
const LoadingContext = createContext()

// custom hooks
export const useLoadingContext = () => useContext(LoadingContext)

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)

  return (
    <LoadingContext.Provider value={{ loadingState: { loading, setLoading }}}>
      {children}
    </LoadingContext.Provider>
  ) 
}

// 2. CURSOR HOOKS
const CursorContext = createContext()

// custom hooks
export const useCursorContext = () => useContext(CursorContext)

export const CursorProvider = ({ children }) => {
  
  const CURSOR_TEXT_DEFAULT = {
    text: "",
    offset: 70, // default
    fontSize: 12, // int value only (px)
    color: "#f3f3f3",
  }

  const [cursorVariant, setCursorVariant] = useState("default")
  const [cursorText, setCursorText] = useState(CURSOR_TEXT_DEFAULT)

  function enterHover(variant, cursorText) {
    setCursorText(cursorText || CURSOR_TEXT_DEFAULT);
    setCursorVariant(variant || "anchor");
  } 

  function leaveHover() {
    setCursorText(CURSOR_TEXT_DEFAULT);
    setCursorVariant("default");
  }

  return (
    <CursorContext.Provider value={{
      cursorVariantState: { 
        cursorVariant, 
        setCursorVariant,
      },
      cursorTextState: { 
        cursorText, 
        setCursorText,
      },
      hoverEvents: {
        enterHover,
        leaveHover,
      }
    }}>
      {children}
    </CursorContext.Provider>
  )
}
