/* eslint-disable */
import { useEffect } from 'react';
import { motion } from 'framer-motion'

import { textVariant, fadeIn } from '../../utils/motion'
import { styles } from '../../styles'
import { experiences } from '../../constants'
import { useInView } from 'react-intersection-observer';

import VerticalTimeline from '../vertical-timeline/VerticalTimeline.component'
import { SectionWrapper } from '../../hoc'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const Experience = ({ opacity, scale }) => { // ref from sectionWrapper
  const { activeState: { setActive }, } = useGlobalStateContext()

  // intersection observer
  const { ref, inView } = useInView({
    // rootMargin: "-200px 0px",
    threshold: .3,
  })

  useEffect(() => {
    if(inView) setActive("Works")
    if(!inView) setActive("")
  }, [inView])

  return (
    <motion.div
      inView={inView}
      ref={ref}
      // style={{ opacity, scale }}
      className={`${styles.contentContainer}`}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-tertiary`} >What I've done so far</p>
        <h2 className={`${styles.sectionHeadText} text-secondary`}>Experience</h2>
      </motion.div>

      {/* testing lang variant netong div, palitan mo later lg:w-4/5 */}
      <motion.div variants={fadeIn("", "", 0.2, 1)} className={`${styles.contentSpacing} mt-4 flex flex-col`}> 
        <VerticalTimeline data={experiences} />
      </motion.div>
    </motion.div>
  )
}

const ExperienceHOC = SectionWrapper(Experience, "experience")

export default ExperienceHOC