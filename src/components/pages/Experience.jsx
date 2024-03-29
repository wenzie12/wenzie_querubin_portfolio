import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge';

import SectionHeader from '../section-headers/SectionHeader.component';

import { fadeIn } from '../../utils/motion'
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
      className={twMerge(styles.contentContainer, "")}
    >
      <SectionHeader
        header="Experience"
        sub="What I&apos;ve done so far"
      />
      <motion.div
        variants={fadeIn("", "", 0.2, 1)}
        className={twMerge(styles.contentSpacing, "mt-4 flex flex-col")}
      >
        <VerticalTimeline data={experiences} />
      </motion.div>
    </motion.div>
  )
}

const ExperienceHOC = SectionWrapper(Experience, "experience")

export default ExperienceHOC