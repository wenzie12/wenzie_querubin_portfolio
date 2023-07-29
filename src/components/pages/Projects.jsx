import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'
import { SectionWrapper } from '../../hoc'

import SectionHeader from '../section-headers/SectionHeader.component'

import { swivelVariants } from '../../utils/motion'
import { styles } from '../../styles'
import { ProjectCard } from '../project-cards'

import { projects } from "../../constants"

// context
import { useGlobalStateContext } from '../../context/GlobalStateContext'

// eslint-disable-next-line react/prop-types
const Projects = () => {
  const { activeState: { active, setActive }, } = useGlobalStateContext()

  // intersection observer
  const { ref, inView } = useInView({
    threshold: [.2, .5],
    initialInView: true,
    // rootMargin: "-200px 0px",
    // threshold: .3,
  })

  useEffect(() => {
    if(inView) setActive("Projects")
    if (!inView && active === "Projects") setActive("")
  }, [inView, active, setActive])

  return (
    <>
      <motion.div
        inView={inView}
        ref={ref}
        className={twMerge(styles.contentContainer, "")}
      >
        <SectionHeader
          header="Projects"
          sub="MY WORK"
        />
        <div className="">
          <div className="flex flex-col md:w-2/3 mb-2 md:mb-8">
            <motion.p
              variants={swivelVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className={twMerge(styles.sectionText, "dark:text-tertiary text-tertiary-lt")}
            >
              Here are few of the projects that I am genuinely proud to have been part of,
              as I played a significant role and made substantial contributions to their success.
            </motion.p>
          </div>

          {/* content */}
            <ProjectCard data={projects}  className="" />
        </div>
      </motion.div>
    </>
  )
}

const ProjectsHOC = SectionWrapper(Projects, "projects")

export default ProjectsHOC