/* eslint-disable react/prop-types */
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Moon } from 'lucide-react';

import { styles } from '../../styles'
import { navLinks } from '../../constants'
import { fadeIn, tagVariants } from '../../utils/motion'
import { ProfileLogo } from '../icons'
import MenuContainer from './MenuContainer.component'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'
import { SECONDARY_COLOR } from '../../themes/constants'

const Navbar = ({ loading }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const { 
    cursorTextState: { cursorText, setCursorText },
    hoverEvents: { enterHover, leaveHover }
  } = useCursorContext()
  const {
    activeState: { active, setActive },
    toggleState: { toggle, setToggle },
  } = useGlobalStateContext()

  const [toggleDarkMode, setToggleDarkMode] = useState(true)

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  // const backgroundColor = useTransform(scrollYProgress, [0, 1], ["101B29", "#101B29"]) // for gradient bg, currently not in used
  const paddingTop = useTransform(scrollYProgress, [0, 1], [`${!isTabletOrMobile ? '2.5rem' : '1.5rem'}`,"1.2rem"])

  const handleOnClick = () => {
    setActive("")
    window.scrollTo(0,0)
    setToggle(false) 
  }

  return (
    <>
      <motion.nav
        ref={ targetRef }
        style={{
          // backgroundColor,
          paddingTop, 
          transition: "200ms ease-in-out",
        }}
        initial="hidden"
        animate={loading ? "hidden" : "show"}
        className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary/95`}
      >
        {/* web */}
        <div className="w-full flex justify-between items-center mx-auto"> 
          <motion.div
            variants={fadeIn("down", "spring", .1)}
          >
          <Link 
            to="/"
            aria-label="home"
            onMouseEnter={() => enterHover("anchor")}
						onMouseLeave={leaveHover}
            onClick={handleOnClick}
            className='flex items-center gap-2 py-4 z-40 group'
          >
            <ProfileLogo
              classSVG="w-[32px] h-[21px] object-contain z-40 group-hover:animate-pulse"
              classPath=""
              fill={SECONDARY_COLOR}
              role="img"
            />
            <p className="text-white-100 text-[18px] cursor-pointer hidden md:flex text-sm">
              Wenzie Querubin 
            </p>
          </Link>
          </motion.div>
          <motion.ul
            className="list-none hidden md:flex flex-row gap-14">
            {navLinks?.map((link, index) => {
              return (
                <motion.li
                  variants={fadeIn("down", "spring", .1 * index)}
                  key={link.id}
                  onClick={() => setActive(link.title)}
                  onMouseEnter={() => enterHover("anchor")}
                  onMouseLeave={leaveHover}
                  className="text-white-100 custom-pointer relative text-sm"
                >
                  <motion.a
                    whileHover="hover"
                    initial="initial"
                    href={`#${link.id}`}
                    animate={active === link.title ? "selected": "initial"}
                    className="py-4"
                  >
                    {link.title}
                    <motion.i variants={tagVariants("left")} className="text-accent-2 absolute top-1 -left-3 font-semibold">{`<`}</motion.i>
                    <motion.i variants={tagVariants("right")} className="text-accent-2 absolute top-1 -right-4 font-semibold">{`/>`}</motion.i>
                  </motion.a>
                </motion.li>
              )
            })}
            <motion.button
              onMouseEnter={() => enterHover("", {
                ...cursorText,
                offset: 75,
                text: 'Dark Mode: ON',
              })}
              onMouseLeave={leaveHover}
              onClick={() => setToggleDarkMode(!toggleDarkMode)}
              
              type="button"
              className="dark-mode"
            >
              {/* <Moon className="w-6 h-6 text-accent-2" /> // dark mode OFF */}
              <Moon className={`${toggleDarkMode ? 'text-secondary' : 'text-accent-2'} w-6 h-6`} />
            </motion.button>
          </motion.ul>
      {/* mobile - menu */}
        <MenuContainer
          toggle={toggle}
          setToggle={setToggle}
        />
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar