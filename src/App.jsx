import { useEffect } from 'react'
import { BrowserRouter } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import { CursorWrapper } from './hoc'

import { Helmet } from 'react-helmet-async'
// import MetatagDecorator from './components/custom-metatags/MetatagDecorator'
import { colors } from './themes/constants'

import {
  LandingPageLoader,
  Hero,
  About,
  Tech,
  Experience,
  Projects,
  Contact,
  Footer,
} from './components/pages'

import { Navbar } from './components/nav'

// context
import { useLoadingContext } from './context/HOCContext'
import { useGlobalStateContext } from './context/GlobalStateContext'


const App = () => {
  const { toggleThemeState: { toggleDarkMode } } = useGlobalStateContext()
  const { loadingState: { loading, setLoading }} = useLoadingContext()
  // let { scrollYProgress } = useScroll()
  // let y = useTransform(scrollYProgress, [0,2], ["0%", "100%"])

  useEffect(() => {
    // for loading screen (on page load)
    setTimeout(() => setLoading(false), 1600)
  }, [setLoading])

  return (
    <>
      <Helmet>
        <meta property="og:image" content="https://res.cloudinary.com/wenzie12sg/image/upload/v1689567401/wenziequerubin-portfolio-assets/img-link-banner_nqy6kz.png" />
        <meta property="og:url" content="https://res.cloudinary.com/wenzie12sg/image/upload/v1689567401/wenziequerubin-portfolio-assets/img-link-banner_nqy6kz.png" />
      </Helmet>
      {/* <MetatagDecorator
        description="Frontend Software Engineer specializing in ReactJS"
        imageUrl="https://res.cloudinary.com/wenzie12sg/image/upload/v1689567401/wenziequerubin-portfolio-assets/img-link-banner_nqy6kz.png"
        siteName="wenziequerubin"
        siteUrl="https://www.wenziequerubin.com"

        themeColor={colors[toggleDarkMode ? 'primary' : 'primary-lt']}
        twitterCard=""
        twitterImageAlt=""
      /> */}
      <BrowserRouter>
        <AnimatePresence>
          {loading && <LandingPageLoader />}
        </AnimatePresence>
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
          </div>
        }
      </BrowserRouter>
    </>
  )
}

// Wrapped APP in HOC named CursorWrapper
const AppHOC = CursorWrapper(App, "")

export default AppHOC