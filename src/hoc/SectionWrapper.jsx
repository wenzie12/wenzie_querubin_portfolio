import { useRef } from "react"
import { motion, useScroll, useTransform } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer, slideRightVariant, scaleHeight } from '../utils/motion'

const SectionWrapper = (Component, idName) => 
  function HOC() {    
    // scroll
    const targetRef = useRef(null)
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start start", "end start"]
      // param 1 - top part of section, end of window,
      // param 2 - bottom of section, bottom of window  
    })

    const opacity = useTransform(scrollYProgress, [0.5, 1], [1, 0])
    const scale = useTransform(scrollYProgress, [0.5, 1], [1, 0.8])

    return (
      <>
        <motion.section
          ref={ targetRef }
          // inView={inView}
          variants={staggerContainer()}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.padding} max-w-7xl mx-auto z-0`}
        >
          {/* scrolls to this invisible span via scroll button */}
          <motion.span
            className="hash-span"
            id={idName}
          >
            &nbsp;
          </motion.span>
          <motion.div 
            // style={{ opacity, scale }}
            className="relative"
          >
            <motion.i
              variants={slideRightVariant("spring", 0.2)}
              className="text-blue-200 absolute -top-6 md:-left-10 hidden md:block"
            >
              {`<${idName || 'section'}>`}
            </motion.i>
            <motion.div
              // ref={ref}
              variants={scaleHeight("tween", 0.2)}
              className="w-[1.5px] bg-blue-100 h-full absolute md:-left-8 hidden md:block"
            />
            <motion.i
              variants={slideRightVariant("spring", 0.4)}
              className="text-blue-200 absolute -bottom-6 md:-left-10 hidden md:block"
            > 
              {`</${idName || 'section'}>`}
            </motion.i>
            <Component
              opacity={opacity}
              scale={scale}

            />
          </motion.div>

        </motion.section>
      </>
    )
  }

export default SectionWrapper