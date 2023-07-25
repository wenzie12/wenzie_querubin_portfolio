import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import { textVariant, fadeIn } from '../../utils/motion'
import { styles } from '../../styles'
import { experiences } from '../../constants'

import VerticalTimeline from '../vertical-timeline/VerticalTimeline.component'
import { SectionWrapper } from '../../hoc'

// context
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const Experience = () => {
  const { activeState: {active, setActive }, } = useGlobalStateContext()

  // intersection observer
  const { ref, inView } = useInView({
    // rootMargin: "-200px 0px",
    threshold: .3,
  })

  useEffect(() => {
    if(inView) setActive("Experience")
    if (!inView && active === "Experience") setActive("")
  }, [inView, active, setActive])
    
  return (
    <motion.div
      inView={inView}
      ref={ref}
      className={`${styles.contentContainer}`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} dark:text-tertiary text-tertiary-lt`} >What I&apos;ve done so far</p>
        <h2 className={`${styles.sectionHeadText} dark:text-secondary text-secondary-lt`}>Experience</h2>
      </motion.div>

      <motion.div variants={fadeIn("", "", 0.2, 1)} className={`${styles.contentSpacing} mt-4 flex flex-col`}> 
        <VerticalTimeline data={experiences} />
      </motion.div>
    </motion.div>
  )
}

const ExperienceHOC = SectionWrapper(Experience, "experience")

export default ExperienceHOC