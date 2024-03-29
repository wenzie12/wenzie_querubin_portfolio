import { motion, } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import { styles } from '../styles'
import { staggerContainer, slideRightVariant, scaleHeight } from '../utils/motion'

const SectionWrapper = (Component, idName) => 
  function HOC() {

    return (
      <>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          // viewport={{ once: false, amount: 0.25 }}
          className={twMerge(styles.padding, "max-w-7xl mx-auto z-0")}
        >
          {/* scrolls to this invisible span via scroll button */}
          <motion.span
            className="hash-span"
            id={idName}
          >
            &nbsp;
          </motion.span>
          <motion.div className="relative">
            <motion.i
              variants={slideRightVariant("spring", 0.2)}
              className="dark:text-accent-2 text-accent-2-lt absolute -top-6 md:-left-10 hidden md:block"
            >
              {`<${idName || 'section'}>`}
            </motion.i>
            <motion.div
              variants={scaleHeight("tween", 0.2)}
              className="w-[1.5px] dark:bg-accent-1 bg-accent-1-lt h-full absolute md:-left-8 hidden md:block"
            />
            <motion.i
              variants={slideRightVariant("spring", 0.4)}
              className="dark:text-accent-2 text-accent-2-lt absolute -bottom-6 md:-left-10 hidden md:block"
            > 
              {`</${idName || 'section'}>`}
            </motion.i>
            <Component />
          </motion.div>
        </motion.section>
      </>
    )
  }

export default SectionWrapper