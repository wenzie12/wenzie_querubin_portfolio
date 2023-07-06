// todo: update title to "PROJECTS" to avoid confusion
/* eslint-disable */
import { useEffect } from 'react';
import { motion, useInView } from 'framer-motion'
import { SectionWrapper } from '../../hoc'

import { textVariant, swivelVariants } from '../../utils/motion'
import { styles } from '../../styles'
import { ProjectCard } from '../project-cards'

import { projects } from "../../constants"

// context
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const Projects = ({ opacity, scale }) => {
  const { activeState: { setActive }, } = useGlobalStateContext()
    // intersection observer
    const { ref, inView } = useInView({
      // rootMargin: "-200px 0px",
      // threshold: [.2, .5],
      threshold: .3,
    })
  
    useEffect(() => {
      if(inView) setActive("Projects")
      if(!inView) setActive("")
    }, [inView])

  return (
    <motion.div
      inView={inView}
      className={`${styles.contentContainer}`}
      style={{ opacity, scale }}
    >
      <motion.div variants={textVariant()}>
        {/* header */}
        <p className={`${styles.sectionSubText} text-tertiary`} >MY WORK</p>
        <h2 className={`${styles.sectionHeadText} text-secondary`}>Projects</h2>
      </motion.div>

      <div ref={ref} className="">
        {/* description */}
        <div className="flex flex-col md:w-2/3 mb-2 md:mb-8">
          <motion.p
            variants={swivelVariants}
            // initial="hidden"
            // whileInView={"show"} 
            // viewport={{ once: false, amount: 0.25 }}
            className={`${styles.sectionText} ${styles.contentSpacing} text-tertiary`}
          >
            {/* Following projects showcases my skills and experience through real-world examples of my work. */}
            Here are the projects that I am genuinely proud to have been a part of,
            as I played a significant role and made substantial contributions to their success.
          </motion.p>
        </div>

        {/* content */}
          <ProjectCard data={projects}  className="" />
      </div>
    </motion.div>
  )
}

const ProjectsHOC = SectionWrapper(Projects, "projects")

export default ProjectsHOC