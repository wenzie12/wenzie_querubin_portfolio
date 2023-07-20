import { motion, } from 'framer-motion'
import { JSX } from 'react/jsx-runtime';

import { styles } from '../styles'
import { staggerContainer, slideRightVariant, scaleHeight } from '../utils/motion';

type sectionWrapperType = {
  Component: React.ElementType, // JSX.Element, // React.FC // React.ReactNode
  idName?: '' | 'about' | 'technologies' | 'experience' | 'project' | 'contact'
}

const SectionWrapper = (Component:sectionWrapperType["Component"], idName:sectionWrapperType["idName"]) => 
  function HOC() {
    return (
      <>
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
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
          <motion.div className="relative">
            <motion.i
              variants={slideRightVariant("spring", 0.2)}
              className="text-accent-2 absolute -top-6 md:-left-10 hidden md:block"
            >
              {`<${idName || 'section'}>`}
            </motion.i>
            <motion.div
              variants={scaleHeight("tween", 0.2)}
              className="w-[1.5px] bg-accent-1 h-full absolute md:-left-8 hidden md:block"
            />
            <motion.i
              variants={slideRightVariant("spring", 0.4)}
              className="text-accent-2 absolute -bottom-6 md:-left-10 hidden md:block"
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