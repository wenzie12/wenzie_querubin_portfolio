import { useEffect } from 'react';
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SectionWrapper } from '../../hoc'

import { textVariant, fadeIn, raiseUp, zoomIn, swivelVariants, scaleImageVariant } from '../../utils/motion'
import { styles } from '../../styles'
import { HighlightedText, HashtagText } from '../custom-text';
import { ImageContainer } from '../image-container/'

import { profile, chevronDown } from '../../assets'

// context
import { useCursorContext } from '../../context/HOCContext'
import { useGlobalStateContext } from '../../context/GlobalStateContext'

import { interests } from '../../constants'

// eslint-disable-next-line react/prop-types
const About = ({ opacity, scale }) => {
  const {
    cursorTextState: { cursorText, setCursorText },
    cursorVariantState : { setCursorVariant },
    hoverEvents: { enterHover, leaveHover },
  } = useCursorContext()
  const { activeState: { active, setActive }, } = useGlobalStateContext()

  // intersection observer
  const { ref, inView } = useInView({
    // rootMargin: "-200px 0px",
    // threshold: 1,
  })

  useEffect(() => {
    if(inView) setActive("About")
    if (!inView && active === "About") setActive("")
  }, [inView, active, setActive])

  return (
    <motion.div
      inView={inView}
      className={`${styles.contentContainer}`}
      style={{ opacity, scale }}
    >
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-tertiary`} >Introduction</p>
        <h2 className={`${styles.sectionHeadText} text-secondary`}>About Me</h2>
      </motion.div>
      
      <div ref={ref} className="flex-col-reverse md:flex-row flex gap-x-10">
        {/* left section */}
        <div className="flex flex-col md:w-1/2 text-justify">
          <motion.p
            variants={swivelVariants}
            className={`${styles.sectionText} ${styles.contentSpacing} text-tertiary`}
          >
            <motion.span className="inline-block" variants={swivelVariants}>
              
              {/* TODO: maybe move this to a separate container later */}
              I&apos;m Wenzie, a Frontend Software Developer currently working at
              <i className='text-secondary'> Multisys Technologies Corp </i>
            </motion.span>
            <br />
            <br />
            <motion.span className="inline-block" variants={swivelVariants}>
              {/* With a passion for crafting exceptional user experiences, 
              I thrive in the world of frontend web development. */}
              As a frontend developer, I find joy in blending creativity and functionality. 
              My expertise lies in creating seamless interactions and visually appealing interfaces 
              through UI/UX design. My expertise lies in 
              <HighlightedText className="text-white-100 px-1" delay={0.6}>ReactJS</HighlightedText>,
              <HighlightedText className="text-white-100 px-1" delay={0.6}>Javascript</HighlightedText> and
              <HighlightedText className="text-white-100" delay={0.6}>TypeScript</HighlightedText>, 
              enabling me to bring innovative and intuitive designs to life.
              <br />
              <br />
              Beyond work, I indulge in woodworking to unleash my creativity and create tangible 
              objects from scratch. Aquascaping is another passion, providing serenity and inspiration 
              through beautiful underwater landscapes.
              <br />
              <br />
              I am always eager to take on new challenges, collaborate with like-minded individuals,
              and push the boundaries of what is possible in frontend development. 
              {/* Let&apos;s connect and bring your ideas to life! */}
            </motion.span>
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.2, 1)}
            className={`${styles.sectionText} ${styles.contentSpacing} flex flex-row gap-2 text-normal text-tertiary`}
          >
            <ImageContainer
              isMotion
              initial={{ transform: "rotate(-90deg)", }}
              whileInView={{ transform: "rotate(0)", transition: { delay: .8, }}}
              src={chevronDown}
              alt="chevron"
            />
            HOBBIES & INTERESTS
          </motion.p>
          <InterestsGroup
            data={interests}
            cursorText={cursorText}
            setCursorText={setCursorText}
            setCursorVariant={setCursorVariant}
            enterHover={enterHover}
            leaveHover={leaveHover}
            className="hidden lg:flex flex-wrap gap-4"
          />
        </div>
        
        {/* right section */}
        <motion.div className="flex justify-center md:w-1/2 py-8 md:py-0">
          <motion.div
            variants={fadeIn("up", "tween",0.2, .4)}
            initial="hidden"
            whileInView="show"
            className="group relative"
          >
          <motion.span
            variants={fadeIn("up", "spring",0.4, .8)}
            className="absolute top-3 -right-3 md:-top-6 md:-right-6 rounded-sm w-full h-full max-h-[24rem] lg:max-h-[28rem] bg-blue-100"
          />
          <motion.div
            variants={raiseUp}
            initial="initial"
            whileHover="animate"
            className="overflow-hidden flex justify-center w-48 md:w-auto"
          >
            <ImageContainer
              isMotion
              variants={scaleImageVariant}
              src={profile}
              alt="profile"
              className="aspect-auto max-h-[24rem] lg:max-h-[28rem] rounded-sm grayscale-0 md:grayscale group-hover:grayscale-0"
            />
          </motion.div>
          </motion.div>
        </motion.div>
      </div>
      <InterestsGroup
        data={interests}
        enterHover={enterHover}
        leaveHover={leaveHover}
        className="lg:hidden flex flex-wrap gap-4"
        // className="md:hidden flex flex-wrap gap-4"
      />
    </motion.div>
  )
}

// eslint-disable-next-line react/prop-types
const InterestsGroup = ({ className,  enterHover, leaveHover, data }) => {
  return (
    <motion.div
      variants={swivelVariants}
      className={className}>
      {
        // eslint-disable-next-line react/prop-types
        data?.map((item, i) => {
          return (
            // TODO: move mo to sa hashtagText component later
            <motion.div
              key={i}
              variants={zoomIn(0.1 * i,)}
              onMouseEnter={() => enterHover("hideHover")}
              onMouseLeave={leaveHover}
              className="inline-block"
            >
              <HashtagText label={item}/>
            </motion.div>
          )
        })
      }
    </motion.div>
  )
}

const AboutHOC = SectionWrapper(About, "about")
export default AboutHOC