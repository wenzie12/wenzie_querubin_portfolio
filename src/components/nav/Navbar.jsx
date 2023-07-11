import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import { styles } from '../../styles'
import { navLinks } from '../../constants'
import { logo } from '../../assets'
import { fadeIn, tagVariants } from '../../utils/motion'
import MenuContainer from './MenuContainer.component'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

// eslint-disable-next-line react/prop-types
const Navbar = ({ loading }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const { hoverEvents: { enterHover, leaveHover } } = useCursorContext()
  const {
    activeState: { active, setActive },
    toggleState: { toggle, setToggle },
  } = useGlobalStateContext()

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
        className={`${styles.paddingX} w-full flex items-center fixed top-0 z-20 bg-primary`}
      >
        {/* web */}
        <div className="w-full flex justify-between items-center mx-auto"> 
          <motion.div
            variants={fadeIn("down", "spring", .1)}
          >
          <Link 
            to="/"
            onMouseEnter={() => enterHover("anchor")}
						onMouseLeave={leaveHover}
            onClick={handleOnClick}
            className='flex items-center gap-2 py-4 z-40'
          >
            <img src={logo} alt="logo" className="w-[32px] h-[21px] object-contain z-40"/>
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
                  className="text-white-100 text-[16px] custom-pointer relative text-sm"
                >
                  <motion.a
                    whileHover="hover"
                    initial="initial"
                    href={`#${link.id}`}
                    animate={active === link.title ? "selected": "initial"}
                    className="py-4"
                  >
                    {link.title}
                    <motion.i
                      variants={tagVariants("left")}
                      className="text-blue-200 absolute top-1 -left-5 font-semibold">{`<`}
                    </motion.i>
                    <motion.i
                      variants={tagVariants("right")}
                      className="text-blue-200 absolute top-1 -right-6 font-semibold">{`/>`}
                    </motion.i>
                  </motion.a>
                </motion.li>
              )
            })}
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