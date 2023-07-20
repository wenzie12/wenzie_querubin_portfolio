/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'

import { textVariant, swivelVariants, zoomIn, fadeIn, scaleImageVariant } from '../../utils/motion'
import { styles } from '../../styles'
import ProjectLinks from './ProjectLinks.component'
import { ImageContainer } from '../image-container'
import { HashtagText } from '../custom-text'
import { ActionButton } from '../custom-buttons'

// context
import { useCursorContext } from '../../context/HOCContext'

const ProjectCard = ({data=[], className="" }) => {
  const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

  return (
    <>
      {
        data?.map((item, index) => {
          const { name, descriptions, tags, image, source_code_link, playstore, appstore, website } = item
          const isOdd = index % 2 !== 0
          return (
              // ${!isOdd && 'border-b-4 border-accent-1'}
              <motion.div
                key={index}
                variants={fadeIn("", "", 0, 0.8)}
                initial="hidden"
                whileInView="show"
                className={`${className} ${isOdd && 'flex-row-reverse'} flex w-full lg:bg-accent-1/40 rounded-md`}
              >
                <motion.section
                  className="p-6 md:px-4 my-4 md:my-0 bg-accent-1/40 md:bg-transparent rounded-md section-1 flex justify-center w-full md:w-1/2"
                >
                  {/* content */}
                  <div className="md:p-0 lg:p-4 flex flex-col place-content-between">
                    <motion.div initial="hidden" whileInView="show" className={`${styles.cardContainer}`}>
                      <motion.h3
                        variants={textVariant(.2)}
                        className={`${isOdd && 'md:text-right'} text-[1.25rem] lg:text-[1.5rem] text-secondary font-semibold italic`}
                      >
                        {name}
                      </motion.h3>
                      {/* TODO: workaround for max height and "read more." modal for extra long texts */}
                      {/* <motion.p className={`${styles.cardSpacing} text-justify text-sm leading-[25px] py-4 text-tertiary max-h-64 overflow-y-auto`}> */}
                      <motion.p className={`${styles.cardSpacing} text-justify text-sm leading-[25px] py-4 text-tertiary max-h-64 overflow-y-auto`}>
                        {descriptions?.map((description, i) => (
                          <motion.span
                            key={i}
                            variants={swivelVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="inline-block mb-2"
                          >
                            {description}
                          </motion.span>
                        ))}
                      </motion.p>
                    </motion.div>
                    <div className={`${styles.cardContainer}`}>
                      {/* links */}
                      <ProjectLinks
                        isOdd={isOdd}
                        website={website}
                        playstore={playstore}
                        appstore={appstore}
                        source_code_link={source_code_link}
                      />
                      <hr className="border-accent-2 border-1 rounded my-1" />
                      <motion.div className={`${!isOdd ? 'flex-row' : 'md:flex-row-reverse'} flex flex-wrap gap-4 hashtags`}>
                        {tags?.map((tag, i) => (
                          <motion.div
                            key={i}
                            variants={zoomIn(0.1 * i,)}
                            onMouseEnter={() => enterHover("hideHover")}
                            onMouseLeave={leaveHover} 
                            className="inline-block"
                          >
                            <HashtagText label={tag.name}/>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.section>
                <motion.section
                  initial="hidden"
                  whileHover="show" 
                  className="section-2 hidden md:flex w-1/2 overflow-hidden relative"
                >
                  <motion.div
                    variants={scaleImageVariant(0, .6)}
                    initial="hidden"
                    whileInView="show"
                    className="flex justify-center items-center w-full h-full"
                  >
                    <a href={website} target="_blank" rel="noreferrer" hrefLang="en-us" className="flex items-center justify-center">
                      <ImageContainer
                        isMotion
                        onMouseEnter={() => enterHover("anchorBlended", {
                          ...cursorText,
                          text: "live server",
                          // offset: 0, 
                          // color: "#000000",
                        })}
                        onMouseLeave={leaveHover}
                        src={image}
                        alt="project"
                        className={`${styles.ProjectImage} aspect-auto object-fit object-center grayscale hover:grayscale-0`}
                      />
                    </a>
                  </motion.div>
                </motion.section>
              </motion.div>
            )
        })
      }
      
      {/* TOOD: (More Project) move in a custom component (button) */}
      <motion.div
        variants={fadeIn("", "", 0, 0.8)}
        initial="hidden"
        whileInView="show"
        className="flex justify-center w-full mt-12 md:mt-20"
      >
        <ActionButton
          label="More Projects"
          isDisabled
          type="button"
          name="more projects"
          onMouseEnter={() => enterHover("", {
            ...cursorText,
            text: "comming soon! :D",
          })}
          onMouseLeave={leaveHover}
        />
      </motion.div>
    </>
  )
}

export default ProjectCard
