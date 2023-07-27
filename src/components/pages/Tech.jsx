/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { fadeIn, raiseUp, zoomIn, swivelVariants, textVariant, chevronVariant } from '../../utils/motion'
import { styles } from '../../styles'
import { ImageContainer } from '../image-container'
import { SectionWrapper } from '../../hoc'
import { useCustomMediaQuery } from '../../hooks'

import { technologies } from '../../constants'
import { ChevronDown } from 'lucide-react'

// context
import { useCursorContext } from '../../context/HOCContext'

const TechStack = ({ label, className, imgClassName, enterHover, leaveHover, techItems, cursorText }) => {
  const { isTabletOrMobile } = useCustomMediaQuery()
  return (
    <motion.div className="flex flex-col lg:w-1/3 mb-4 md:mb-0">
      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className={`${styles.sectionText} flex flex-row items-center gap-2 text-normal dark:text-tertiary text-tertiary-lt`}
      >
        <motion.span
          variants={chevronVariant}
          initial="initial"
          whileInView="animate"
        >
          <ChevronDown className="w-6 h-6 dark:text-secondary text-secondary-lt" />
        </motion.span>
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
              <span className="text-xs dark:text-accent-2 text-accent-2-lt md:hidden">{item.name}</span>
              <ImageContainer
                {...(!isTabletOrMobile && {
                  isMotion: true,
                  variants: raiseUp,
                  whileHover: "animate",
                  initial: "initial",
                })}
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

const Tech = () => {
  const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()
  const { tech, design, others } = technologies

  return (
    <motion.div className={`${styles.contentContainer}`}>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-tertiary text-tertiary-lt`} >TECHNOLOGIES</p>
        <h2 className={`${styles.sectionHeadText} dark:text-secondary text-secondary-lt`}>Tech Stack</h2>
      </motion.div>
      <div className="flex flex-col md:w-2/3 text-justify">
        <motion.p
          variants={swivelVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className={`${styles.sectionText} ${styles.contentSpacing} dark:text-tertiary text-tertiary-lt`}
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
          className=""
          imgClassName={styles.dropShadowMd}
        />
        <TechStack
          label="DESIGN"
          enterHover={enterHover}
          leaveHover={leaveHover}
          techItems={design}
          cursorText={cursorText}
          className=""
          imgClassName={styles.dropShadowMd}
        />
        <TechStack
          label="GENERAL"
          enterHover={enterHover}
          leaveHover={leaveHover}
          techItems={others}
          cursorText={cursorText}
          className=""
          imgClassName={styles.dropShadowMd}
        /> 
      </motion.div>
    </motion.div>
  )
}

const TechHOC = SectionWrapper(Tech, "TechStack")

export default TechHOC