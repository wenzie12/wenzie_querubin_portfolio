/* eslint-disable */
import { motion } from 'framer-motion'
import { fadeIn, raiseUp, zoomIn, swivelVariants, textVariant } from '../../utils/motion'
import { styles } from '../../styles'

// context
import { useCursorContext } from '../../context/HOCContext'

import { SectionWrapper } from '../../hoc'

import { technologies } from '../../constants'
import { chevronDown } from '../../assets'

const TechStack = ({ label, className, imgClassName, enterHover, leaveHover, techItems, cursorText }) => {
  return (
    <motion.div className="flex flex-col lg:w-1/3 mb-4 md:mb-0">
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className={`${styles.sectionText} flex flex-row items-center gap-2 text-normal text-tertiary`}
      >
        <motion.img
          initial={{transform: "rotate(-90deg)",}}
          whileInView={{ transform: "rotate(0)", transition: { delay: .8, }}}
          src={chevronDown}
          alt="chevron"
          className="w-4 h-4"
        />
        {label}
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-wrap justify-center gap-y-6 md:gap-y-8 gap-x-2 md:gap-x-6 lg:gap-6 xl:gap-8 my-4"
      >
        {techItems?.map((item, index) => {
          return (
            <motion.div
              key={item.name}
              variants={zoomIn(0.1 * index,)}
              onMouseEnter={() => enterHover("", {
                ...cursorText,
                text: item.name,
                // offset: 0, 
                // color: "#f3f3f3",
              })}
              onMouseLeave={leaveHover} 
              className={`${className} flex flex-col gap-y-2 md:flex-row md:gap-y-0 items-center justify-center px-4 md:px-3`}
            >
              <span className="text-xs text-blue-200 md:hidden">{item.name}</span>
              <motion.img
                variants={raiseUp}
                whileHover="animate"
                initial="initial"
                src={item.icon}
                alt={item.name}
                className={`${imgClassName} aspect-square w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12`}
              />
            </motion.div>
          )
        })} 
      </motion.div>
    </motion.div>
  )
}

const Tech = ({ opacity, scale }) => {
  const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()
  const { tech, design, others } = technologies

  return (
    <motion.div
      className={`${styles.contentContainer}`}
      style={{ opacity, scale }}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-tertiary`} >TECHNOLOGIES</p>
        <h2 className={`${styles.sectionHeadText} text-secondary`}>Tech Stack</h2>
      </motion.div>
      <div className="flex flex-col md:w-2/3 text-justify">
        <motion.p
          variants={swivelVariants}
          // variants={fadeIn("", "", 0.2, 1)}
          className={`${styles.sectionText} ${styles.contentSpacing} text-tertiary`}
        >
          Here are some technologies I&apos;ve recently worked with.
        </motion.p>
      </div>
      <motion.div
       className="flex flex-col lg:flex-row justify-center mt-4"
      >
        <TechStack
          label="TECH"
          enterHover={enterHover}
          leaveHover={leaveHover}
          techItems={tech}
          cursorText={cursorText}
          className="border-secondary"
          imgClassName=""
        />
        <TechStack
          label="DESIGN"
          enterHover={enterHover}
          leaveHover={leaveHover}
          techItems={design}
          cursorText={cursorText}
          className="border-tertiary"
          imgClassName=""
        />
        <TechStack
          label="GENERAL"
          enterHover={enterHover}
          leaveHover={leaveHover}
          techItems={others}
          cursorText={cursorText}
          className="border-yellow-100"
          imgClassName=""
        /> 
      </motion.div>
    </motion.div>
  )
}

const TechHOC = SectionWrapper(Tech, "TechStack")

export default TechHOC