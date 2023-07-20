import { useContext, useState, createContext } from 'react'
import { WHITE_100_COLOR } from '../themes/constants'


const LoadingContext = createContext<null | any>(null)

// custom hooks
export const useLoadingContext = () => useContext<null | any>(LoadingContext)

type LoadingProvider = {
  children: string | JSX.Element | JSX.Element[] | (() => React.JSX.Element) | any // temporary add 'any' type
}

export const LoadingProvider = ({ children }: LoadingProvider) => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <LoadingContext.Provider value={{ loadingState: { loading, setLoading }}}>
      {children}
    </LoadingContext.Provider>
  ) 
}

// 2. CURSOR HOOKS
const CursorContext = createContext<null | any>(null)

// custom hooks
export const useCursorContext = () => useContext(CursorContext)

type CursorProvider = {
  children: string | JSX.Element | JSX.Element[] | (() => React.JSX.Element) | any // temporary add 'any' type
}

export const CursorProvider = ({ children }: CursorProvider) => {

  type CursorText = {
    text: string | ''
    offset?: Number
    fontSize?: Number
    color?: string
  }
  
  const CURSOR_TEXT_DEFAULT = {
    text: "",
    offset: 70, // default
    fontSize: 12, // int value only (px)
    color: WHITE_100_COLOR,
  }

  const [cursorVariant, setCursorVariant] = useState("default")
  const [cursorText, setCursorText] = useState<CursorText>(CURSOR_TEXT_DEFAULT)

  function enterHover(variant: any, cursorText: any) {
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
