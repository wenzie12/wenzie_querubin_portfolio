/* eslint-disable */
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

import { styles } from '../../styles'
import { navLinks } from '../../constants'
import { logo } from '../../assets'

import { fadeIn } from '../../utils/motion'

import MenuContainer from './MenuContainer.component'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const Navbar = ({ loading }) => {
  // const [toggle, setToggle] = useCycle("hidden", "show"); // todo: use this in replacement to useState toggle 

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

  const backgroundColor = useTransform(scrollYProgress, [0, 1], ["transparent", "#101B29"])
  const paddingTop = useTransform(scrollYProgress, [0, 1], ["2.5rem","1.8rem"])

  const handleOnClick = () => {
    setActive("")
    window.scrollTo(0,0)

    setToggle(false) 
  }

  const tagVariants = (direction) => {
    return {
      initial: { 
        x: direction === "left" ? "4px" : direction === "right" ? "-4px" : 0,
        opacity: 0,
        ease: "easeOut",
        duration: 0.2,
        type: "sprint"
      },
      selected: { 
        x: 0,
        opacity: 1,
        color: "#D4494C", // secondary
      },
      hover: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.2,
          type: "sprint",
          ease: "easeIn"
        }
      }
    }
  };

  return (
    <>
      <motion.nav
        ref={ targetRef }
        style={{
          backgroundColor,
          paddingTop,
        }}
        initial="hidden"
        animate={loading ? "hidden" : "show"}
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
        // className={`${styles.paddingX} pt-10 w-full flex items-center py-5 fixed top-0 z-20 bg-primary bg-gradient-to-tl to-primary from-blue-100`}
      >
        {/* web */}
        {/* <div className="w-full flex justify-between items-center max-w-7xl mx-auto"> // with border */} 
        <div className="w-full flex justify-between items-center mx-auto"> 
          <motion.div
            variants={fadeIn("down", "spring", .1)}
          >
          <Link 
            to="/"
            className='flex items-center gap-2 z-40'
            onMouseEnter={() => enterHover("anchor")}
						onMouseLeave={leaveHover}
            onClick={handleOnClick}
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
                  className="text-white-100 text-[16px] custom-pointer relative text-sm"
                  onClick={() => setActive(link.title)}
                  onMouseEnter={() => enterHover("anchor")}
                  onMouseLeave={leaveHover}
                >
                  <motion.a
                    whileHover="hover"
                    initial="initial"
                    href={`#${link.id}`}
                    animate={active === link.title ? "selected": "initial"}
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
          active={active}
          setActive={setActive}
          tagVariants={tagVariants}
        />
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar