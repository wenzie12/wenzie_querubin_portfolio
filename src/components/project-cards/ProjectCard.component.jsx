/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { twMerge, twJoin } from 'tailwind-merge'
import { useCustomMediaQuery } from '../../hooks'

import { textVariant, swivelVariants, zoomIn, fadeIn, scaleImageVariant } from '../../utils/motion'
import { styles } from '../../styles'
import ProjectLinks from './ProjectLinks.component'
import { ImageContainer } from '../image-container'
import { HashtagText } from '../custom-text'
import { ActionButton } from '../custom-buttons'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

const ProjectCard = ({data=[], className="" }) => {
  const { isTabletOrMobile } = useCustomMediaQuery()
  const { toggleThemeState: { toggleDarkMode } } = useGlobalStateContext()
  const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

  return (
    <>
      {
        data?.map((item, index) => {
          const { name, description, tags, image, source_code_link, playstore, appstore, website } = item
          const isOdd = index % 2 !== 0
          return (
              <motion.div
                key={index}
                variants={fadeIn("", "", 0, 0.8)}
                initial="hidden"
                whileInView="show"
                className={twMerge(
                  isOdd && 'flex-row-reverse',
                  styles.dropShadowMd,
                  className,
                  "flex w-full dark:lg:bg-accent-1/50 lg:bg-accent-1-lt/80 rounded-md")}
              >
                <motion.section
                  className="p-6 md:px-4 my-4 md:my-0 dark:bg-accent-1/50 bg-accent-1-lt/80 md:bg-transparent dark:md:bg-transparent rounded-md section-1 flex justify-center w-full md:w-1/2"
                >
                  {/* content */}
                  <div className="md:p-0 lg:p-4 flex flex-col place-content-between">
                    <motion.div
                      initial="hidden"
                      whileInView="show"
                      className={twMerge(styles.cardContainer, "")}
                    >
                      <motion.h3
                        variants={textVariant(.2)}
                        className={twJoin(
                          isOdd && 'md:text-right',
                          "text-[1.25rem] lg:text-[1.5rem] dark:text-secondary text-secondary-lt font-semibold"
                        )}
                      >
                        {name}
                      </motion.h3>
                      <motion.p
                        variants={swivelVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className={twMerge(
                          styles.cardSpacing,
                          "text-justify text-sm leading-[25px] py-4 dark:text-tertiary text-tertiary-lt"
                        )}
                      >
                        {description}
                      </motion.p>
                    </motion.div>
                    <div className={twMerge(styles.cardContainer, "")}>
                      {/* links */}
                      <ProjectLinks
                        isOdd={isOdd}
                        website={website}
                        playstore={playstore}
                        appstore={appstore}
                        source_code_link={source_code_link}
                      />
                      <hr className="dark:border-accent-2 border-accent-2-lt border-1 rounded my-1" />
                      <motion.div className={twJoin(!isOdd ? 'flex-row' : 'md:flex-row-reverse', "flex flex-wrap gap-4 hashtags")}>
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
                  {...(!isTabletOrMobile && {
                    initial: "hidden",
                    whileHover: "show",
                  })}
                  className="section-2 hidden md:flex w-1/2 overflow-hidden relative"
                >
                  <motion.div
                    variants={scaleImageVariant(0, .6)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex justify-center items-center w-full h-full"
                  >
                    <a href={website} target="_blank" rel="noreferrer" hrefLang="en-us" className="flex items-center justify-center">
                      <ImageContainer
                        isMotion
                        onMouseEnter={() => enterHover(toggleDarkMode ? "anchorBlended" : "anchor", {
                          ...cursorText,
                          text: "Live Server",
                        })}
                        onMouseLeave={leaveHover}
                        src={image}
                        alt="project"
                        className={twMerge(styles.ProjectImage, "aspect-auto object-fit object-center grayscale hover:grayscale-0 dark:border-0 border-2")}
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
        className="flex justify-center mt-12 md:mt-20"
      >
        <span
          className="p-2"
          onMouseEnter={() => enterHover("", {
            ...cursorText,
            text: "Coming Soon! :D",
          })}
          onMouseLeave={leaveHover}
        >
          <ActionButton
            label="More Projects"
            isDisabled
            type="button"
            name="more projects"
            className="relative"
          />
        </span>
      </motion.div>
    </>
  )
}

export default ProjectCard
