
/* eslint-disable */
import { motion } from 'framer-motion'

import { textVariant, swivelVariants, raiseUp, zoomIn, fadeIn, scaleImageVariant } from '../../utils/motion'
import { styles } from '../../styles'
import ProjectLinks from './ProjectLinks.component'

// context
import { useCursorContext } from '../../context/HOCContext'

const ProjectCard = ({data=[], className="" }) => {
  const {
    cursorTextState: { cursorText },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()

  const hoverImageVariants = {
    // show: (height = 1000) => ({
		// 	clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
		// 	transition: {
		// 		type: "spring",
		// 		stiffness: 20,
		// 		restDelta: 2,
		// 	}
		// }),
    show: {
			clipPath: `circle(${1000 * 2 + 200}px at 100% 0)`,
			transition: {
				type: "spring",
        ease: "easeInOut",
        delay: .4,
				stiffness: 20,
				restDelta: 2,
			}
		},
		hidden: {
			clipPath: "circle(0% at 95% 0)",
			transition: {
				type: "spring",
        ease: "easeInOut",
        delay: .4,
				stiffness: 400,
				damping: 40,
			}
		}
  }

  return (
    <>
      {
        data?.map((item, index) => {
          const { name, description, tags, image, imageMobile,  source_code_link, playstore, appstore, website } = item
          const isOdd = index % 2 !== 0
          
          return (
              // ${!isOdd && 'border-b-4 border-blue-100'}
              <motion.div
                key={index}
                variants={fadeIn("", "", 0, 0.8)}
                initial="hidden"
                whileInView="show"
                className={`${className} ${isOdd && 'flex-row-reverse'} flex w-full lg:bg-blue-100 rounded-md`}
              >
                {/* <motion.section className={`${isOdd ? 'pl-8 md:pl-10' : 'pr-8 md:pr-10'} section-1 flex justify-center w-1/2`}> */}
                <motion.section
                  className="p-6 md:px-4 my-4 md:my-0 bg-blue-100 md:bg-transparent rounded-md section-1 flex justify-center w-full md:w-1/2"
                >
                  {/* content */}
                  <div className="md:p-0 lg:p-4 flex flex-col place-content-between">
                    <motion.div initial="hidden" whileInView="show" className={`${styles.cardContainer}`}>
                      <motion.h3
                        // variants={swivelVariants}
                        variants={textVariant(.2)}
                        className={`${isOdd && 'md:text-right'} text-[1.25rem] lg:text-[1.5rem] text-secondary font-semibold italic`}
                      >
                        {name}
                      </motion.h3>
                      <motion.p
                        variants={swivelVariants}
                        initial="hidden"
                        whileInView="show"
                        className={`${styles.cardSpacing} text-justify text-sm leading-[25px] py-4 text-tertiary`}
                      >
                        {description}
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
                      <hr className="border-blue-200 border-1 rounded my-1" />
                      {/* todo: move mo to sa hashtagText later.. same dun sa about section */}
                      <motion.div variants={swivelVariants} className={`${!isOdd ? 'flex-row' : 'md:flex-row-reverse'} flex flex-wrap hashtags text-sm leading-[25px]`}>
                        {tags?.map((tag, i) => (
                          <motion.i variants={zoomIn(0.1 * i)}key={`${tag.name}-${i}`} className="text-secondary pr-3">#
                            <span className="text-blue-200">
                              {`${tag.name}`}
                            </span>
                          </motion.i>
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
                    className="flex items-center w-full h-full"
                  >
                    <a href={website} target="_blank" rel="noreferrer" hreflang="en-us" className="h-full">
                      <motion.img
                        onMouseEnter={() => enterHover("anchorBlended", {
                          ...cursorText,
                          text: "View Live Server",
                          // offset: 0, 
                          // color: "#000000",
                        })}
                        onMouseLeave={leaveHover}
                        className="aspect-auto object-fit object-center lg:w-full lg:h-full grayscale hover:grayscale-0" src={image} alt="project"
                      />
                    </a>
                  </motion.div>
                </motion.section>
              </motion.div>
            )
        })
      }
      
      {/* TOOD: move in a custom component */}
      <motion.div
        variants={fadeIn("", "", 0, 0.8)}
        initial="hidden"
        whileInView="show"
        className="flex justify-center w-full mt-12 md:mt-20"
      >
        <motion.button
          variants={raiseUp}
          whileHover="animate"
          initial="initial"
          type="button"
          onClick={() => console.log("more projects!")}
          onMouseEnter={() => enterHover("hideHover")}
          onMouseLeave={leaveHover} 
          className={`${styles.borderBox} h-[30px] flex items-center justify-center rounded-md border-secondary px-3 text-[12px]`}
          // className={`h-[30px] flex items-center justify-center rounded-md border-secondary px-3 text-[12px]`}
        >
          {/* <i className="text-secondary text-bold mr-1">#</i> */}
          <span className="text-white-100">More Projects</span>
        </motion.button>
      </motion.div>
    </>
  )
}

export default ProjectCard
