/* eslint-disable */
import { useRef } from "react"
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion'

import { styles } from '../../styles'
import { scaleHeight, staggerContainer, fadeIn, zoomIn, swivelVariants } from '../../utils/motion'
import { chevronDown } from '../../assets'
import { ScrollButton } from '../custom-buttons'
import SocialMediaVerticalContainer from '../social-medias/SocialMediaVerticalContainer.component'

// context
import { useCursorContext } from '../../context/HOCContext'

const Hero = ({ loading }) => {
  const {
    cursorTextState: { cursorText, setCursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  })

  // move to a global variant files
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <>
      <motion.section
        ref={ targetRef }
        style={{ opacity, scale, y }}
        className={` relative w-full h-screen flex items-center`}
        // className={` relative w-full h-screen flex items-center bg-gradient-to-tl to-primary from-blue-100`}
      > 
        <motion.div
          variants={staggerContainer(.2)}
          initial={false}
          animate="show"
          className={`${styles.paddingXHero} absolute top-[180px] xs:top-[200px] md:relative md:top-0 lg:max-w-5xl mx-auto flex flex-row items-start justify-center gap-5`}
        >
          {/* vertical icons */}
          <motion.div className="flex flex-col justify-center items-center">
            <motion.img
              initial={{ opacity: 0,  transform: "rotate(-90deg)", }}
              animate={loading ? "initial" : [
                { opacity: 1, transition: { delay: .4, duration: .4 }},
                { transform: "rotate(0)", transition: { delay: .8, }}
              ]}
              src={chevronDown}
              alt="chevron"
              className="w-7 h-7 text-blue-100"
            />
            <motion.div
              variants={scaleHeight("spring", .6, 2)}
              initial="hidden"
              animate={loading ? "hidden" : "show"}
              className="w-1 md:mt-2 sm:h-64 h-48 bg-gradient-to-b from-blue-200 to-primary"
            />
          </motion.div>
          {/* header */}
          <motion.div
            variants={swivelVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              variants={swivelVariants}
              className={`${styles.heroSubText} text-tertiary`}
            >
              <motion.span variants={swivelVariants}>Hi, I&apos;m</motion.span>
              <motion.span variants={swivelVariants} className={`${styles.heroHeadText} text-secondary block w-full`}>
                Wenzie
              </motion.span>
            </motion.h1>
            <motion.p
              variants={swivelVariants}
              className={`${styles.heroSubText} text-blue-200 font-normal`}
            >
              Frontend Software Engineer @
              <a
              onMouseEnter={() => enterHover("", {
                ...cursorText,
                offset: 75,
                text: "go to link!",
              })}
                onMouseLeave={leaveHover}
                href="https://www.multisyscorp.com/" target="_blank" className="text-secondary italic font-semibold">Multisys
              </a>
            </motion.p>
            <motion.p
              variants={swivelVariants}
              className={`${styles.heroSubText} mt-2 text-tertiary md:w-3/4`}
            >
              Experienced Frontend Developer with a passion
              for creating dynamic, user-friendly web
              applications using React.
            </motion.p>
          </motion.div>
        </motion.div>
 
        {/* toggle to section button (animated) */}
      <ScrollButton href="#about" loading={loading} />
      </motion.section>
      <SocialMediaVerticalContainer loading={loading} />
    </>
  )
}

export default Hero