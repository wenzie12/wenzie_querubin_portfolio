// todo: update title to "PROJECTS" to avoid confusion
/* eslint-disable */
import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { useInView } from 'react-intersection-observer';

import { textVariant, fadeIn, raiseUp, swivelVariants } from '../../utils/motion'
import { styles } from '../../styles'
import { link, github } from '../../assets'
import ProjectCard from '../project-cards/ProjectCard.component'

import { projects } from "../../constants"

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

// for mobile: todo: either ilipat ko sa separate component or di ko nalang gamitin
const ProjectCards = ({ data, className }) => {
  const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

  return (
    <>
      <div className={`${styles.contentSpacing} ${className} flex justify-center items-start flex-wrap w-full gap-8`}>
        {
          // project cards
          data?.map((item, index) => {
            const { name, description, tags, image, source_code_link, website } = item

            return (
              <motion.div
                key={index} // temporary id
                variants={raiseUp}
                whileHover="animate"
                initial="initial"
								onMouseEnter={() => enterHover("hideHover")}
                onMouseLeave={leaveHover}
                className="basis-[320px] rounded-sm  bg-blue-100"
              >
                {/* img container */}
                <div className="flex justify-center p-4">
                  {/* change img to background later */}
                  <img src={image} alt="project" className="w-full h-36" />
                </div>
                {/* content */}
                <div className="lg:p-4">
                  <h3 className="text-[24px] text-white-100 font-normal italic">{name}</h3>
                  <motion.p
                    variants={fadeIn("", "", 0.2, 1)}
                    className={`${styles.cardSpacing} text-sm leading-[25px] py-4 text-tertiary`}
                  >
                    {description}
                  </motion.p>
                  <div className="flex flex-wrap hashtags text-sm leading-[25px]">
                    {tags?.map((tag, i) => (
                      <i key={`${tag.name}-${i}`} className={`${tag.color} pr-2`}>{`#${tag.name}`}</i>
                    ))}
                  </div>

                  {/* links */}
                  <div className={`${styles.cardSpacing} flex flex-row justify-start text-sm leading-[25px] py-3 gap-x-4`}>
                    <motion.a
											onMouseEnter={() => enterHover("", {
												...cursorText,
												offset: 75,
												text: "live server",
												// color: "#D4494C",
											})}
											onMouseLeave={() => { 
												leaveHover()
												enterHover("hideHover")
											}}
                      href={website}
                      target="_blank"
                      rel="noreferrer"
                      hrefLang="en-us"
                      clasName="px-2"
                    >
                      <img src={link} alt="live-server" className=""/>
                    </motion.a>
                    <motion.a
											onMouseEnter={() => enterHover("", {
												...cursorText,
												offset: 75,
												text: "source code",
												// color: "#D4494C",
											})}
											onMouseLeave={() => { 
												leaveHover()
												enterHover("hideHover")
											}}
                      href={source_code_link}
                      target="_blank"
                      rel="noreferrer"
                      hrefLang="en-us"
                      clasName="px-2"
                    >
                      <img src={github} alt="source-code" className=""/>
                    </motion.a>
                  </div>
                </div>
              </motion.div>)
          })
        }
        {/* end content */}
      </div>
    </>
  )
}

const Works = ({ opacity, scale }) => {
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

const WorksHOC = SectionWrapper(Works, "projects")

export default WorksHOC