/* eslint-disable react/prop-types */
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'
import { ChevronsDown } from 'lucide-react'
import { useCustomMediaQuery } from '../../hooks'

// context
import { useCursorContext } from '../../context/HOCContext'

const ScrollButton = ({ href='', loading })  => {
  const { isTabletOrMobile } = useCustomMediaQuery()
  const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

    // scroll
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"],
    })
  
    // TODO: move to a global variant files
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    const toggleVariant =  {
        initial: {
          y: [0, 24, 0],
          transition: {
            duration: 1.5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut",
          },
        },
        hover: {
          y: [0, 24, 0],
          transition: {
            duration: 0.4,
            repeat: Infinity,
            repeatType: 'loop',
            ease: "easeInOut",
          },
        }
      }
      
  return (
    <motion.div
      variants={fadeIn("up", "spring", .2, .8)}
      initial="hidden"
      animate={loading ? "hidden" : "show"}
      ref={ targetRef }
      style={{ opacity, scale }} 
      className="absolute bottom-20 md:bottom-10 w-full flex justify-center items-center"
    >
      <a
        href={href}
        aria-label="scroll down"
        onMouseEnter={() => enterHover("anchor", {
          ...cursorText,
          offset: 70,
          text: "Scroll Down",
        })}
        onMouseLeave={leaveHover}
      >
        <motion.div
          {...(!isTabletOrMobile && {
            whileHover: "hover",
          })}
          animate="initial"
          className="w-[24px] h-[50px] border-none flex justify-center items-start py-2"
        > 
        <motion.span variants={toggleVariant}>
          <ChevronsDown className="w-7 h-7 mb-1 dark:text-secondary text-secondary-lt font-semibold" />
        </motion.span>  
        </motion.div>
      </a>
    </motion.div>
  )
}

export default ScrollButton
