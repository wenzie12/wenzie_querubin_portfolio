import { useEffect, lazy, Suspense, Fragment } from 'react'
import { BrowserRouter } from "react-router-dom"
import { CursorWrapper } from './hoc'

// import { LandingPageLoader } from './components/pages'

const LandingPageLoader = lazy(() => import("./components/pages/LandingPageLoader"))
const Hero = lazy(() => import("./components/pages/Hero"))
const About = lazy(() => import("./components/pages/About"))
const Tech = lazy(() => import("./components/pages/Tech"))
const Experience = lazy(() => import("./components/pages/Experience"))
const Projects = lazy(() => import("./components/pages/Projects"))
const Contact = lazy(() => import("./components/pages/Contact"))
const Footer = lazy(() => import("./components/pages/Footer"))

const Navbar = lazy(() => import("./components/nav/Navbar"))

// context
import { useLoadingContext } from './context/HOCContext'
import { AnimatePresence } from 'framer-motion'
const App = () => {
  const { loadingState: { loading, setLoading }} = useLoadingContext()
  // let { scrollYProgress } = useScroll()
  // let y = useTransform(scrollYProgress, [0,2], ["0%", "100%"])

  useEffect(() => {
    // for loading screen (on page load)
    setTimeout(() => setLoading(false), 1600)

  }, [setLoading])

  return (
    <>
      <BrowserRouter>
        <AnimatePresence>
          {loading && <LandingPageLoader />}
        </AnimatePresence>
        <Suspense fallback={<Fragment />}>
          {!loading &&
            <div className="dark:font-light font-normal relative subpixel-antialiased overflow-hidden"> 
              <div>
                <Navbar loading={loading} />
                <Hero loading={loading}/>
              </div>
              {/* sections */}
              <div className="md:px-6">
                <About />
                <Tech />
                <Experience />
                <Projects />
                <Contact />
                <Footer />
              </div>   
            </div>}
        </Suspense>
      </BrowserRouter>
    </>
  )
}

// Wrapped APP in HOC named CursorWrapper
const AppHOC = CursorWrapper(App, "")

export default AppHOC