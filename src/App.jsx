/* eslint-disable */
import React, { useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"

// import CustomCursor from './components/custom-mouse-cursor/CustomCursor.component'

import { CursorWrapper } from './hoc'

import {
  LandingPageLoader,
  Hero,
  About,
  Tech,
  Experience,
  Projects,
  Feedbacks,
  Contact,
  Footer,
} from './components/pages'
import { Navbar } from './components/nav'

// context
import { useLoadingContext } from './context/HOCContext'

const App = () => {
  const {loadingState: { loading, setLoading }} = useLoadingContext()
  // let { scrollYProgress } = useScroll()
  // let y = useTransform(scrollYProgress, [0,2], ["0%", "100%"])

  useEffect(() => {
    // for loading screen (on page load)
    setTimeout(() => setLoading(false), 2000)
  }, [])

  return (
    <>
      <BrowserRouter>
      {/* select-none - temporary added: TODO: lagay mo lang ung 'select-none' sa ibang component na kelangan :D  */}
        <div className="relative bg-primary subpixel-antialiased font-extralight select-none">
          <LandingPageLoader loading={loading} />
          {!loading && (
            <>
            {/* landing page */}
            <div className="bg-cover bg-no-repeat bg-center">
              <Navbar loading={loading} />
              <Hero loading={loading}/>
            </div>
            {/* sections */}
            <div className="md:px-6">
              <About />
              <Tech />
              <Experience />
              <Projects />
              {/* <Feedbacks /> */}
              <Contact />
              <Footer />
            </div>
            </> 
          )}    
        </div>
      </BrowserRouter>
    </>
  )
}

// Wrapped APP in HOC named CursorWrapper
const AppHOC = CursorWrapper(App, "")

export default AppHOC

/*
TODOs 
 >>(for improvement)
  1. apply prop validations (PropTypes or TypeScript) later
 >>
*/ 


