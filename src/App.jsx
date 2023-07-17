/* eslint-disable */
import React, { useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"

import { CursorWrapper } from './hoc'

import {
  LandingPageLoader,
  Hero,
  About,
  Tech,
  Experience,
  Projects,
  // Feedbacks,
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
        <LandingPageLoader loading={loading} /> 
        {/* for light mode  */}
        {/* <div className="relative subpixel-antialiased font-normal overflow-hidden">  */}
        {/*  for dark mode */}
        <div className="relative subpixel-antialiased font-light overflow-hidden for-light-mode"> 
          {!loading && (
            <>
            {/* landing page */}
            <div className="">
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


