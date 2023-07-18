/* eslint-disable react/prop-types */
import { useRef } from "react"
import { useScroll, useTransform, motion, AnimatePresence } from 'framer-motion'

import { styles } from '../../styles'
import { scaleHeight, staggerContainer, swivelVariants } from '../../utils/motion'
import { ScrollButton } from '../custom-buttons'
import SocialMediaVerticalContainer from '../social-medias/SocialMediaVerticalContainer.component'

import { ChevronDown } from 'lucide-react';
// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const Hero = ({ loading }) => {
  const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()
  const { activeState: { active }, } = useGlobalStateContext()

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
    // param 1 - top part of section, end of window,
    // param 2 - bottom of section, bottom of window
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <>
      <motion.section
        ref={ targetRef }
        style={{ opacity, scale, y, height: "100dvh", }}
        className="relative w-full flex items-center select-none"
        // className={` relative w-full h-screen flex items-center bg-gradient-to-tl to-primary from-accent-1`}
      > 
        <motion.div
          variants={staggerContainer(.2)}
          initial={false}
          whileInView="show"
          className={`${styles.paddingXHero} absolute top-[180px] xs:top-[200px] md:relative md:top-0 lg:max-w-5xl mx-auto flex flex-row items-start justify-center gap-5`}
        >
          {/* vertical icons */}
          <motion.div className="flex flex-col justify-center items-center">
            <motion.span
              initial={{ opacity: 0,  transform: "rotate(-90deg)", }}
              whileInView={loading ? "initial" : [
                { opacity: 1, transition: { delay: .4, duration: .4 }},
                { transform: "rotate(0)", transition: { delay: .8, }}
              ]}
            >
              <ChevronDown className="w-6 h-6 text-secondary" />
            </motion.span>
            <motion.div
              variants={scaleHeight("spring", .6, 2)}
              initial="hidden"
              whileInView={loading ? "hidden" : "show"}
              className="w-1 sm:h-64 h-48 bg-gradient-to-b from-accent-2 to-primary"
            />
          </motion.div>
          {/* header */}
          <motion.div
            variants={swivelVariants}
            initial="hidden"
            whileInView="show"
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
            <motion.span
              variants={swivelVariants}
              className={`${styles.heroSubText} inline-block text-accent-2 font-normal`}
            >
              Frontend Software Engineer @
              <a
              onMouseEnter={() => enterHover("", {
                ...cursorText,
                offset: 75,
                text: "go to link!",
              })}
                onMouseLeave={leaveHover}
                href="https://www.multisyscorp.com/"
                target="_blank"
                className="text-secondary italic font-semibold"
                rel="noreferrer"
              >
                Multisys
              </a>
            </motion.span>
            <motion.span
              variants={swivelVariants}
              className={`${styles.heroSubText} inline-block mt-2 text-tertiary md:w-3/4`}
            >
              Experienced Frontend Developer with a passion
              for creating dynamic, user-friendly web
              applications using ReactJs.
            </motion.span>
          </motion.div>
        </motion.div>
 
        {/* toggle to section button (animated) */}
      <ScrollButton href="#about" loading={loading} />
      </motion.section>
      <AnimatePresence>
        {active !== "Contact" && (
          <motion.div exit={{ opacity: 0, }}>
            <SocialMediaVerticalContainer loading={loading} />
          </motion.div>
        )}
      </AnimatePresence>
      
      
    </>
  )
}

export default Hero